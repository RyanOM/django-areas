// Note: This example requires that you consent to location sharing when
// prompted by your browser. If you see the error "The Geolocation service
// failed.", it means you probably did not give permission for the browser to
// locate you.
// Call with for example:
// var editor = new MapEditor(document.getElementById('map'));
function MapEditor(element) {
    this.element = element;
    this.map = this.initMap();
    this.drawingManager = this.initDrawingManager();
}

MapEditor.prototype.initMap = function() {
    return new google.maps.Map(this.element, {
        center: {lat: 37.773793, lng: -122.422847},
        zoom: 14,
        streetViewControl: false,
        mapTypeControl: false
    });
};

MapEditor.prototype.initDrawingManager = function() {
    var d = new google.maps.drawing.DrawingManager({
        drawingMode: google.maps.drawing.OverlayType.POLYGON,
        drawingControl: true,
        drawingControlOptions: {
          position: google.maps.ControlPosition.TOP_CENTER,
          drawingModes: [
            google.maps.drawing.OverlayType.POLYGON
          ]
        },
        PolygonOptions: {
            fillColor: '#ffff00',
            fillOpacity: 1,
            strokeWeight: 5,
            editable: true,
            dragable: true,
        }
    });

    // Assign map
    d.setMap(this.map);

    return d;
};

MapEditor.prototype.autolocate = function() {
    var self = this;
    var center = this.map.getCenter();

    // See if browser supports geolocation
    if(navigator.geolocation) {
        // Get current location
        navigator.geolocation.getCurrentPosition(function(position) {
            // Center map on new location
            self.map.setCenter({
                lat: position.coords.latitude,
                lng: position.coords.longitude
            });
        }, function() {
            self.locationError(true, infoWindow, that.map.getCenter());
        });
    } else {
        self.locationError(false, infoWindow, that.map.getCenter());
    }
};

MapEditor.prototype.locationError = function(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
}
