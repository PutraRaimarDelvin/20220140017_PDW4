function show() {
    alert("Let's start the meeting!");
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    var date = new Date();
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var formattedDate = date.toLocaleDateString('en-US', options);
    var time = date.toLocaleTimeString('en-US');
    document.getElementById("hasil").innerHTML = "Today is " + formattedDate + ", " + time;
  });