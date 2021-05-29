import React from "react";
import Search from "./Search";
import axios from "axios";
import "./index.css";

export default function Dictionary() {
	return (
		<div className="Dictionary">
			<h1>Dictionary</h1>
			<Search />
		</div>
	);
}
