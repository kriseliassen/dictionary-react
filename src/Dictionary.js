import React, { useState } from "react";
import axios from "axios";
import "./index.css";
import "./Dictionary.css";

export default function Dictionary() {
	let [keyword, setKeyword] = useState("");

	function handleResponse(response) {
		console.log(response.data[0]);
	}

	function handleKeywordChange(e) {
		setKeyword(e.target.value);
	}

	function search(e) {
		e.preventDefault();

		// documentation: https://dictionaryapi.dev/
		let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
		axios.get(apiUrl).then(handleResponse);
	}

	return (
		<div className="Dictionary">
			<header>
				<h1>dic·tion·ar·y</h1>
				<p>/ˈdikSHəˌnerē/</p>
			</header>
			<div className="search-form">
				<h2>What word do you want to look up?</h2>
				<form className="search-wrapper" onSubmit={search}>
					<i className="fas fa-search search-icon"></i>
					<input
						type="search"
						placeholder="Search"
						className="search-field"
						autoComplete="off"
						onChange={handleKeywordChange}
					/>
				</form>
				{/* <a href="#" className="random-word">
				I'm not looking for anything in particular, show a random word!
			</a> */}
			</div>
		</div>
	);
}
