import React from "react";
import Examples from "./Examples";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
	return (
		<section className="Meaning">
			<h4>{props.meaning.partOfSpeech} </h4>
			{props.meaning.definitions.map(function (definition, index) {
				if (index < 2) {
					return (
						<div key={index}>
							<div>
								<strong>Definition:</strong> {definition.definition}
								<br />
								<Examples examples={definition.example} />
								<Synonyms synonyms={props.meaning.synonyms} /> <br />
							</div>
						</div>
					);
				} else {
					return null;
				}
			})}
		</section>
	);
}
