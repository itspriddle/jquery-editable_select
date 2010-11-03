/**
 * jQuery Editable Select
 *
 * @author      Joshua Priddle <itspriddle@nevercraft.net>
 * @version     0.0.2
 * @url         http://github.com/itspriddle/jquery-editable_select
 */

;(function($) {
  $.fn.editableSelect = function(options) {
    var settings = $.extend({
      title: 'Customize',
      key:   'customize',
    }, options);

    return this.each(function() {
      this.add(new Option(settings.title, settings.key));

      var self = $(this);

      self.change(function() {
        if (self.val() == settings.key) {
          var attr  = { type: 'text' },
              name  = self.attr('name'),
              id    = self.attr('id'),
              klass = self.attr('class');

          if (name)  attr.name     = name;
          if (id)    attr.id       = id;
          if (klass) attr['class'] = klass;

          var tag = $('<input>', attr);
          self.replaceWith(tag);
        }
      });
    });
  };
})(jQuery);
