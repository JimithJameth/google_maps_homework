var initialize = function(){
  var center = {lat: 51.515110, lng: -0.127758};
  var place = {lat: 51.515110, lng: -0.127230};
  var mapDiv = document.querySelector('#main-map');
  var mainMap = new MapWrapper(mapDiv, center, 10);
  var home = {lat: 55.935641, lng: -3.071946};

  mainMap.addMarker(center);
  mainMap.addMarker(place);
  mainMap.addClickEvent();

  mainMap.addInfoWindow(0, "Isn't this lovely!!");

  mainMap.setCenter(home);


  var bounceButton = document.querySelector('#button-bounce-markers');
  bounceButton.addEventListener('click', mainMap.bounceMarkers.bind(mainMap));

  var homeButton  = document.querySelector('#MyHome');
  homeButton.addEventListener('click', mainMap.setCenter.bind(mainMap));
}
window.addEventListener('load', initialize)
