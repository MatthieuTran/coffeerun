(function (window) {
  "use strict";
  var FORM_SELECTOR = '[data-payment-order="form"]';

  var App = window.App;
  var FormHandler = App.FormHandler;

  var formHandler = new FormHandler(FORM_SELECTOR);
  var modalSelector = $("#ex1");

  formHandler.addSubmitHandler(function (data) {
    console.log(data);

    modalSelector.text(
      "Thank you for your payment, " + data.contactTitle + " " + data.username
    );
    modalSelector.appendTo("body").modal();
  });

  console.log(formHandler);
  console.log(modalSelector);
})(window);
