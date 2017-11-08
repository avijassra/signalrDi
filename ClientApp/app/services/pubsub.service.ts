import { Injectable, EventEmitter } from "@angular/core";
import { HubConnection } from '@aspnet/signalr-client';
import { ChatMsgModel } from '../models/chatMsg.model';

@Injectable()
export class PubSubService {
    connection: HubConnection;
    startedConnection: Promise<void>;

    // chat
    incomingMessage: EventEmitter<ChatMsgModel> = new EventEmitter();
    
    constructor() {
        //if(typeof window !== 'undefined') {
        this.connection = new HubConnection('/chat');
        this.startedConnection = this.connection.start();

        //chat
        this.connection.on('NewMessageReceived', (chatMsg: ChatMsgModel) => {
            this.onIncomingMessage(chatMsg);
        });
        //}
    }

    //chat
    outgoingMessage(msg: string): void{
        debugger;
        this.startedConnection
            .then(() => this.connection.invoke('MessageToPublish', msg));
    }

    onIncomingMessage(chatMsg: ChatMsgModel): void {
        this.incomingMessage.emit(chatMsg);
    }
}