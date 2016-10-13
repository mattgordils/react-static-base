define([

    // libraries
    'jquery.velocity.ui' //, 'jquery.velocity.ui'

], function () {

//    Dashboard

    var dashboardResultsDimSpeed = 300

    $.Velocity.Sequences.dimDashboardResults = function (element, options) {
        var duration = options.duration || dashboardResultsDimSpeed;

        $.Velocity.animate(element,
            {
                opacity: .2
            }, {
                duration: duration,
                easing: 'easeInOutSine'
            }
        );
    };

    $.Velocity.Sequences.showDashboardResults = function (element, options) {
        var duration = options.duration || dashboardResultsDimSpeed;

        $.Velocity.animate(element,
            {
                opacity: 1
            }, {
                duration: duration,
                easing: 'easeInOutSine'
            }
        );
    };

    $.Velocity.Sequences.showViewCategoriesButton = function (element, options) {
        $.Velocity.animate(element,
            {
               opacity: 1
            }, {
                duration: 500,
                easing: 'easeInOutSine'
            }
        );
    };


    // Map Count

    $.Velocity.Sequences.showMapCountContainer = function (element, options) {

        $.Velocity.animate(element,
            {
                width: ["100%","10%"],
                opacity:  [1,0]
            }, {
                duration: 500,
                easing: [.79,.26,.22,1.33],
                delay: 50
            }
        );

    };

    $.Velocity.Sequences.hideMapCountContainer = function (element, options) {

        $.Velocity.animate(element,
            {
                width: "0%",
                opacity:  0
            }, {
                duration: 550,
                easing: [1,-0.44,.83,.67],

                complete: function() {
                    options.complete();
                }
            }
        );

    };

    $.Velocity.Sequences.highlightNumberContainer = function (element, options) {

        $.Velocity.animate(element,
            {
                backgroundColorRed: 67,
                backgroundColorGreen: 187,
                backgroundColorBlue: 232
            }, {
                duration: 350
            }
        );

    };

    // Map Count

    $.Velocity.Sequences.showDetailCompSection = function (element, options) {

        $.Velocity.animate(element,
            {
                opacity:  [1,0]
            }, {
                duration: 500,
                complete: function() {
                    // TODO propagate this guard through this file
                    if (options.complete && typeof options.complete === 'function') {
                        options.complete();
                    }
                }
            }
        );

    };

    $.Velocity.Sequences.showUpdateComp = function (element, options) {

        $.Velocity.animate(element,
            {
                opacity: 1,
                top: 0,
                easing: [1,-0.44,.83,.67]
            }, {
                duration: 500,
                complete: function() {
                    options.complete();
                }
            }
        );

    };

    // Total Comp Count on search screen

    $.Velocity.Sequences.totalCompsCount = function (element, options) {

        $.Velocity.animate(element,
            {
                scale:  [5,0.05],
                opacity: [0,.06]
            }, {
                duration: 1500
            }
        );

    };

    $.Velocity.Sequences.creditsCount = function (element, options) {

        $.Velocity.animate(element,
            {
                scale:  [5,0.05],
                opacity: [0,.3]
            }, {
                duration: 1100
            }
        );

    };

    $.Velocity.Sequences.flashCredits = function (element, options) {

        $.Velocity.animate(element,
            {
                opacity: [.3,1]
            }, {
                duration: 400,
                loop: 2
            }
        );

        $.Velocity.animate(element,
            {
                opacity: 1
            }, {
                duration: 300
            }
        );
    };

    // FUE

    $.Velocity.Sequences.fueNotification = function (element, options) {

        $.Velocity.animate(element,
            {
                scale:  [12,0],
                opacity: [0,.7]
            }, {
                duration: 1400
            }
        );

    };

    $.Velocity.Sequences.nextButton = function (element, options) {

        $.Velocity.animate(element,
            {
                scale: [1.1,1],
                backgroundColorRed: 255,
                backgroundColorGreen: 255,
                backgroundColorBlue: 255,
                colorRed: 103,
                colorGreen: 170,
                colorBlue: 221
            }, {
                duration: 500,
                easing: [.88,.28,.44,.97]
            }
        );

        $.Velocity.animate(element,
            {
                scale:  [1,1.1],
                backgroundColorRed: 103,
                backgroundColorGreen: 170,
                backgroundColorBlue: 221,
                colorRed: 255,
                colorGreen: 255,
                colorBlue: 255
            }, {
                duration: 300
            }
        );

    };

    // Buy button lock dissapear

    $.Velocity.Sequences.hideLock = function (element, options) {

        $.Velocity.animate(element,
            {
                scale:  [0,1],
                opacity: [0,1]
            }, {
                duration: 200,
                easing: [.14,.64,.44,.9],

                complete: function() {
                    options.complete();
                }
            }
        );

    };

    $.Velocity.Sequences.showUnlockThrobber = function (element, options) {

        $.Velocity.animate(element,
            {
                scale:  [1,0],
                opacity: [1,0]
            }, {
                duration: 200,
                easing: [.82,.12,.12,.96]
            }
        );

    };

    $.Velocity.Sequences.hideUnlockButton = function (element, options) {

        $.Velocity.animate(element,
            {
                left: 250,
                opacity: [0,1]
            }, {
                duration: 500,
                easing: [.59,.31,0,.99],

                complete: function() {
                    options.complete();
                }
            }
        );

    };

    $.Velocity.Sequences.showCompActions = function (element, options) {

        $.Velocity.animate(element,
            {
                opacity: 1
            }, {
                duration: 500,
                easing: [.59,.31,0,.99]
            }
        );

    };

    $.Velocity.Sequences.opacityOut = function (element, options) {

        $.Velocity.animate(element,
            {
                opacity: 0
            }, {
                duration: 500,
                easing: [.59,.31,0,.99]
            }
        );

    };

    $.Velocity.Sequences.opacityIn = function (element, options) {

        $.Velocity.animate(element,
            {
                opacity: 1
            }, {
                duration: 500,
                easing: [.59,.31,0,.99]
            }
        );

    };

    $.Velocity.Sequences.animateTick = function (element, options) {

        $.Velocity.animate(element,
            {
                'stroke-dashoffset': [78,98]
            }, {
                duration: 300,
                easing: [.22,.45,.54,.58]
            }
        );

    };

    $.Velocity.Sequences.showUserMenu = function (element, options) {

        $.Velocity.animate(element,
            {
                right: [0,-300]
            }, {
                duration: 300,
                easing: [.74,.32,.42,.91]
            }
        );
    };

});

