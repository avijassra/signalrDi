namespace signalrDi.Hubs 
{
    using System;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.SignalR;

    using signalrDi.Models;

    public class ChatHub : Hub
    {
        AppCache _cache;
        public ChatHub(AppCache cache) {
            this._cache = cache;
        }

        public override Task OnConnectedAsync() {
            this._cache.Ids.Add(this.Context.ConnectionId);
            return base.OnConnectedAsync();
        }

        public Task MessageToPublish(string message)
        {
            return Clients.All.InvokeAsync("NewMessageReceived", new ChatMsgModel(message));
        }
    }
}