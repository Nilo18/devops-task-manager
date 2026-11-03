import { MatIconModule } from '@angular/material/icon';
import { Component, inject } from '@angular/core';

import { Workspace, localDate } from '../../../workspace';

@Component({
  selector: 'app-tasks-section',
  imports: [MatIconModule],
  templateUrl: './tasks-section.html',
  styleUrl: './tasks-section.scss',
})
export class TasksSection {
  readonly workspace = inject(Workspace);
  readonly today = localDate();

}
