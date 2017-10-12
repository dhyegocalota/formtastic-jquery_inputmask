//= require jquery
//= require inputmask/inputmask
//= require inputmask/jquery.inputmask
//= require inputmask/inputmask.extensions
//= require inputmask/inputmask.date.extensions
//= require inputmask/inputmask.numeric.extensions
//= require inputmask/inputmask.phone.extensions
//= require inputmask/bindings/inputmask.binding

(function($) {
  'use strict';

  $(document).on('has_many_add:after', function(e, fieldset) {
    $(fieldset).find('.inputmask').inputmask();
  });
}(jQuery));
