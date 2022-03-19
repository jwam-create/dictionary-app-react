import React from "react";
import Meaning from "./Meaning";
import "./Results.css";

export default function Results(props) {
	if (props.results) {
		return (
			<div className="Results">
				<section>
					<h1 className="text-capitalize word">{props.results.word}</h1>

					<h4>
						{props.results.phonetics.map(function (phonetics, index) {
							return (
								<div key={index} className="Phonetics">
									<a href={phonetics.audio} target="_blank" rel="noreferrer">
										Listen
									</a>{" "}
									<span className="text">{phonetics.text}</span>
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
