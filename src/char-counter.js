(function($) {
    $.fn.charCounter=function(options){
        var settings=$.extend({
            className: 'chars-remaining',
            warningClassName: 'warn-chars-remaining',
            maxlength: 1024
        }, options);

        return this.each(function(){
            var $ml=settings.maxlength; if($(this).attr('maxlength')) $ml = parseInt($(this).attr('maxlength'));
            var $cl = $(this).val().length;
            var $rem = $ml-$cl;

            var $divSpan=$('<div class="'+settings.className+'">'+$rem+' characters remaining</div>').insertAfter($(this));

            $(this).on('keyup', this, function(){
                $cl=$(this).val().length;
                $rem=$ml-$cl;
                if($rem<=0) $divSpan.addClass(settings.warningClassName); else $divSpan.removeClass(settings.warningClassName);
                $divSpan.html($rem+' characters remaining');
            });
        });
    };
}(jQuery));



