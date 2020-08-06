import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'check-second-child',
  templateUrl: './check-second-child.component.html',
  styleUrls: ['./check-second-child.component.css']
})
export class CheckSecondChildComponent implements OnInit {

  constructor() { }
  @Input('child-second') parent_check: string
  ngOnInit(): void {
  }

}
