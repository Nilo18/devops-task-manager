import { MatIconModule } from '@angular/material/icon';
import { Component, inject } from '@angular/core';

import { Workspace } from '../../../workspace';

@Component({
  selector: 'app-reports-section',
  imports: [MatIconModule],
  templateUrl: './reports-section.html',
  styleUrl: './reports-section.scss',
})
export class ReportsSection {
  readonly workspace = inject(Workspace);


}
