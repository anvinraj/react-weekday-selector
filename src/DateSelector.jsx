import React, { Component } from 'react';
import './style.css';

const defaultColor = '#99ccff';
const clickedColor = '#0099cc';
class DateSelector extends Component{
	
	constructor(props){
		super(props);				
		this.state = {
		color: defaultColor,
		suClick :false,
		moClick :false,
		tuClick :false,
		weClick :false,
		thClick :false,
		frClick :false,
		saClick :false,
		dayArray :[]
		}			
		this.dayClickHandler = this.dayClickHandler.bind(this);
		
	}
	
	componentWillReceiveProps(newProps) {
	this.props= newProps;
		if(this.props.isDayClick === 'true'){
	
				this.setState({
				suClick :false,
				moClick :false,
				tuClick :false,
				weClick :false,
				thClick :false,
				frClick :false,
				saClick :false
				});
	
		
				if(this.props.clickedDays != undefined){
				var dayArrayFrmServive = this.props.clickedDays.split(',');
				var newArray = this.state.dayArray.slice();  
				for(var i = 0; i < dayArrayFrmServive.length; i++) {
					var index = dayArrayFrmServive.indexOf(dayArrayFrmServive[i]);
					var clickedKey = dayArrayFrmServive[i]+'Click';
					newArray.push(dayArrayFrmServive[i]);
					this.setState({[clickedKey] :true});   
			
				}
				this.setState({dayArray :newArray});  
				}else{
					console.log('undefined');
				}
		
		}
  }
  
 
  
	
	dayClickHandler(e){ 
		var index;       
        var clickedVal = e.currentTarget.getAttribute('value');  
		var newArray = this.state.dayArray.slice();     	 
        
        if(clickedVal === 'su'){
        	if(this.state.suClick === true){   		
        		
        		index = this.state.dayArray.indexOf(clickedVal);
        		var array = this.state.dayArray.slice(0, index).concat(this.state.dayArray.slice(index + 1, this.state.dayArray.length))
        		this.setState({suClick :false,dayArray:array}, () => {
        		  this.props.dayClick(this.state.dayArray);
				});         		
        		        		
        	}else{
        		newArray.push(clickedVal);  
        		this.setState({ suClick: true,dayArray:newArray }, () => {
        		  this.props.dayClick(this.state.dayArray)
				}); 		
        	}        	
        }
        else if(clickedVal === 'mo'){
        	if(this.state.moClick === true){
        		index = this.state.dayArray.indexOf(clickedVal);
        		var array = this.state.dayArray.slice(0, index).concat(this.state.dayArray.slice(index + 1, this.state.dayArray.length))
        		this.setState({moClick :false,dayArray:array}, () => {
        		  this.props.dayClick(this.state.dayArray);
				}); 
        	}else{
        		newArray.push(clickedVal);  
        		this.setState({ moClick: true,dayArray:newArray }, () => {
        		  this.props.dayClick(this.state.dayArray)
				});
        	}
        }
        else if(clickedVal === 'tu'){
        	if(this.state.tuClick === true){
        		index = this.state.dayArray.indexOf(clickedVal);
        		var array = this.state.dayArray.slice(0, index).concat(this.state.dayArray.slice(index + 1, this.state.dayArray.length))
        		this.setState({tuClick :false,dayArray:array}, () => {
        		  this.props.dayClick(this.state.dayArray);
				}); 
        	}else{
        		newArray.push(clickedVal);  
        		this.setState({ tuClick: true,dayArray:newArray }, () => {
        		  this.props.dayClick(this.state.dayArray)
				});
        	}
        }
        else if(clickedVal === 'we'){
        	if(this.state.weClick === true){
        		index = this.state.dayArray.indexOf(clickedVal);
        		var array = this.state.dayArray.slice(0, index).concat(this.state.dayArray.slice(index + 1, this.state.dayArray.length))
        		this.setState({weClick :false,dayArray:array}, () => {
        		  this.props.dayClick(this.state.dayArray);
				}); 
        	}else{
        		newArray.push(clickedVal);  
        		this.setState({ weClick: true,dayArray:newArray }, () => {
        		  this.props.dayClick(this.state.dayArray)
				});
        	}
        }
        else if(clickedVal === 'th'){
        	if(this.state.thClick === true){
        		index = this.state.dayArray.indexOf(clickedVal);
        		var array = this.state.dayArray.slice(0, index).concat(this.state.dayArray.slice(index + 1, this.state.dayArray.length))
        		this.setState({thClick :false,dayArray:array}, () => {
        		  this.props.dayClick(this.state.dayArray);
				}); 
        	}else{
        		newArray.push(clickedVal);  
        		this.setState({ thClick: true,dayArray:newArray }, () => {
        		  this.props.dayClick(this.state.dayArray)
				});
        	}
        }
        else if(clickedVal === 'fr'){
        	if(this.state.frClick === true){
        		index = this.state.dayArray.indexOf(clickedVal);
        		var array = this.state.dayArray.slice(0, index).concat(this.state.dayArray.slice(index + 1, this.state.dayArray.length))
        		this.setState({frClick :false,dayArray:array}, () => {
        		  this.props.dayClick(this.state.dayArray);
				}); 
        	}else{
        		newArray.push(clickedVal);  
        		this.setState({ frClick: true,dayArray:newArray }, () => {
        		  this.props.dayClick(this.state.dayArray)
				});
        	}
        }
        else if(clickedVal === 'sa'){
        	if(this.state.saClick === true){
        		index = this.state.dayArray.indexOf(clickedVal);
        		var array = this.state.dayArray.slice(0, index).concat(this.state.dayArray.slice(index + 1, this.state.dayArray.length))
        		this.setState({saClick :false,dayArray:array}, () => {
        		  this.props.dayClick(this.state.dayArray);
				}); 
        	}else{
        		newArray.push(clickedVal);  
        		this.setState({ saClick: true,dayArray:newArray }, () => {
        		  this.props.dayClick(this.state.dayArray)
				});
        	}
        }        
    }
	
	
		
		
	render(){
		return (
		<div style={{float:"left",marginLeft:"20px",marginTop:"30px"}}>
			<div className="btnBox" value="su" id ="su" style={{background: this.state.suClick ? clickedColor : defaultColor}} onClick={this.dayClickHandler}>S</div>
            <div className="btnBox" value="mo" id ="mo" style={{background: this.state.moClick ? clickedColor : defaultColor}} onClick={this.dayClickHandler}>M</div>
            <div className="btnBox" value="tu" id ="tu" style={{background: this.state.tuClick ? clickedColor : defaultColor}} onClick={this.dayClickHandler}>T</div>
            <div className="btnBox" value="we" id ="we" style={{background: this.state.weClick ? clickedColor : defaultColor}} onClick={this.dayClickHandler}>W</div>
            <div className="btnBox" value="th" id ="th" style={{background: this.state.thClick ? clickedColor : defaultColor}} onClick={this.dayClickHandler}>T</div>
            <div className="btnBox" value="fr" id ="fr" style={{background: this.state.frClick ? clickedColor : defaultColor}} onClick={this.dayClickHandler}>F</div>
            <div className="btnBox" value="sa" id ="sa" style={{background: this.state.saClick ? clickedColor : defaultColor}} onClick={this.dayClickHandler}>S</div>
		</div>		
		);
	}
}



export default DateSelector;