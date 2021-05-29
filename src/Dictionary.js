import React from "react";
import Search from "./Search";
import "./index.css";
import "./Dictionary.css";

export default function Dictionary() {
	return (
		<div className="Dictionary">
			<h1>dic·tion·ar·y</h1>
			<p>/ˈdikSHəˌnerē/</p>
			<Search />
		</div>
	);
}
