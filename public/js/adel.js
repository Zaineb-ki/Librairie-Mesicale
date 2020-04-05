
function add(){
    var pictures = document.getElementById('Pics').value;
    var nameOfAlbum = document.getElementById('NameOfAlbum').value;
    var publicationYear = document.getElementById('Time').value;

    var showDiv = document.getElementById('show');
    showDiv.innerHTML += "<div class = 'col-sm-4'>" +
                            "<div class='Artiste'>" +
                            "<center>" +
                                "<a href='Adele25.html'><img src=" + pictures + " alt ='' srcset='' class='img-Artiste'></a>" +
                                "<br>" +
                                "<p class='titel-Album'>" + nameOfAlbum + "</p>" +
                                "<p class ='date-album'>" + publicationYear + "</>" +
                            "</center>" +
                            "</div>" +
                            "</div>";

                //     <div class="col-sm-4">
                //  <div class="Artiste">
                //      <center>
                //          <a href="Adele25.html"><img src="img/Adele25.jpg" alt="" srcset="" class="img-Artiste"></a>
                //          <br>
                //          <p class="titel-Album">25</p>
                //          <p class="date-album">2015</p>
 
                //      </center>
                //  </div>
                // </div>
}

