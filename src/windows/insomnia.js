var displayRequest;

module.exports = {
    keepAwake: function() {
        if (Windows.System.Display.DisplayRequest) {
            displayRequest = new Windows.System.Display.DisplayRequest();
            displayRequest.requestActive();
        }
    },
    allowSleepAgain: function() {
        if (displayRequest && typeof displayRequest.requestRelease === "function") {
            displayRequest.requestRelease();
        }
    }
};

require("cordova/exec/proxy").add("Insomnia", module.exports);
