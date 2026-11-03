import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-settings-section',
  imports: [MatIconModule],
  templateUrl: './settings-section.html',
  styleUrl: './settings-section.scss',
})
export class SettingsSection {
  private readonly regional = new Intl.DateTimeFormat().resolvedOptions();
  readonly locale = this.regional.locale;
  readonly timeZone = this.regional.timeZone;
}
