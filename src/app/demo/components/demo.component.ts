import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent {

  title = 'AppStore';
  power = 10;


  items = ['patricia', 'patricio', 'catherine', 'nataly'];
  addItem() {
    this.items.push();
  }


  deleteItem(index: number ) {
    this.items.splice(index, 1);
    console.log(this.items);
    return this.items;
  }


}
