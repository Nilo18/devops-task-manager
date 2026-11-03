import { Injectable, signal } from '@angular/core';

export interface Item {
  id: string;
  title: string;
  date: string;
  priority: string;
  done: boolean;
}

export function localDate(date = new Date()): string {
  return [date.getFullYear(), String(date.getMonth() + 1).padStart(2, '0'), String(date.getDate()).padStart(2, '0')].join('-');
}

export function summarize(items: readonly Item[], today = localDate()) {
  const completed = items.filter(item => item.done).length;
  return {
    total: items.length,
    completed,
    pending: items.length - completed,
    overdue: items.filter(item => !item.done && item.date < today).length,
    rate: items.length ? Math.round(completed / items.length * 100) + '%' : '—',
  };
}

@Injectable({ providedIn: 'root' })
export class Workspace {
  private readonly data = signal(this.load());
  readonly storageError = signal(false);

  readonly tasks = () => this.data().tasks;
  readonly checklist = () => this.data().checklist;
  readonly name = () => this.data().name;
  readonly reports = () => this.data().reports;

  add(list: 'tasks' | 'checklist', title: string, date = localDate(), priority = 'Normal') {
    if (!title.trim() || !date) return false;
    const item = { id: crypto.randomUUID(), title: title.trim(), date, priority, done: false };
    return this.save({ ...this.data(), [list]: [...this.data()[list], item] });
  }

  toggle(list: 'tasks' | 'checklist', id: string) {
    this.save({ ...this.data(), [list]: this.data()[list].map(item => item.id === id ? { ...item, done: !item.done } : item) });
  }

  remove(list: 'tasks' | 'checklist', id: string) {
    this.save({ ...this.data(), [list]: this.data()[list].filter(item => item.id !== id) });
  }

  rename(name: string) {
    if (name.trim()) this.save({ ...this.data(), name: name.trim() });
  }

  createReport() {
    const report = { id: crypto.randomUUID(), date: localDate(), tasks: summarize(this.tasks()), checklist: summarize(this.checklist().filter(item => item.date === localDate())) };
    this.save({ ...this.data(), reports: [report, ...this.reports()] });
  }

  private load() {
    const initial: { tasks: Item[]; checklist: Item[]; name: string; reports: { id: string; date: string; tasks: ReturnType<typeof summarize>; checklist: ReturnType<typeof summarize> }[] } =
      { tasks: [], checklist: [], name: 'TaskFlow', reports: [] };
    try {
      return { ...initial, ...JSON.parse(localStorage.getItem('taskflow.workspace') ?? '{}') } as typeof initial;
    } catch {
      return initial;
    }
  }

  private save(value: ReturnType<Workspace['load']>) {
    try {
      localStorage.setItem('taskflow.workspace', JSON.stringify(value));
      this.data.set(value);
      this.storageError.set(false);
      return true;
    } catch {
      this.storageError.set(true);
      return false;
    }
  }
}

