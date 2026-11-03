import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  readonly expanded = input(true);
  readonly toggle = output<void>();
}

