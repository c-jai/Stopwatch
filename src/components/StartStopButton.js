import React from "react";

export default function StartStopButton({ handleStartStop, hasStarted }) {
	let buttonLabel = hasStarted ? "Stop" : "Start";
	return (
		<button id='startStopButton' onClick={() => handleStartStop(!hasStarted)}>
			{buttonLabel}
		</button>
	);
}
