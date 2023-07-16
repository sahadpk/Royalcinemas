(function (fn) {
    if (typeof jQuery === 'undefined') {
        throw 'Requires jQuery to be loaded first';
    }
    fn(jQuery);
}(function ($) {
    "use strict";

    var StretchBox = function (){
            var context = this;
            context.$els = $([]);
            $(window).on('resize.stretchBox load.stretchBox', function (){
                context.resize();
            });
        },
        addElement = function (context, $el){
            if(!context.$els.is($el)){
                $el.data('stretchBox__obj', context);
                context.$els = context.$els.add($el);
            }
            return context;
        },
        stretchResize = function (context){
            if( context.timeout ){
                clearTimeout(context.timeout);
                context.timeout = false;
            }
            setTimeout(function() {
                context.timeout = false;
                var maxHeight = 0;
                context.$els.css('height', '');
                context.$els.each(function (i, el) {
                    var height = $(el).outerHeight();
                    if( height > maxHeight ){
                        maxHeight = height;
                    }
                });
                context.$els.outerHeight(maxHeight);
            }, 100);
            return context;
        }
    ;

    StretchBox.prototype = {
        addElements : function ($els){
            var context = this;
            $els.each(function(i, el){
                addElement(context, $(el));
            });
            return context.resize();
        },
        resize : function (){
            return stretchResize(this);
        }
    };

    $.fn.stretchBox = function (){
        $(this).each(function (i, el){
            var $el = $(el),
                stretcher = $el.data('stretchBox__obj')
            ;
            if( !stretcher){
                stretcher = new StretchBox();
                var name = $el.data('stretchBox');
                if( name ){
                    stretcher.name = name;
                    stretcher.addElements( $('[data-stretch-box="' + name + '"]') );
                }else{
                    stretcher.addElements( $el );
                }
            }
            stretcher.resize();
        });
        return this;
    };
    $('[data-stretch-box]').stretchBox();
}));