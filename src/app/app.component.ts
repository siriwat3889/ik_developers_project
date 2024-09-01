import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { SeviceComponent } from "./sevice/sevice.component";
import { AboutUsComponent } from "./about-us/about-us.component";
import { AboutUsSubComponent } from "./about-us-sub/about-us-sub.component";
import { WorkingComponent } from "./working/working.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, HomePageComponent, SeviceComponent, AboutUsComponent, AboutUsSubComponent, WorkingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ik-developers';
}
