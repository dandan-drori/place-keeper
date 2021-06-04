'use strict'

const KEY = 'userData'
const gForecasts = [
	{
		id: 1,
		title: 'Information Gathering',
		text: 'Whether you’re looking for facts or spiritual and intuitive revelations, this month has much to offer. The sun in Gemini until June 20 can greatly enhance your curiosity, and you might be busy gathering information on anything and everything that interests you. New opportunities and vibrant connections can result from this. ',
	},
	{
		id: 2,
		title: 'Great Ideas',
		text: 'Are you eager to enhance your income? With key planets in your money zone, you’ll have ample opportunity to dream up some fabulous ideas. And with the emphasis on the sign of Gemini, your bargaining and bartering skills will be very much to the fore. The sun in this zone until June 20 can highlight financial management, inspiring you to take stock and get things in order. If you need a new budget or want to save for something, this is the time to start.  ',
	},
	{
		id: 3,
		title: 'Be Yourself',
		text: 'As the month gets underway, the radiant sun continues to shine in your sign, inspiring you to be completely yourself and channel your energy into those things you love to do most. If you have plans and projects that make your heart sing, this is the time to make a start. If you have too many ideas and options available to you, think about what fills you with the most enthusiasm. Maybe this is the place to begin.',
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

function getData() {
	var data = loadFromStorage(KEY)
	if (!data) return null
	return { date: data.date, time: data.time }
}
