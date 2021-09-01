//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
//import Home from "./component/home.jsx";

//render your react application

function SecondsCounter(props) {
	return (
		<div className="contador">
			<div>
				<i className="far fa-clock"></i>
			</div>
			<div className="seis">{props.digitoseis % 10}</div>
			<div className="cinco">{props.digitocinco % 10}</div>
			<div className="cuatro">{props.digitocuatro % 10}</div>
			<div className="tres">{props.digitotres % 10}</div>
			<div className="dos">{props.digitodos % 10}</div>
			<div className="uno">{props.digitouno % 10}</div>
		</div>
	);
}
SecondsCounter.propTypes = {
	digitouno: PropTypes.numbers,
	digitodos: PropTypes.numbers,
	digitotres: PropTypes.numbers,
	digitocuatro: PropTypes.numbers,
	digitocinco: PropTypes.numbers,
	digitoseis: PropTypes.numbers
};

let counter = 0;
setInterval(function() {
	const uno = Math.floor(counter / 1);
	const dos = Math.floor(counter / 10);
	const tres = Math.floor(counter / 100);
	const cuatro = Math.floor(counter / 1000);
	const cinco = Math.floor(counter / 10000);
	const seis = Math.floor(counter / 100000);

	counter++;
	ReactDOM.render(
		<SecondsCounter
			digitouno={uno}
			digitodos={dos}
			digitotres={tres}
			digitocuatro={cuatro}
			digitocinco={cinco}
			digitoseis={seis}
		/>,
		document.querySelector("#app")
	);
}, 1000);
