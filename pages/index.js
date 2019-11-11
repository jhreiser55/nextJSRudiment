//This is for the nextJS rudiment

import React from "react";

class Home extends React.Component {
	constructor(props){
		super(props);
		this.state={search: 'Search'}
	}

	handleUpdate(evt){
	    this.setState({search: evt.target.value});	
	}

	async handleSearch(evt){
	    const user = await getInfo(this.state.search);
	    this.setState({user});
	}

	render(){
		return (
			<div style={{ margin: "auto auto", width: "600px", textAlign: "center"}}>
			<img src="/static/github1.png" className="App-logo" />
			<h2>Github User Search</h2>
			<p><input type='text' value={this.state.search} onChange={this.handleUpdate.bind(this)}/></p>
	        <div className="button-style" onClick={this.handleSearch.bind(this)}>Search</div>

	        <style jsx>{`
          		h1,
          		h2,
          		a,
          		p {
            		font-family: "Arial";
          		}


          		.button-style {
            		margin: auto auto;
            		cursor: pointer;
            		background-color: #4633FF;
            		color: #ffffff;
            		width: 100px;
            		font-family: "Arial";
          		}

          		.description {
            		font-family: "Arial";
            		font-size: "10px";
          		}

          		ul {
            		padding: 0;
          		}

          		li {
            		list-style: none;
            		margin: 5px 0;
          		}
          		.App-logo {
            		height: 80px;
          		}

          		a {
            		text-decoration: none;
            		color: blue;
          		}

          		a:hover {
            		opacity: 0.6;
          		}
        	`}</style>
		);
	}
}

export default Home;