define(function (require) {

    require('ui/stylesheets/ui_components/ui_kit.less');

    var BaseItemView = require('shared/core/views/base/item_view');
    var template = require('ui/ui_kit/templates/show');


    return BaseItemView.extend({

        tagname: 'div',

        className: 'ui-kit-examples-container',

        template: template,

        events: {
            'click .toggle_grid': 'toggleGrid',
            'click .js-guide_link': 'scrollToSection',
            'click .js-trigger_sequence' : 'triggerSequence',
            'click .js-reset_animation' : 'resetAnimation'
        },

        onShow: function () {
            $('.js-scrollable_area').nanoScroller({ iOSNativeScrolling: true });
            this.setupNavigation();
        },

        toggleGrid: function () {
            $('.grid').toggleClass('show_grid')
        },

        scrollToSection: function (event) {
            event.preventDefault();
            var guideId = $(event.target).data('id');
            this.$('.js-scrollable_area').nanoScroller({ scrollTo: $('#'+guideId) });
        },

        setupNavigation: function () {
            var navigationLinks = this.$('.js-guide_link')
            this.$('.js-ui_section').onScreen({
                container: ".nano-content",
                direction: 'vertical',

                doIn: function() {
                    $(this).addClass('onScreen');
                    if (typeof($(".onScreen")[0]) != "undefined"){
                        var currentSection = $(".onScreen")[0];
                        var link = $('a[data-id="' + currentSection.id + '"]');
                        navigationLinks.parent('li').removeClass("active");
                        link.parent('li').toggleClass('active');
                    }
                },
                doOut: function() {
                    $(this).removeClass('onScreen');
                    if (typeof($(".onScreen")[0]) != "undefined"){
                        var currentSection = $(".onScreen")[0];
                        var link = $('a[data-id="' + currentSection.id + '"]');
                        navigationLinks.parent('li').removeClass("active");
                        link.parent('li').toggleClass('active');
                    }
                }
            });

        },

        triggerSequence : function(e){
            e.preventDefault();
            var sequence = $(e.target).data('sequence');
            var element = $(e.target).data('element');
            $(element).velocity(sequence, { complete : function(){

            }});
        },

        resetAnimation : function(e){
            e.preventDefault();
            $('.animation-container').empty().append('<div class="animation-box"></div>');
        }

    });

});
