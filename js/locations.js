function refreshLocations() {
    getMarkers(player.getCurrentTime());
}

function getMarkers(time) {
    window.markers.forEach(marker => {
        var latestPosition = marker.places
        .find(place => {
            return place.time <= time;
        }).position;
        if (latestPosition != marker.position) {
            marker.position = latestPosition;
            updateMarker(marker);
        }
    });
}

function updateMarker(marker) {
    if (marker.mapMarker) {
        marker.mapMarker.setLatLng(marker.position);
    } else {
        marker.mapMarker = L.marker(marker.position).addTo(map);
        marker.mapMarker.setIcon(L.icon({
            iconUrl: 'icons/' + marker.icon,
            iconSize: [38, 55],
            iconAnchor: [22, 55]
        }))
    }
    var group = new L.featureGroup(markers.map(marker => marker.mapMarker));
    map.fitBounds(group.getBounds());
}
