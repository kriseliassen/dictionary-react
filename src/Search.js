import React from "react";
import "./index.css";
import "./Search.css";

export default function Search() {
	return (
		<div className="Search">
			<h2>What word do you want to look up?</h2>
			<div className="search-wrapper">
				<i className="fas fa-search search-icon"></i>
				<input
					type="search"
					placeholder="Search"
					className="search-field"
					autoComplete="off"
					autoFocus="on"
				/>
			</div>
			{/* <a href="#" className="random-word">
				I'm not looking for anything in particular, show a random word!
			</a> */}
		</div>
	);
}
