$(document).ready(function() {
  var $messageDiv = $('#message-div');

  App.cable.subscriptions.create(
    {
      channel: "ChatroomChannel"
    },
    {
      received: function(data) {
        $.ajax({
          url: "/get_current_user",
          type: "get",
          dataType: "json",
          success: function(response) {
            if (response.current_user_id === data.user.id) {
              var $newMessage = $(`
                <div class="message my-message ml-auto">
                  <big>${data.user.email}</big>
                  <br>
                  <small>${data.message.content}</small>
                </div>
              `).hide();
            } else {
              var $newMessage = $(`
                <div class="message other-user-message mr-auto">
                  <big>${data.user.email}</big>
                  <br>
                  <small>${data.message.content}</small>
                </div>
              `).hide();              
            }

            $messageDiv.append($newMessage.fadeIn());
          },
          error: function(response) {
            console.log(response);
          }
        });
      }
    }
  );
});