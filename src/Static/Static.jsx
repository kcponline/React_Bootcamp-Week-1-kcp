// import React, { Component } from 'react';
// remove { Component } because this is static
// then inject the html code inside the div container
// the final part is to export the const Static
import React from 'react';

const Static = () => {
	return (
		<div>
			<Header />
			<Banner />
			<ChargerList />
			<StallList />
			<Footer />
		</div>
	);
}

const Header = () => {
	return (
		<header class="main-header">
			<HeaderLogo />
			<Navigation />
		</header>
	);
}

const HeaderLogo = () => {
	return (
		<h1 class="name">
			<a href="#">
				EV Angel
			</a>
		</h1>
	);
}

const Navigation = () => {
	return (
		<ul class="main-nav">
	        <Nav01 />
	        <Nav02 />
	  	</ul>
	);
}

const Nav01 = () => {
	return (
		<li>
			<a href="#">
				History
			</a>
		</li>
	);
}

const Nav02 = () => {
	return (
		<li>
			<a href="#">
				Account
			</a>
		</li>
	);
}

const Banner = () => {
	return (
		<div class="banner">
			<Headline />
			<Tagline />
		</div>
	);
}

const Headline = () => {
	return (
		<h1 class="headline">
			EV Angel
		</h1>
	);
}

const Tagline = () => {
	return (
	  	<span class="tagline">
	  		Helping you to get your EV Charging
	  	</span>
	);
}

const ChargerList = () => {
	return (
		<div class="row">
			<div class="col">
				<h2>CHARGER 1</h2>
	  			<p>STALL 1</p>
	  			<button class="btn-blue"><a href="#">SELECT</a></button>
			</div>
			<div class="col">
				<h2>CHARGER 2</h2>
	  			<p>OPEN</p>
	  			<button class="btn-blue"><a href="#">SELECT</a></button>
			</div>
			<div class="col">
				<h2>CHARGER 3</h2>
	  			<p>RIGHT 2</p>
	  			<button class="btn-blue"><a href="#">SELECT</a></button>
			</div>
		</div>
	);
}

const StallList = () => {
	return (
		<div class="row">
			<div class="col">
				<h2>LEFT 2</h2>
	  			<p>CHARGER:NONE</p>
	  			<p>STALL:OPEN</p>
	  			<p>START:N/A</p>
	  			<p>EVANGEL:KENT</p>
	  			<button class="btn-blue"><a href="#">SELECT</a></button>
			</div>
			<div class="col">
				<h2>LEFT 1</h2>
	  			<p>CHARGER:NONE</p>
	  			<p>STALL:OPEN</p>
	  			<p>START:N/A</p>
	  			<p>EVANGEL:KENT</p>
	  			<button class="btn-blue"><a href="#">SELECT</a></button>
			</div>
			<div class="col">
				<h2>STALL 1</h2>
	  			<p>CHARGER:1</p>
	  			<p>CHARGING</p>
	  			<p>START: 3:30PM</p>
	  			<p>EVANGEL:KENT</p>
	  			<button class="btn-blue"><a href="#">SELECT</a></button>
			</div>
			<div class="col">
				<h2>STALL 2</h2>
	  			<p>CHARGER:3</p>
	  			<p>FINISHED</p>
	  			<p>START: 2:30PM</p>
	  			<p>EVANGEL:KENT</p>
	  			<button class="btn-blue"><a href="#">SELECT</a></button>
			</div>
			<div class="col">
				<h2>STALL 3</h2>
	  			<p>CHARGER:NONE</p>
	  			<p>WAITING</p>
	  			<p>START: 5:20PM</p>
	  			<p>EVANGEL:KENT</p>
	  			<button class="btn-blue"><a href="#">SELECT</a></button>
			</div>
			<div class="col">
				<h2>RIGHT 1</h2>
	  			<p>CHARGER:NONE</p>
	  			<p>WAITING</p>
	  			<p>START: 4:45PM</p>
	  			<p>EVANGEL:KENT</p>
	  			<button class="btn-blue"><a href="#">SELECT</a></button>
			</div>
			<div class="col">
				<h2>RIGHT 2</h2>
	  			<p>CHARGER:3</p>
	  			<p>CHARGING</p>
	  			<p>START: 4:25PM</p>
	  			<p>EVANGEL:KENT</p>
	  			<button class="btn-blue"><a href="#">SELECT</a></button>
			</div>
			
		</div>
	);
}

const Footer = () => {
	return (
		<footer class="main-footer">
			<span>&copy;2018 React-CBC EV Helper</span>
		</footer>
	);
}

export default Static;
