import React from "react";

export default function Photos(props) {
	if (props.photos) {
		return (
			<ul>
				{props.photos.map(function (photo) {
					return (
						<li key={photo.id}>
							<img src={photo.src.small} alt="" />
						</li>
					);
				})}
			</ul>
		);
	} else {
		return null;
	}
}
