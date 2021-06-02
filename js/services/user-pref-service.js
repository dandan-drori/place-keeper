'use strict'

const KEY = 'userData'
const gForecasts = [
	{
		id: 1,
		title: 'title',
		text: 'text',
	},
	{
		id: 2,
		title: 'title',
		text: 'text',
	},
	{
		id: 3,
		title: 'title',
		text: 'text',
	},
]

function getColors() {
	const userData = loadFromStorage(KEY)
	if (!userData) var colors = { bgColor: '#fefefe', fgColor: '#050505' }
	else colors = { bgColor: userData.bgColor, fgColor: userData.fgColor }
	return colors
}

function setData(bgColor, fgColor, date, time) {
	_saveDataToStorage(bgColor, fgColor, date, time)
}

function getForecast(idx) {
	return gForecasts[idx]
}

function _saveDataToStorage(bgColor, fgColor, date, time) {
	saveToStorage(KEY, { bgColor, fgColor, date, time })
}
