import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'azion-init-angular';
  isDarkMode = false;
  isLoading = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000); // simulate loading time
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
  }
}
