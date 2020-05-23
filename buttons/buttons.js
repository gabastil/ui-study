$(document).ready(() => {
    const button = $('.button');

    button.click(function() {
        if ($(this).is("[class*='disabled']")){
            console.log("DISABLED");
        } else {
            $(this).addClass('disabled');
        }
    });
});