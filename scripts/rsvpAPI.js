
(function (exports) {
    'use strict';

    var // functions
        rsvpApiCall;

    var apiURL = "https://ncn0btf5wa.execute-api.us-east-2.amazonaws.com/prod/rsvp";

    /**
     * Function that calls the RSVP API
     * @param formValues
     * @returns 
     */
    rsvpApiCall = function (formValues) {
        fetch(apiURL, {
            method: 'POST',
            body: formValues
        }).then(function(response) {
            console.log(response);
        }).catch(function(error) {
            console.error(error);
        });
    };

    exports.rsvpApiCall = rsvpApiCall;
}(window));
