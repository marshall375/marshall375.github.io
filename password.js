<script type="text/javascript">
var password = "mark";
var x = prompt("Enter in the password "," ");
if (x.toLowerCase() == password) {
  alert("Come right in \n \n You've entered in the right password");
  window.location = "index.htm";
}
else {
  window.location = "bad.htm";
}
</script>