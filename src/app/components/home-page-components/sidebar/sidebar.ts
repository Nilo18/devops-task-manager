import { MatIconModule } from '@angular/material/icon';
import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  imports: [MatIconModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  readonly active = input(0);
  readonly navigate = output<number>();
  readonly links = ["Dashboard","Tasks","Daily Checklist","Analytics","Reports","Settings"];
  readonly icons = ['dashboard', 'list_alt', 'checklist', 'bar_chart', 'description', 'settings'];
}

