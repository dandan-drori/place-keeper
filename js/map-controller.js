let map
var lat = 29.55805
var lng = 34.94821
var markers = []

function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: { lat, lng },
		zoom: 12,
	})
	var marker = new google.maps.Marker({
		position: { lat, lng },
		map,
		title: 'marker',
	})
	map.addListener('click', mapsMouseEvent => {
		const name = prompt('Location name?')
		if (!name || !name.length) return
		const strPos = JSON.stringify(mapsMouseEvent.latLng.toJSON(), null, 2)
		const pos = JSON.parse(strPos)
		placeMarkerAndPanTo(mapsMouseEvent.latLng, map)
		addPlace(pos, name)
		displayPlaces()
	})
	displayPlaces()
}

function getPosition() {
	if (!navigator.geolocation) {
		alert('HTML5 Geolocation is not supported in your browser.')
		return
	}
	navigator.geolocation.getCurrentPosition(showLocation, handleLocationError)
	// navigator.geolocation.watchPosition(showLocation, handleLocationError);
}

function showLocation(position) {
	// var date = new Date(position.timestamp)
	// document.getElementById('timestamp').innerHTML = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()

	lat = position.coords.latitude
	lng = position.coords.longitude
	map.setCenter(new google.maps.LatLng(lat, lng))
	initMap()
}

function handleLocationError(error) {
	var locationError = document.getElementById('locationError')

	switch (error.code) {
		case 0:
			locationError.innerHTML =
				'There was an error while retrieving your location: ' + error.message
			break
		case 1:
			locationError.innerHTML = "The user didn't allow this page to retrieve a location."
			break
		case 2:
			locationError.innerHTML =
				'The browser was unable to determine your location: ' + error.message
			break
		case 3:
			locationError.innerHTML = 'The browser timed out before retrieving the location.'
			break
	}
}

function placeMarkerAndPanTo(latLng, map) {
	var id = getCurrId()
	const marker = new google.maps.Marker({
		id,
		position: latLng,
		map,
	})
	map.panTo(latLng)
	markers.push(marker)
}

function displayPlaces() {
	var places = getPlacesForDisplay()
	if (!places) return
	var strHtmls = places.map(
		place => `
        <article onclick="panTo(${place.lat}, ${place.lng})">
            <header>${place.name}</header>
            <p>Text</p>
            <button onclick="onRemovePlace(${place.id})">x</button>
        </article>
    `
	)
	document.querySelector('.places').innerHTML = strHtmls.join('')
}

function onRemovePlace(placeId) {
	removePlace(placeId)
	displayPlaces()
	removeMarker(placeId)
}

function removeMarker(markerId) {
	const markerIdx = markers.findIndex(marker => marker.id === markerId)
	if (markerIdx === -1) return
	markers[markerIdx].setMap(null)
	markers.splice(markerIdx, 1)
}

function panTo(lat, lng) {
	map.setCenter(new google.maps.LatLng(lat, lng))
}
