import { MatIconModule } from '@angular/material/icon';
import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [MatIconModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  readonly expanded = input(true);
  readonly toggle = output<void>();
}

