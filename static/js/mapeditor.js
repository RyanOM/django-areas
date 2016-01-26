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

    // State
    this.active = true;
    this.points = null;
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
    var self = this;

    var d = new google.maps.drawing.DrawingManager({
        drawingMode: google.maps.drawing.OverlayType.POLYGON,
        drawingControl: true,
        drawingControlOptions: {
          position: google.maps.ControlPosition.TOP_CENTER,
          drawingModes: [
            google.maps.drawing.OverlayType.POLYGON,
          ]
        },
        polygonOptions: {
            fillColor: '#ffff00',
            fillOpacity: 1,
            strokeWeight: 5,
            editable: true,
            dragable: true,
        }
    });

    // Listen to events
    google.maps.event.addListener(d, 'overlaycomplete', function(event) {
        // We always assume it's a polygon

        // Get the points of our first polygon
        var points = self.pathsToCoordinates(event.overlay.getPaths())[0];
        // Disable drawing and mark as finished
        self.finish(points);
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

MapEditor.prototype.finish = function(points) {
    this.active = false;
    this.points = points;
    console.log('Points = ', points);
    this.syncDrawingManager();
}

MapEditor.prototype.clear = function() {
    this.active = true;
    this.syncDrawingManager();
};

MapEditor.prototype.syncDrawingManager = function() {
    var map = null;
    if(this.active) {
        map = this.map;
    }
    // Remove/add map to drawingManager based on active state
    this.drawingManager.setMap(map);
}

// Transforms Google's MVCArrays into JS arrays
MapEditor.prototype.pathsToCoordinates = function(paths) {
    return paths.getArray().map(function(arr) {
        return arr.getArray().map(function(point) {
            return point.toString();
        });
    });
}

MapEditor.prototype.locationError = function(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
}
