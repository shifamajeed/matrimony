import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  toggle = true;
  status = 'Enable'; 
  
  enableDisableRule() {
      this.toggle = !this.toggle;
      this.status = this.toggle ? '' : '';
  }
}
