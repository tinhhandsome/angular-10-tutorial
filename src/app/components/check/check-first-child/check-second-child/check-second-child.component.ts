import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'check-second-child',
  templateUrl: './check-second-child.component.html',
  styleUrls: ['./check-second-child.component.css']
})
export class CheckSecondChildComponent implements OnInit {

  constructor() { }
  @Input('child-second') parent_check: string
  @Output() output_child = new EventEmitter<string>()
  ngOnInit(): void {
  }

  onSubmit(value: string){
  console.log(value)
    this.output_child.emit(value)
  }
}
