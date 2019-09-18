// const clockDisplay = document.querySelector ('.clock');
// setInterval ( () => clockDisplay.innerText = new Date().toLocaleTimeString (), 1000);


const dateElement = document.getElementById('date');
const digitalTimeElement = document.getElementById('digital-clock');

const getCurrentDate = () => moment().format('MMMM Do, YYYY');

const getCurrentTime = (type) => {
	if (type == 'sec') return moment().format('ss');
	if (type == 'min') return moment().format('mm');
	if (type == 'hrs') return moment().format('h');
	return moment().format('h:mm:ss a');
}

const displayDate = date => {
	dateElement.innerHTML = date;
}

const displayDigitalTime = time => {
	digitalTimeElement.innerHTML = time;
}

const clock = () => {
	displayDate(getCurrentDate());
	displayDigitalTime(getCurrentTime());
}

setInterval(clock, 1000);




