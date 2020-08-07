import { Component, OnInit } from '@angular/core';
import { MessageService } from './../../services/message.service'

@Component({
  selector: 'app-hero-new',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  constructor( private MessageService: MessageService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.MessageService.addMessage()
  }
}
