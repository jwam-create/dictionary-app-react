import React from "react";
import "./Photos.css";

export default function Photos(props) {
	if (props.photos) {
		return (
			<section className="Photos row">
				{props.photos.map(function (photo, index) {
					return (
						<div key={index} className="col-md-4">
							<a href={photo.src.original} target="_blank" rel="noreferrer">
								<img
									src={photo.src.landscape}
									alt=""
									className="img-fluid"
									rel="noreferrer"
								/>
							</a>
						</div>
					);
				})}
			</section>
		);
	} else {
		return null;
	}
}
