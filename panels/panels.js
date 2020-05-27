$(document).ready(function() {
    const base = $("div#base"),
          banners = $("div#banners"),
          closeables = $("div#closeable");

    const x_button = closeables.find("[class*='banner']");

    x_button.click(function(){
        $(this).remove();
    });
});