import React from "react";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Card } from "./Card.js";
import { NavBar } from "./Nav.js";
import { Jumbo } from "./Jumbo.js";
import { Footer } from "./Footer.js";

//create your first component
export class Home extends React.Component {
	render() {
		return (
			<div className="todo">
				<div>
					<NavBar />
				</div>
				<div className="container">
					<div className="JumboCont">
						<Jumbo />
					</div>

					<div className="row">
						<Card />
						<Card />
						<Card />
						<Card />
					</div>
				</div>

				<div>
					<Footer />
				</div>
			</div>
		);
	}
}
