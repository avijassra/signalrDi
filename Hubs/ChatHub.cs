namespace signalrDi.Hubs 
{
    using System;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.SignalR;

    using signalrDi.Models;

    public class ChatHub : Hub
    {
        AppCache _cache;
        // public ChatHub(AppCache cache) {
        //     this._cache = cache;
        // }

        public Task MessageToPublish(string message)
        {
            return Clients.All.InvokeAsync("NewMessageReceived", new ChatMsgModel(message));
        }
    }
}