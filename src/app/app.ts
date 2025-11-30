import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from './components/layout/sidebar/sidebar';
import { Navbar } from './components/layout/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Sidebar, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('signals');
}
