import React from "react";

export default function Timer({ milliSeconds, seconds, minutes }) {
	return (
		<div id='timer'>
			{minutes} : {seconds} : {milliSeconds}
		</div>
	);
}
