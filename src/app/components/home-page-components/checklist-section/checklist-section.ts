import { MatIconModule } from '@angular/material/icon';
import { Component, inject } from '@angular/core';

import { Workspace, localDate, summarize } from '../../../workspace';

@Component({
  selector: 'app-checklist-section',
  imports: [MatIconModule],
  templateUrl: './checklist-section.html',
  styleUrl: './checklist-section.scss',
})
export class ChecklistSection {
  readonly workspace = inject(Workspace);
  readonly items = () => this.workspace.checklist().filter(item => item.date === localDate());
  readonly completed = () => summarize(this.items()).completed;

}
