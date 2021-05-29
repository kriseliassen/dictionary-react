import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./index.css";
import "./Dictionary.css";
import "./Results.css";

export default function Dictionary() {
	let [keyword, setKeyword] = useState("");
	let [results, setResults] = useState(null);

	function handleResponse(response) {
		setResults(response.data[0]);
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
				<h1 className="header-title">dic·tion·ar·y</h1>
				<p className="header-subtitle">/ˈdikSHəˌnerē/</p>
			</header>
			<div className="container">
				<h2 className="search-prompt">What word do you want to look up?</h2>
				<form className="search-form" onSubmit={search}>
					<i className="fas fa-search search-icon"></i>
					<input
						type="search"
						placeholder="Search"
						className="search-field"
						autoComplete="off"
						onChange={handleKeywordChange}
					/>
				</form>
				<Results results={results} />
			</div>
		</div>
	);
}
