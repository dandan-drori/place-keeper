'use strict'

function init() {
	displayColors()
	var data = getData()
	if (!data || !data.date || !data.time) return
	var month = +data.date.split('-')[1]
	var idx = month <= 4 ? 0 : month <= 8 ? 1 : 2
	const forecast = getForecast(idx)
	renderForecast(forecast)
}

function displayColors() {
	const { bgColor, fgColor } = getColors()
	document.body.style.backgroundColor = bgColor
	document.body.style.color = fgColor
}

function renderForecast({ title, text }) {
	var strHtml = `
            <h2>${title}</h2>
            <p>${text}</p>
    `
	document.querySelector('.forecast').innerHTML = strHtml
}

function onSubmitForm(ev) {
	ev.preventDefault()
	const bgColor = document.querySelector('input[name=bg-color]').value
	const fgColor = document.querySelector('input[name=fg-color]').value
	const date = document.querySelector('input[name=date]').value
	const time = document.querySelector('input[name=time]').value
	setData(bgColor, fgColor, date, time)
}

function showAge(age) {
	document.querySelector('.age').innerText = age
}
