$(document).ready(() => {
    const switch_ = $("div[class*='switch']");

    switch_.click(function(){
        const current = $(this);
              knob = current.find('.knob'),
              track = current.find('.track'),
              is_primary = current.is("[class*='primary']"),
              is_secondary = current.is("[class*='secondary']");

        console.log(is_primary);
        console.log(is_secondary);
        console.log(track);

        if (knob.hasClass('switched-on')){
            knob.removeClass('switched-on');

            setTimeout(() => {
                if (is_primary || is_secondary) {
                    track.removeClass('track-on');
                }
            }, 250);
        } else {
            knob.addClass('switched-on');

            setTimeout(() => {
                if (is_primary || is_secondary) {
                    track.addClass('track-on');
                }
            }, 250);
        }
    });
});