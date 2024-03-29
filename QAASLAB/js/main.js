//Initialize and add the map
function initMap() {
  //Your Location
  const loc = { lat: 14.402242, lng: 120.968688 };

  //Centered map on location
  const map = new google.maps.Map(document.querySelector('.map'), {
    zoom: 14,
    center: loc
  });

  //The marker, positioned at location
  const marker = new google.maps.Marker({ position: loc, map: map });
}

//Smooth Scrolling

$('#navbar a, .btn').on('click', function(event) {
  if (this.has !== '') {
    event.preventDefault();
    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 100
      },
      800
    );
  }
});
