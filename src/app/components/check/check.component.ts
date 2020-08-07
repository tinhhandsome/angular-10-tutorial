import { Component, OnInit } from '@angular/core';
import { chatService } from '../../services/chat.service'
@Component({
  selector: 'check-component',
  templateUrl: './check.component.html'
})
export class CheckComponent implements OnInit {

  constructor(private chatService: chatService) { }
  public parent_check: string = "parent check first"
   output: string = ''
  ngOnInit(): void {
  }
  parent_not_key = 'not key'
  addEvent(value: string) {
    console.log(`parent ${value}`)
    this.output = value
  }

  onHandle(){
    this.chatService.onGetdata()
  }
}
