import React from "react";
import "./Meaning.css";

export default function Meaning(props) {
	return (
		<div className="Meaning">
			<h3 className="result-partOfSpeech">{props.meaning.partOfSpeech}</h3>
			{props.meaning.definitions.map(function (definition, index) {
				return (
					<div key={index} className="result-definition">
						{/* Definition(s) */}
						<p className="definition">
							{index + 1}) {definition.definition}
						</p>
						{/* Example(s) */}
						{definition.example ? (
							<p className="result-example">
								<strong>Used in a sentence: </strong>
								{definition.example}
							</p>
						) : null}
						{/* Synonym(s) */}
						{definition.synonyms ? (
							<p className="result-synonym">
								<strong>Synonym: </strong>
								{definition.synonyms.join(", ")}
							</p>
						) : null}
					</div>
				);
			})}
		</div>
	);
}
