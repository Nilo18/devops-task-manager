import { describe, expect, it } from 'vitest';
import { summarize } from './workspace';

describe('summarize', () => {
  it('counts overdue tasks as pending and excludes completed tasks from overdue', () => {
    const task = { title: 'Task', priority: 'Normal', done: false };
    const items = [
      { ...task, id: '1', date: '2026-11-01', done: true },
      { ...task, id: '2', date: '2026-11-02' },
      { ...task, id: '3', date: '2026-11-03' },
    ];

    expect(summarize(items, '2026-11-03')).toEqual({
      total: 3, completed: 1, pending: 2, overdue: 1, rate: '33%',
    });
  });

  it('leaves the completion rate unavailable for an empty list', () => {
    expect(summarize([], '2026-11-03').rate).toBe('—');
  });
});
