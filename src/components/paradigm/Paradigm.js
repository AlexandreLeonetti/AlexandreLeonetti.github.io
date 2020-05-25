import React, {Component} from 'react';
//import first from "../../images/02.jpg";
import Footer from '../footer/footer';
class Paradigm extends Component {
	constructor(props){
		super(props);
	}

	render(){
	return (
		<div>
			<div id="wrapper">

					<section className="intro">
						<header>
							<h1 >{this.props.title}</h1>
							<p>{this.props.Hcontent}</p>
							<ul className="actions">
							<li><a href="#first" className="arrow scrolly"><span className="label">Next</span></a></li>
							</ul>
						</header>
						<div className="content">
							<div>{this.props.content} </div>
							<span className="image fill" data-position="right"><img src={this.props.image}  alt="" /></span>
						</div>
					</section>
					<section className="">
						<header>
							<h1 >{this.props.title2}</h1>							<p>{this.props.Hcontent2}</p>
							<ul className="actions">
							<li><a href="#first" className="arrow scrolly"><span className="label">Next</span></a></li>
							</ul>
						</header>
						<div className="content">
							{this.props.content2}
						</div>
						<Footer/>
										</section>
					
		
	</div>	
	

		</div>
	);
}
}

export default Paradigm;
