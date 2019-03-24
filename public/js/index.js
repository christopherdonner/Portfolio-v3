/* eslint-disable prettier/prettier */
$("#submitButton").on("click", function() {
  console.log("submit button clicked");
  var newMessage = {
    name: $("#name")
      .val()
      .trim()
      .toLowerCase(),
    email: $("#email"),
    message: $("#message")
      .val()
      .trim()
  };
  console.log(name);
  $.post("/api/messages", newMessage, function(data) {
    if (data) {
      alert("message sent!");
    }
    else {alert("error occurred")}
  });
});
