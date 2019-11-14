//This is for the nextJS rudiment

import React from "react";
import ReactDOM from "react-dom";
import Link from 'next/link';
import {getInfo} from '../lib/utils.js';
import Layout from '../components/Layout.js';


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

  handleFunction(){
    if(this.state.user == null){
      console.log(this.state.user);
      return (<div><h3>{this.state.search} doesnt exist.</h3></div>);
    }

    return null;
  }

	render(){
		const linkStyle = {
  			marginRight: 15,
		};

		return (
      <div class="main" style={{ margin: "auto auto", width: "1000px", textAlign: "center" }}>
      <body>

        <Link href="/">
          <a style={linkStyle}><font color="white">Home</font></a>
        </Link>
        <Link href="/about">
          <a style={linkStyle}><font color="white">About</font></a>
        </Link>
        <Link href="/funPage">
          <a style={linkStyle}><font color="white">Fun Page ;)</font></a>
        </Link>
        <Link href="/unknown">
          <a style={linkStyle}><font color="white">404 page</font></a>
        </Link>
        <br />
        <br />

        <img src="/static/sponge.jpg" className="App-logo" />
        <h2>New Mexico Campground Search</h2>
        <p><input type='text' value={this.state.search} onChange={this.handleUpdate.bind(this)}/></p>
          <div className="button-style" onClick={this.handleSearch.bind(this)}>Search</div>
          {this.state.user ? <div>
          		<br /> 
          		<h3>{this.state.user.profile.name} </h3>
                <img id="hello" src= {this.state.user.profile.image_url} style={{ maxWidth: '400px', maxHeight: '400px' }}/> 
                <p>{this.state.user.profile.description}</p>

         	</div> : handleFunction() }
          </body>

	        <style jsx>{`
          		h1,
          		h2,
              h3,
          		a,
          		p {
            		font-family: "Arial";
                color: white;
          		}

              body {
                background-image: url("/static/coolPattern.jpg");
              }

              .main {
                border-right: solid;
                border-top: solid;
                color: blue;
              }

              .response img, .response p{
                float: left;
                display: inline;
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
            		height: 200px;
            		width: 600px;
          		}

          		a {
            		text-decoration: none;
            		color: blue;
          		}

          		a:hover {
            		opacity: 0.6;
          		}
        	`}</style>
			</div>
    );
	}
}

export default Home;