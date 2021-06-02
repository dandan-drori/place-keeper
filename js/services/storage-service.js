function loadFromStorage(key) {
	var json = localStorage.getItem(key)
	return JSON.parse(json)
}

function saveToStorage(key, data) {
	var json = JSON.stringify(data)
	localStorage.setItem(key, json)
}
