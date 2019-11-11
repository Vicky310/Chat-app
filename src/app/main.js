$(document).ready(function() {
  
    $(".chat_header").click(function() {
      $(".message_content").slideToggle("slow");
    });
  
    $(".enter").click(function() {
      var msg = $(".message_input").val();
      if (msg != "") {
        $(".new_messages").append("<p>" + msg + "</p>");
        $(".message_input").val("");
      }
    });
  });