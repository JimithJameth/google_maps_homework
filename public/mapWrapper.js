var MapWrapper = function(container, coords, zoom) {
  this.googleMap = new google.maps.Map(container,{
    center: coords,
    zoom:zoom
  });
  this.markers = [];
}

MapWrapper.prototype = {
  addMarker: function(coords){
    var marker = new google.maps.Marker({
      position:coords,
      map: this.googleMap
    });
    this.markers.push(marker);
    this.addInfoWindow(this.markers.length -1, this.markers.length.toString());
  },

  addClickEvent:function(){
    google.maps.event.addListener(this.googleMap, "click", function(event){
      var position = {lat:event.latLng.lat(), lng: event.latLng.lng(),
      };
      this.addMarker(position);
    }.bind(this));
  },

  bounceMarkers: function(){
    this.markers.forEach(function(marker){
      marker.setAnimation(google.maps.Animation.BOUNCE);
    })
  },

  addInfoWindow: function(index,contentString) {
    var infoWindow = new google.maps.InfoWindow({
      content: contentString
    });
    this.markers[index].addListener('click',function(){
      infoWindow.open(this.googleMap, this.markers[index]);
    }.bind(this));
  },
  setCenter: function() {
    var button = document.querySelector('#MyHome');
    button.addEventListener('click', function() {
      this.googleMap.setCenter({lat: 55.935641, lng: -3.071946});
    }.bind(this));
  },
}


