import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'check-component',
  templateUrl: './check.component.html'
})
export class CheckComponent implements OnInit {

  constructor() { }
  public parent_check: string = "parent check first"
  ngOnInit(): void {
  }
  parent_not_key = 'not key'
}
