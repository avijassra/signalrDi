namespace signalrDi.Models 
{
    using System.Collections.Generic;
    
    public class AppCache 
    {
        public AppCache() {
            this.Ids = new List<string>();
        }

        public List<string> Ids { get; set; }
    }
}