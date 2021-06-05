const PLACES_KEY = 'places'
var gPlaces
var gId = 1

function addPlace(pos, name, address) {
	_addPlaceToStorage(pos, name, address)
}

function _addPlaceToStorage({ lat, lng }, name, address) {
	let places = loadFromStorage(PLACES_KEY)
	if (!places) places = []
	places.push({ id: gId++, lat, lng, address, name })
	saveToStorage(PLACES_KEY, places)
}

function getPlacesForDisplay() {
	gPlaces = loadFromStorage(PLACES_KEY)
	return gPlaces
}

function removePlace(placeId) {
	gPlaces = loadFromStorage(PLACES_KEY)
	var placeIdx = gPlaces.findIndex(place => place.id === placeId)
	gPlaces.splice(placeIdx, 1)
	saveToStorage(PLACES_KEY, gPlaces)
}

function getCurrId() {
	return gId
}
