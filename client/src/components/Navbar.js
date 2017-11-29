import React, { Component } from "react";

const NavBar = () => {
	return (
		<nav className="navbar navbar-inverse bg-inverse">
			<a className="navbar-brand" href="#">
				<img src="img/logo_caf_icon_white.png" href="#index.html" height="30px" alt="CAF"></img>
			</a>
			<a className="active" href="">Benchmark</a>
		</nav>
	);
};

export default NavBar;
