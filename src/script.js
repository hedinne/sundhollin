(() => {

	let h = 30;
	let d = n => Math.floor(Math.random() * n);
	let k = c => {
		let s = document.createElement('style');
		if (window.attachEvent && !window.opera) {
			s.styleSheet.cssText = c;
		}
		else {
			s.appendChild(document.createTextNode(c));
		}
		document.getElementsByTagName('head')[0].appendChild(s);
	};
	k(
		'@keyframes u{0%{transform:rotate(0deg);}25%{transform:rotate(10deg);}50%{transform:rotate(0deg);}75%{transform:rotate(-10deg);}100%{transform:rotate(0deg);}};',
	);
	k(
		'@keyframes m{0%{margin-top:2vh;opacity:0;}20%{opacity:1.0;margin-top:0vh;margin-left:0vw;transform:rotate(' +
		d(360) +
		'deg);}100%{opacity:0.4;margin-top:100vh;margin-left:' +
		d(4) +
		'vw;transform:rotate(1080deg);}};',
	);
	let w = document.createElement('div');
	w.id = 'daWorld';
	w.style.animation = 'u 60s ease-in infinite';
	w.style.position = 'fixed';
	w.style.top = '0';
	w.style.bottom = '0';
	w.style.right = '0';
	w.style.left = '0';
	document.body.appendChild(w);
	while (h--) {
		let o = document.createElement('div');
		o.style.opacity = '0';
		o.style.animation = `m ${d(14) + 6}s ease-in ${d(4000)}ms infinite`;
		o.style.zIndex = '1000';
		o.style.position = 'fixed';
		o.style.top = `${d(40)}vh`;
		o.style.left = `${d(100)}vw`;
		o.style.fontSize = `${d(60) + 6}px`;
		o.innerHTML = Math.random() < 0.5 ? '🏊‍♂️' : '🏊‍♀️';
		w.appendChild(o);
	}
})();
