
(function (exports) {
    'use strict';
    var instanceHash = "hc340vafy2";
    var apiURL = "https://" + instanceHash + ".execute-api.us-east-1.amazonaws.com/staging/rsvp/";
    var rsvpApiCall;

    /**
     * Function that calls the RSVP API
     * @param values
     * @returns
     */
    rsvpApiCall = function (values) {
        $.ajax({
            url: apiURL,
            type: 'POST',
            crossDomain: true,
            contentType: 'application/json',
            data: JSON.stringify(values),
            success: function (data) {
                console.info(data);
            },
            failure: function(error) {
                console.error(error);
            }
        });
    };

    exports.rsvpApiCall = rsvpApiCall;
}(window));
