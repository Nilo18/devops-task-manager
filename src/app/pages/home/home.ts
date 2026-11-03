import { Component, inject, signal } from '@angular/core';
import { Sidebar } from '../../components/home-page-components/sidebar/sidebar';
import { Header } from '../../components/home-page-components/header/header';
import { DashboardSection } from '../../components/home-page-components/dashboard-section/dashboard-section';
import { TasksSection } from '../../components/home-page-components/tasks-section/tasks-section';
import { ChecklistSection } from '../../components/home-page-components/checklist-section/checklist-section';
import { AnalyticsSection } from '../../components/home-page-components/analytics-section/analytics-section';
import { ReportsSection } from '../../components/home-page-components/reports-section/reports-section';
import { SettingsSection } from '../../components/home-page-components/settings-section/settings-section';

import { Workspace } from '../../workspace';

@Component({
  selector: 'app-home',
  imports: [Sidebar, Header, DashboardSection, TasksSection, ChecklistSection, AnalyticsSection, ReportsSection, SettingsSection],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  readonly workspace = inject(Workspace);
  readonly active = signal(0);
  readonly sidebarOpen = signal(true);
}

