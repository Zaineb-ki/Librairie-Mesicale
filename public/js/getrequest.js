$( document ).ready(function() {
  
    // GET REQUEST
    $("#allCustomers").click(function(event){
      event.preventDefault();
      ajaxGet();
    });

    // DO GET
    function ajaxGet(){
      $.ajax({
        type : "GET",
        url : window.location + "api/customers/all",
        success: function(result){
          $('#getResultDiv .get').empty();
          var custList = "";
          $.each(result, function(i, customer){
            $('#getResultDiv').append("<div class='col-sm-4 get'>" +
                                      "<div class='Albums'>" +
                                      "<center>" +
                                          "<a href='#'>" + "<img src=" + customer.UrlP + " alt='' class='img-albums'></a>" +
                                          "<p>" +  customer.NOfArtiste + "<p>" +
                                        "<center>" +
                                        "</div>" +
                                        "</div>");
            /*
              <div class="col-sm-4 ">
                            <div class="Albums">   
                                
                               <center>
                                   <a href="#"> <img src="img/Soolking-home.jpeg" alt="" class="img-albums"></a>
                                   <p>Soolking</p>
                               </center>
                                 
                            </div>
                            
                        </div>
            */
          });
          console.log("Success: ", result);
        },
        error : function(e) {
          $("#getResultDiv").html("<strong>Error</strong>");
          console.log("ERROR: ", e);
        }
      });  
    }
  })