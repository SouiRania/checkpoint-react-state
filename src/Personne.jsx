import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';

export default class Personne extends Component {
  
   state={
    person:{
        fullName:'Rania Souissi',
        bio:'je suis princesse',
        img:'https://i.pinimg.com/originals/a2/30/4d/a2304d23e06dd4dd2652b2fc92f73e02.jpg',
        profession:'Femme d-affaire'
    },
    shows:false
   }
   showContent=()=>{
    this.setState({shows:!this.state.shows})
   }
  
  
    render() {
    return (
      <div>
        {this.state.shows?<><h1>{this.state.person.fullName}</h1>
                           <h2>{this.state.person.bio}</h2>
                           <img width={"200"} src={this.state.person.img}></img>
                           <h2>{this.state.person.profession}</h2>
        </>:null}
        <Button variant="primary" onClick={this.showContent}>❤</Button>
      </div>
    )
  }
}
