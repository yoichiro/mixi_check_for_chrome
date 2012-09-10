var Wi = function() {
    this.initialize();
};

Wi.prototype = {
    initialize: function() {
        this.assignEventHandler();
    },
    assignEventHandler: function() {
        window.addEventListener("load", function(evt) {
            this.render();
        }.bind(this));
    },
    render: function() {
        var intent = window.intent || window.webkitIntent;
        var url = "http://mixi.jp/share.pl?u="
            + encodeURIComponent(intent.data)
            + "&k=f45808baee7c83d97158c5dd83b5f67665add179";
        location.href = url;
    }
};

var wi = new Wi();