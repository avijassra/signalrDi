import { Component } from '@angular/core';
import { PubSubService } from '../../services/pubsub.service';
import { ChatMsgModel } from '../../models/chatMsg.model';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styles:[`
        .msg-sec {
            padding: 10px;
            margin-right:10px;
            border: 1px solid #ddd;
            background-color: #eee;
            border-radius: 5px;
        }

        .msg-sec div:first-child span {
            margin-left: 10px;
        }

        .msg-sec div:last-child {
            float:right;
            color: #9d9d9d;
            font-size: 10px;
        }
    `]
})
export class HomeComponent {
    msgs: ChatMsgModel[];
    myMsg: string;

    constructor(private pubSub: PubSubService) {
        this.msgs = [];
        this.pubSub.incomingMessage.subscribe((chatMsg: ChatMsgModel) => this.messageReceived(chatMsg))
    }

    checkEnterKey(e: any) {
        debugger;
        if(e.keycode == 13){
            this.sendMsg();
         }
    }

    sendMsg(): void {
        this.pubSub.outgoingMessage(this.myMsg);
        this.myMsg = "";
    }

    messageReceived(chatMsg: ChatMsgModel): void {
        this.msgs.push(chatMsg);
    }
}