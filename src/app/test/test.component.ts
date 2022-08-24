import { Component,  } from '@angular/core';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
 
})

export class TestComponent {
  constructor() { }
  current = 0;
  public isActive:boolean = true;
  ngOnInit(): void {
  }
   previous() {
     if (this.current == 0) {
       this.current = 2;
     } else {
       this.current = this.current - 1;
     }
   }

   next() {
     this.current = (this.current + 1) % 3;
   }


}









