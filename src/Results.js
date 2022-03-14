import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
	if (props.results) {
		return (
			<div className="Results">
				<section>
					<h2 className="text-capitalize">{props.results.word}</h2>

					<h4>
						{props.results.phonetics.map(function (phonetics, index) {
							return (
								<div key={index}>
									<a href={phonetics.audio} target="_blank" rel="noreferrer">
										Listen
									</a>
									{phonetics.text}
								</div>
							);
						})}
					</h4>
				</section>

				{props.results.meanings.map(function (meaning, index) {
					return (
						<div key={index}>
							<Meaning meaning={meaning} />
						</div>
					);
				})}
			</div>
		);
	} else {
		return null;
	}
}
