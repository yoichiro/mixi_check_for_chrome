var Option = function() {
    this.initialize();
};

Option.prototype = {
    initialize: function() {
    },
    start: function() {
        this.assignMessages();
        this.assignEventHandlers();
        this.restoreConfigurations();
    },
    assignMessages: function() {
        $("optBackgroundImageUrl").innerHTML =
            chrome.i18n.getMessage("optBackgroundImageUrl");
        $("background_image_url_save").innerHTML =
            chrome.i18n.getMessage("optBackgroundImageUrlSave");
    },
    assignEventHandlers: function() {
        $("background_image_url_save").onclick =
            this.onClickBackgroundImageUrlSave.bind(this);
    },
    restoreConfigurations: function() {
        var backgroundImageUrl = localStorage["background_image_url"];
        if (backgroundImageUrl) {
            $("background_image_url").value = backgroundImageUrl;
        }
    },
    onClickBackgroundImageUrlSave: function() {
        var backgroundImageUrl = $("background_image_url").value;
        localStorage["background_image_url"] = backgroundImageUrl;
        $("background_image_url_result").innerHTML =
            chrome.i18n.getMessage("optBackgroundImageUrlSaveSucceed");
        setTimeout(function() {
            $("background_image_url_result").innerHTML = "";
        }, 5000);
    }
};

var option = new Option();
