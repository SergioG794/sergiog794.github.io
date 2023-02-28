var x = document.getElementById("geoloc");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Este Navegador no es compatible con lo solicitado.";
  }
}

function showPosition(position) {
  x.innerHTML = "Su Latitud: " + position.coords.latitude + 
  "<br> Su Longitud: " + position.coords.longitude;
}