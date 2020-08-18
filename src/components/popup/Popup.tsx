import React from "react";
import { Link } from 'react-router-dom';
import "./popup.scss";

export default function Popap ({ ...props }) {
        return (
            <div className="popap">
                <span>{props.prop ? "Coffee complete" : "Coffee machine is broken" }</span>
                <Link to="/"><button><img src="https://img.icons8.com/emoji/48/000000/check-mark-emoji.png"/></button></Link>
            </div>
        )
}