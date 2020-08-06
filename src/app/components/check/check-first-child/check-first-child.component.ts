import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'check-first-child',
  templateUrl: './check-first-child.component.html',
  styleUrls: ['./check-first-child.component.css']
})
export class CheckFirstChildComponent implements OnInit {

  constructor() { }
  public parent: string = 'Parent first child @input'
  @Input('child-first') parent_check: string
  @Input() child_first_not_key: string
  @Output() deleteRequest = new EventEmitter<string>()
  ngOnInit(): void {
  }
  delete( value: string){
    console.log(value)
    this.deleteRequest.emit(value)
  }
}
