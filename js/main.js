'use strict'

var gIsFirstLoad

function init() {
	displayColors()
	const randomIdx = getRandomInt(0, 3)
	const forecast = getForecast(randomIdx)
	if (gIsFirstLoad) renderForecast(forecast)
}

function displayColors() {
	const { bgColor, fgColor } = getColors()
	document.body.style.backgroundColor = bgColor
	document.body.style.color = fgColor
}

function renderForecast({ id, title, text }) {
	var strHtml = `
            <p>${id}</p>
            <h2>${title}</h2>
            <p>${text}</p>
    `
	document.querySelector('.forecast-container').innerHtml = strHtml
	showForecast()
}

function onSubmitForm(ev) {
	ev.preventDefault()
	const bgColor = document.querySelector('input[name=bg-color]').value
	const fgColor = document.querySelector('input[name=fg-color]').value
	const date = document.querySelector('input[name=date]').value
	const time = document.querySelector('input[name=time]').value
	setData(bgColor, fgColor, date, time)
	gIsFirstLoad = true
}

function showForecast() {
	document.querySelector('.forecast-container').hidden = false
}
;('AIzaSyAbUCxloNBHZtSXrSe65OslMNLj52B_-R0')
