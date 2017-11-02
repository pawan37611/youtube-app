import React,{Component} from 'react';

class Search_Bar extends Component
{

constructor(props){
super(props)

this.state={term:''};

}

onSearchChange(term)
{
  this.setState({term});
  console.log(term);
  this.props.videoSearch(this.state.term);
}

 render(){

   return ( 
<div>
    <input  onChange={event=>{this.onSearchChange(event.target.value)}}/>
   
   
   </ div>
  
)
}
}


export default Search_Bar;