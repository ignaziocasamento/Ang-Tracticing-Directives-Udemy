import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showParagraph: any = false;
  logArr = [];

  onToggle(event) {
    event = this.showParagraph;
    if (event === false) {
      event = 'Secret Password: Tuna'
      this.logArr.push(event)
    } else {
      this.showParagraph = true;
      event = "It's not a secret!"
      this.logArr.push(event)
    }
    this.showParagraph = !this.showParagraph;
    console.log(this.logArr)
  }

  getBg(i: number) {
    if (this.logArr.length > 4) {
      if (i > 3)
      return 'blue'
    } else {
      return 'transparent'
    }
  }
}
