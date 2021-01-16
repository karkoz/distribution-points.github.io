$(function () {
    var Accordion = function (el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;

        // Variables privadas
        var links = this.el.find('.link');
        // Evento
        links.on('click', {
            el: this.el,
            multiple: this.multiple
        }, this.dropdown)
    }

    Accordion.prototype.dropdown = function (e) {
        var $el = e.data.el;
        $this = $(this),
            $next = $this.next();

        $next.slideToggle();
        $this.parent().toggleClass('open');


    }

	var accordion = new Accordion($('#accordion'), false);
	var accordion2 = new Accordion($('#features'), false);
});

$(function() {
    $('#stopProp1').on('click', function(e) {
      e.stopPropagation();
    });
});

$(function() {
    $('#stopProp2').on('click', function(e) {
      e.stopPropagation();
    });
});

$(function() {
    $('#stopProp3').on('click', function(e) {
      e.stopPropagation();
    });
});

$('li').click(function () {
    $(':radio[data-price-id="' + $(this).data('level') + '"]').prop('checked', true);
});
