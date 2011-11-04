var Mixi = function() {
    this.initialize();
};

Mixi.prototype = {
    initialize: function() {
    },
    render: function() {
        chrome.tabs.getSelected(null, function(tab) {
            var url = "http://mixi.jp/share.pl?u="
                + encodeURIComponent(tab.url)
                + "&k=f45808baee7c83d97158c5dd83b5f67665add179";
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
    }
};

var mixi = new Mixi();
