import React from "react";

export default function ResetButton({ handleReset }) {
	return (
		<button id='resetButton' onClick={() => handleReset()}>
			Reset
		</button>
	);
}
