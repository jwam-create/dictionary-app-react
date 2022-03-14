import React from "react";
import Examples from "./Examples";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
	console.log(props.meaning);
	return (
		<div className="Meaning">
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
		</div>
	);
}
