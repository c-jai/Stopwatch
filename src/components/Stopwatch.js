import React from "react";
import Timer from "./Timer";
import StartStopButton from "./StartStopButton";
import ResetButton from "./ResetButton";

export default class Stopwatch extends React.Component {
	constructor(props) {
		super(props);

		this.state = { milliSeconds: 0, seconds: 0, minutes: 0, hasStarted: false };

		this.handleStartStop = this.handleStartStop.bind(this);
		this.incrementMilliSeconds = this.incrementMilliSeconds.bind(this);
		this.handleReset = this.handleReset.bind(this);
	}

	handleStartStop(hasStarted) {
		let shouldStart = hasStarted;
		this.setState({ hasStarted });
		if (shouldStart) {
			this.secondsInterval = setInterval(
				() => this.incrementMilliSeconds(),
				10
			);
		} else {
			clearInterval(this.secondsInterval);
		}
	}

	incrementMilliSeconds() {
		let milliSec = this.state.milliSeconds;
		let sec = this.state.seconds;
		let min = this.state.minutes;
		if (milliSec === 99) {
			milliSec = -1;
			if (sec === 59) {
				sec = -1;
				min += 1;
			}
			sec += 1;
		}
		milliSec += 1;
		this.setState({ milliSeconds: milliSec, seconds: sec, minutes: min });
	}

	handleReset() {
		clearInterval(this.secondsInterval);
		this.setState({
			milliSeconds: 0,
			seconds: 0,
			minutes: 0,
			hasStarted: false,
		});
	}

	render() {
		return (
			<div id='container'>
				<h1>Stop Watch</h1>
				<Timer
					milliSeconds={this.state.milliSeconds}
					seconds={this.state.seconds}
					minutes={this.state.minutes}
				/>
				<StartStopButton
					handleStartStop={this.handleStartStop}
					hasStarted={this.state.hasStarted}
				/>
				<ResetButton handleReset={this.handleReset} />
			</div>
		);
	}
}

/**
 * Stopwatch
 *      Heading
 *      Timer
 *          HourTimer
 *          MinutesTimer
 *          SecondsTimer
 *      StartStopButton
 *      ResetButton
 */
