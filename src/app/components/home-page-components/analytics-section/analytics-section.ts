import { Component, inject } from '@angular/core';

import { Workspace, localDate, summarize } from '../../../workspace';

@Component({
  selector: 'app-analytics-section',
  imports: [],
  templateUrl: './analytics-section.html',
  styleUrl: './analytics-section.scss',
})
export class AnalyticsSection {
  readonly workspace = inject(Workspace);
  readonly tasks = () => summarize(this.workspace.tasks());
  readonly checklist = () => summarize(this.workspace.checklist().filter(item => item.date === localDate()));

}
