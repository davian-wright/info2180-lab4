$('#search_button').click(function(){
        //If the search_button was clicked,
        //get the value from the search_box.
        var search_term = $('#search_box').val().trim();
        $.ajax({
            url: 'superheroes.php',
            data: {
                q: search_term
            },
            success: function(returnData){
                $('#search_results').html('');
                var results = JSON.parse(returnData);
  
                $.each(results, function(key, value){
                    $('#search_results').append(value + '<br>');
                });

                if(results.length == 0){
                    $('#search_results').html(superheros.php);
                }
            }
        });
    });



/*function loadOne(str) {
  if (str.length==0) {
    document.getElementById("search").innerHTML="";
    return;
  }
  var xmlhttp=new XMLHttpRequest();
  xmlhttp.onreadystatechange=function() {
    if (this.readyState==4 && this.status==200) {
      document.getElementById("results").innerHTML=this.responseText;
    }
  }
  xmlhttp.open("GET","superheroes.php?q="+str,true);
  xmlhttp.send();
}

   