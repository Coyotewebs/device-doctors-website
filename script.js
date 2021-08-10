//About Button

document.querySelectorAll('.about-us__btn').forEach(btn =>{
  btn.addEventListener('click',() => {
      btn.classList.toggle('change')
      btn.nextElementSibling.classList.toggle('change')
  })  
})


//Map

function initMap(){

  // Map option

  var options = {
    center: {lat: 39.889037, lng: -105.9586201},
    zoom:10
     
  }


  //New Map
  map = new google.maps.Map(document.getElementById("map"),options)


  // Marker 
  
  const marker = new google.maps.Marker({
    position: {lat: 39.917643679340934, lng: -105.7855048490357},
    map:map,
    icon: "https://img.icons8.com/ios-filled/50/000000/google-maps-new.png"
  });

  //InfoWindow
  const detailWindow = new google.maps.InfoWindow({
    content: ` <img src="img/map-hover.png">`
  });

  marker.addListener("click", () =>{
    detailWindow.open(map, marker);
  });

}




