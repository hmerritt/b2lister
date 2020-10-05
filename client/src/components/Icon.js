import React from "react";
import { ReactSVG } from "react-svg";

function Icon(props) {
    const isRounded = props.isRounded ? props.isRounded : false;
    const $placeholder = (
        <svg viewBox="0 0 24 24">
            {
                isRounded ?
                <circle fill="#eee" cx="12" cy="12" r="12" /> :
                <rect fill="#eee" width="100%" height="100%" />
            }
        </svg>
    );

    return (
        <ReactSVG
            src={`/icons/${props.name}.svg`}
            loading={() => $placeholder}
            fallback={() => $placeholder}
        />
    );
}

export default Icon;
