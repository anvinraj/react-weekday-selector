import React, { Component} from 'react';
import DateSelector from './DateSelector';

class App extends Component {

	constructor(props){
		super(props);				
		this.state = {
			selectedDays: ''		
		}		
	}
	
	dayClick = (dayValue) =>{
		var days = dayValue.map((val)=>{
			return val+',';
		});
		this.setState({selectedDays:days})
	}

  render(){ 
    return (
      	<div>  	
            <DateSelector dayClick={this.dayClick}/>
			<div style={{marginTop:"50px",position:"relative"}}>SELECTED DAYS : {this.state.selectedDays}</div>
		</div> 
    );
  }
}
export default App;