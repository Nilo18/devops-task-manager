import { MatIconModule } from '@angular/material/icon';
import { Component, inject, signal } from '@angular/core';

import { Workspace, type Item, summarize } from '../../../workspace';

@Component({
  selector: 'app-dashboard-section',
  imports: [MatIconModule],
  templateUrl: './dashboard-section.html',
  styleUrl: './dashboard-section.scss',
})
export class DashboardSection {
  readonly workspace = inject(Workspace);
  readonly filtered = (items: readonly Item[]) => items.filter(item => item.date.startsWith(`${this.year()}-${String(this.month() + 1).padStart(2, '0')}-`));
  readonly metrics = () => summarize(this.filtered(this.workspace.tasks()));
  readonly visible = () => this.filtered(this.checklist() ? this.workspace.checklist() : this.workspace.tasks());
  readonly completed = () => this.visible().filter(item => item.done);
  readonly pending = () => this.visible().filter(item => !item.done);
  private readonly today = new Date();
  readonly month = signal(this.today.getMonth());
  readonly year = signal(this.today.getFullYear());
  readonly months = Array.from({ length: 12 }, (_, index) => new Intl.DateTimeFormat('en', { month: 'long' }).format(new Date(2000, index)));
  readonly years = Array.from({ length: 11 }, (_, index) => this.today.getFullYear() - 5 + index);
  readonly checklist = signal(false);
  readonly stats = [
    { label: 'Total Tasks', icon: 'checklist', tone: 'neutral' },
    { label: 'Completed', icon: 'check_circle_outline', tone: 'green' },
    { label: 'Pending', icon: 'schedule', tone: 'amber' },
    { label: 'Overdue', icon: 'error_outline', tone: 'red' },
  ];
}

