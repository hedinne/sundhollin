import './style';
import { Component, render } from 'preact';

export default class App extends Component {
	countdown() {
		const now = new Date().getTime();
		const distance = this.state.then - now;

		const days = Math.floor(distance / (1000 * 60 * 60 * 24));
		const hours = Math.floor(
			(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
		);
		const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		const seconds = Math.floor((distance % (1000 * 60)) / 1000);

		this.setState({
			isOpen: !(days || hours || minutes || seconds),
			hasInfo: true,
			days,
			hours,
			minutes,
			seconds
		});

		if (distance <= 0) {
			clearInterval(this.countdown);

			this.setState({
				isOpen: true,
				hasInfo: true,
				days: 0,
				hours: 0,
				minutes: 0,
				seconds: 0
			});
		}
	}

	constructor() {
		super();
		this.state = {
			then: new Date('Dec 3, 2017, 14:00:00').getTime(),
			days: 0,
			hours: 0,
			minutes: 0,
			seconds: 0,
			isOpen: false
		};
		this.countdown = this.countdown.bind(this);
	}

	componentDidMount() {
		setInterval(this.countdown, 1000);

		if (typeof window !== 'undefined') {
			const script = require('./script.js');
			const s = document.createElement('script');
			s.type = 'text/javascript';
			s.async = true;
			s.innerHTML = script;
			this.instance.appendChild(s);
		}
	}

	render() {
		const { isOpen, days, hours, minutes, seconds, hasInfo } = this.state;

		return (
			<div ref={el => (this.instance = el)}>
				{hasInfo && (
					<div>
						{isOpen ? (
							<div>
								<h1>Sundhöllin hefur opnað!</h1>
								<div class="line">Drífðu þig í sund.</div>
							</div>
						) : (
							<h1>Nei, Sundhöllin opnar eftir</h1>
						)}
					</div>
				)}

				<div class="text">
					{days !== 0 && (
						<div class="line">
							<span>{days}</span>
							{days > 1 ? ' daga' : ' dag'}
						</div>
					)}
					{hours !== 0 && (
						<div class="line">
							<span>{hours}</span>
							{hours > 1 ? ' klukkutíma' : ' klukkutíma'}
						</div>
					)}
					{minutes !== 0 && (
						<div class="line">
							<span>{minutes}</span>
							{minutes > 1 ? ' mínútur' : ' mínútu'}
						</div>
					)}
					{seconds !== 0 && (
						<div class="line">
							<span>{seconds}</span>
							{seconds > 1 ? ' sekúndur' : ' sekúndu'}
						</div>
					)}
				</div>
			</div>
		);
	}
}

if (typeof window !== 'undefined') {
	render(<App />, document.getElementById('root'));
}
