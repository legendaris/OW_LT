function sizeIframe() {
    var iframe = $("#discord-iframe");
    var wrappingHeight = $(".discord-widget-container").height()

    iframe.height(wrappingHeight >= 645 ? 645 : wrappingHeight);
};

window.onresize = function () {
    sizeIframe();
};

sizeIframe();