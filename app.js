function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML = alert(this.responseText);
    }
  };
  xhttp.open("GET", "superheroes.php", true);
  xhttp.send();
}


function loadOne(str){
  var xhttp;
  if (str.length == 0) { 
    document.getElementById("result").innerHTML = superheroes.php;
    return;
  }
  xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("result").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "superheroes.php?query="+str, true);
  xhttp.send();   
}
