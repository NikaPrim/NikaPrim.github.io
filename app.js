// Make sure to hide this when you make the website live

window.onload = function() {
  console.log("<=== setting JWT authorization token ===>")
  document.cookie = "auth" + "=" + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.ew0KICAgICJyb2xlIjogInVudmVyaWZpZWRfdmlzaXRvciIsDQogICAgIjEzMzdfc3RhdHVzIjogIkZMQUd7SnVzdF9Xb250X1RvcF90aGlzX3NlY3VyaXR5fSINCn0.80c23ff8378cddfa9689751a2eb68e6c4f834f11e7acbf17449d29ba30fcf33f;"+ "path=/;";
};