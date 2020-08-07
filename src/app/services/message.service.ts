import { Injectable } from '@angular/core'
@Injectable({
    providedIn: 'root'
})

export class MessageService {
    messages: string[] = []
    addMessage(){
        console.log("add message")
    }


    add(message: string){
        this.messages.push(message)
    }
}