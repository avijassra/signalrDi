namespace signalrDi.Models 
{
    using System;

    public class ChatMsgModel 
    {
        public Guid Id { get; set; }

        public string Text { get; set; }

        public string DateTime { get; set; }

        public ChatMsgModel(string msg) {
            Id = Guid.NewGuid();
            Text = msg;
            DateTime = System.DateTime.Now.ToString("yyyy-MM-dd HH:mm:ss tt");
        }
    }
}