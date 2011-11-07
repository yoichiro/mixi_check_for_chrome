var Mixi = function() {
    this.initialize();
};

Mixi.prototype = {
    initialize: function() {
        this.assignEventHandler();
    },
    render: function() {
        chrome.tabs.getSelected(null, function(tab) {
            var url = "http://mixi.jp/share.pl?u="
                + encodeURIComponent(tab.url)
                + "&k=f45808baee7c83d97158c5dd83b5f67665add179"
                + "&m=iframe";
            var iframe = document.createElement("iframe");
            iframe.src = url;
            iframe.scrolling = "no";
            iframe.onload = function() {
                Element.setStyle("loading", {
                    display: "none"
                });
            }.bind(this);
            $("target").appendChild(iframe);
        }.bind(this));
    },
    assignEventHandler: function() {
        window.addEventListener("message", function(evt) {
            if (evt.origin === "http://mixi.jp"
                && evt.data === "close") {
                window.close();
            }
        }.bind(this));
    }
};

var mixi = new Mixi();
