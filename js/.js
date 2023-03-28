

// codestart login
$("#submit").click(function() {
    $("#signin").slideUp(function() {
      $(".form-container").hide();
      $(".welcome-message").slideDown(function() {
        $(".welcome-message").fadeTo(400, 1);
      });
    });
  });
//   end code login