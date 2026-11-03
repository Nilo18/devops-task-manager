import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { Workspace } from '../../../workspace';

@Component({
  selector: 'app-settings-section',
  imports: [MatIconModule],
  templateUrl: './settings-section.html',
  styleUrl: './settings-section.scss',
})
export class SettingsSection {
  readonly workspace = inject(Workspace);

  private readonly regional = new Intl.DateTimeFormat().resolvedOptions();
  readonly locale = this.regional.locale;
  readonly timeZone = this.regional.timeZone;
}
