import { Component } from '@angular/core';
//import { PubSubService } from '../../services/pubsub.service';
import { ChatMsgModel } from '../../models/chatMsg.model';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styles:[`
        .msg-sec {
            padding: 10px;
            border: 1px solid #eee;
            background-color: #ccc;
            border-radius: 5px;
        }
    `]
})
export class HomeComponent {
    msgs: ChatMsgModel[];
    myMsg: string;

    // constructor(private pubSub: PubSubService){
    //     this.pubSub.incomingMessage.subscribe((chatMsg: ChatMsgModel) => this.messageReceived(chatMsg))
    // }

    checkEnterKey(e: any) {
        if(e.keycode == 13){
            this.sendMsg();
         }
    }

    sendMsg(): void {
        //this.pubSub.outgoingMessage(this.myMsg);
        this.myMsg = "";
    }

    messageReceived(chatMsg: ChatMsgModel): void {
        this.msgs.push(chatMsg);
    }
}