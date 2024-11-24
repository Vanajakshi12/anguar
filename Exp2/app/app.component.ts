import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { C1Component } from "./c1/c1.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, C1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'exp2';
}
