import { MatIconModule } from '@angular/material/icon';
import { Component, inject, input, output } from '@angular/core';

import { Workspace } from '../../../workspace';

@Component({
  selector: 'app-sidebar',
  imports: [MatIconModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  readonly workspace = inject(Workspace);

  readonly active = input(0);
  readonly navigate = output<number>();
  readonly links = ["Dashboard","Tasks","Daily Checklist","Analytics","Reports","Settings"];
  readonly icons = ['dashboard', 'list_alt', 'checklist', 'bar_chart', 'description', 'settings'];
}

