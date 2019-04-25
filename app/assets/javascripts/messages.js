$(document).ready(function() {
  var $messageSendButton = $('#message-send-btn');
  var $contentField = $('#content');
  var $token = $('meta[name="csrf-token"]').prop("content");

  $messageSendButton.on("click", function() {
    event.preventDefault();
    event.stopPropagation();

    $.ajax({
      url: "/messages",
      type: "post",
      dataType: "json",
      data: {content: $contentField.val()},
      headers: {"X-CSRF-TOKEN": $token},
      success: function(response) {
        $contentField.val("");
      },
      error: function(response) {
        console.log(response);
      }
    })
  });
});