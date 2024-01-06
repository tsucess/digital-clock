const $ = (selector) => {
	return document.querySelector(selector);
}

const hour = $('.hour'),
separator = document.querySelectorAll('.separator'),
min = $('.min'),
sec = $('.sec'),
days = $('.days');


let prds = $('.period');
let weather = $('.bg-weather');

let showSep = true;

function update () {
	showSep = !showSep;
	const now = new Date();


separator.forEach ( dot => {
		if (showSep) {
			dot.classList.add('invisible');
		}
		else 
		{
			dot.classList.remove('invisible');
		}
	});

	let hr = now.getHours();

	if (hr >= 4) {
		weather.classList.remove('bg-night');
		weather.classList.add('bg-evening');
	} 
	else if (hr >= 7) 
	{
		weather.classList.add('bg-night');
		weather.classList.remove('bg-evening');
	}
	else 
	{
		weather.classList.remove('bg-night');
		weather.classList.remove('bg-evening');
	}

	if (hr >= 12 ) {
		if (hr > 12 ){
			hour.textContent = String(hr - 12).padStart(2,'0');
		}
		else 
		{
			hour.textContent = String(now.getHours()).padStart(2, '0');
		}
		prds.textContent = "pm";
	}
	else {
		hour.textContent = String(now.getHours()).padStart(2, '0');
		prds.textContent = "am";
	}
	min.textContent = String(now.getMinutes()).padStart(2, '0');
	sec.textContent = String(now.getSeconds()).padStart(2, '0');


	Array.from(days.children).forEach((item) => {
		item.classList.remove('active');
	});

	days.children[now.getDay()].classList.add('active');
};
setInterval(update, 500);