import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
	const audio = new Audio(props.phonetic.audio);

	function playSound() {
		audio.play();
	}

	console.log(props.phonetic);
	return (
		<div className="Phonetic">
			<i className="far fa-play-circle phonetic-icon" onClick={playSound}></i>
			<p className="phonetic-text">{props.phonetic.text}</p>
		</div>
	);
}
