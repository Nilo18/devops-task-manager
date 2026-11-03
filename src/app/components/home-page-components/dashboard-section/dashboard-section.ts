import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-dashboard-section',
  templateUrl: './dashboard-section.html',
  styleUrl: './dashboard-section.scss',
})
export class DashboardSection {
  private readonly today = new Date();
  readonly month = this.today.getMonth();
  readonly year = this.today.getFullYear();
  readonly months = Array.from({ length: 12 }, (_, index) => new Intl.DateTimeFormat('en', { month: 'long' }).format(new Date(2000, index)));
  readonly years = Array.from({ length: 11 }, (_, index) => this.year - 5 + index);
  readonly checklist = signal(false);
  readonly stats = [
    { label: 'Total Tasks', icon: '☷', tone: 'neutral' },
    { label: 'Completed', icon: '⊙', tone: 'green' },
    { label: 'Pending', icon: '◷', tone: 'amber' },
    { label: 'Overdue', icon: 'ⓘ', tone: 'red' },
  ];
}

