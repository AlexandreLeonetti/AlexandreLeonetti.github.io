import React, {Component} from 'react';
import './Wide.css';
import StoreItem from './StoreItem';
import MusicSquares from './MusicSquares/MusicSquares';



class  Wide extends Component {
	constructor(props){
		super(props);
	}

			render(){
if(this.props.title == "store"){ 

			let threeElements= [];
			for(let i=0; i<3; i++){
				threeElements.push(<StoreItem/>);
			}
			console.log(threeElements);
			return(
			<div>
				<div className="wide-section shaded grey">
			 	<img className='Wide' src={this.props.image} />
									</div>	
	
			</div>
		);
		
	}else if(this.props.title=="music"){
	
			return(
			<div>
				<div className="wide-section shaded grey">
				
			 	<img className='Wide' src={this.props.image} />
				<div className='container'> <MusicSquares/>	
				</div>
				</div>	
	
			</div>
			);
	}else{
	
			return(
			<div>
				<div className="wide-section shaded grey">
			 	<img className='Wide' src={this.props.image} />
				
				</div>	
	
			</div>
			);

	}
}}
export default Wide;
