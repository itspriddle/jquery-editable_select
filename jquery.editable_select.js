/**
 * jQuery Editable Select
 *
 * @author      Joshua Priddle <itspriddle@nevercraft.net>
 * @version     0.0.1
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
          var html = '<input type="text" name="' + self.attr('name') + '" />';
          self.replaceWith(html);
        }
      });
    });
  };
})(jQuery);
