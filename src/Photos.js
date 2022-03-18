import React from "react";

export default function Photos(props) {
	if (props.photos) {
		return <div>{props.photos}</div>;
	} else {
		return null;
	}
}
