import React,{Component} from 'react';

import logo from './logo.svg';
import './App.css';
import $ from "jquery";
import {arr} from "./images/";
import {products} from './images/';
import Paradigm from './components/paradigm/Paradigm';
import Wide from './components/wide/Wide';
import Footer from './components/footer/footer';
class App extends Component {
	constructor(){
		    super();
		    this.state = {
			    language:"en"
    		     };
		this.languageEN = this.languageEN.bind(this);
		this.languageZH = this.languageZH.bind(this);
		this.languageFR = this.languageFR.bind(this);
	}
	componentDidMount(){
		}
	languageEN (){
		if((	this.state.language)!="en"){this.setState({language:"en"})}
	}
	languageFR (){
		if((	this.state.language)!="fr"){this.setState({language:"fr"})}
	}
	languageZH (){
		if((	this.state.language)!="zh"){this.setState({language:"zh"})}
	}

	render(){
		if(this.state.language=="zh"){			console.log("state.language =" + this.state.language);

		return(
			<div>
				<div className="enzhfr">
				<div
					onClick={this.languageEN}
	     				className="lang">EN 
				</div>
				 <div	onClick={this.languageZH}

	     				className="lang">中文 
				</div>
				 <div
					onClick={this.languageFR}
	     				className="lang">FR 
				</div></div>
				<Paradigm
					image={arr[0]}
					title={"< / >"}
					Hcontent={"想要什么样的网站？"}
					title2={""}
					Hcontent2={"一个网上商城，怎么样？"}
				/>		
				<Wide	
					title={"store"}
					image={products[0]}		
				/>
				<Paradigm
					image={arr[1]}
					title={""}
					Hcontent={"音乐呢？"}
					Hcontent2={"我们将为您搭建所有通向成功的桥梁"}
				/>		
				<Wide	
					title={"music"}
					image={products[1]}		
				/>
				<Paradigm
					image={arr[2]}
					title={""}
					Hcontent={"想要建一个社交网站吗？"}
				/>
				<Wide	
					title={"social"}
					image={products[2]}		
				/>

		</div>
		);
		}else if(this.state.language=="fr"){
			console.log("state.language =" + this.state.language);
					return(
			<div>
				<div className="enzhfr"><div
					onClick={this.languageEN}
	     				className="lang">EN 
				</div>
				 <div
					onClick={this.languageZH}
	     				className="lang">中文 
				</div>
				 <div		onClick={this.languageFR}
	
	     				className="lang">FR 
						</div></div>
				<Paradigm
					image={arr[0]}
					title={"< / >"}
					Hcontent={"Quel site voulez vous?"}
					title2={""}
					Hcontent2={"Que pensez vous d'une boutique en ligne pour votre business?"}
				/>		
				<Wide	
					title={"store"}
					image={products[0]}		
				/>
				<Paradigm
					image={arr[1]}
					title={""}
					Hcontent={"Ou preferez-vous faire de la musique ?"}
					Hcontent2={"Nous pouvons creer le site qui changera tout."}
				/>		
				<Wide	
					title={"music"}
					image={products[1]}		
				/>
				<Paradigm
					image={arr[2]}
					title={""}
					Hcontent={"Pourquoi ne pas lancer le prochain Facebook ?"}
				/>
				<Wide	
					title={"social"}
					image={products[2]}		
				/>

		</div>
		);
					
		
			}else{			console.log("state.language =" + this.state.language);

			return(
			<div>				<div className="enzhfr">
				 <div	onClick={this.languageEN}

	     				className="lang">EN 
				</div>
				 <div
					onClick={this.languageZH}
	     				className="lang">中文 
				</div>
				 <div
					onClick={this.languageFR}
	     				className="lang">FR 
			</div>			</div>
			<Paradigm
					image={arr[0]}
					title={"< / >"}
					Hcontent={"what type of website do you want?"}
					title2={""}
					Hcontent2={"What about an online store for your business ?"}
					content2={["Dear visitors, ",<br></br>,
						"my name is Alexandre Leonetti, learning and solving problems is basically the story of my life, i just enjoy sorting out solution so much. And yes, i have been coding all types of websites, user interfaces, and servers  since 2016. ",<br></br>,<br></br>,<br></br>,"I worked on both PHP and node.js servers, mySQL databses and i mostly work with javascript and React.js for front end developments.",<br></br>,<br></br>,<br></br>,"With experience in working both with teams of developpers in large companies such as Astek group, or working alone on projects, i can sustain great amount of working flexibility in various types of environments."]}
				/>		

							
							</div>


		);
			
			}
	}
}

export default App;
