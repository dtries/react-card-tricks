import React, {Component} from 'react';
import './App.css';

let flipper='';

class CardHoverClickFlip extends Component {

  state = {
    active: false,
  }

  toggle(e){
    this.setState({active: !this.state.active});
    if (this.state.active === false) {
      flipper='flipped'
    } else {
      flipper=''
    }
  }
 
  render () {
  return (
    <div className="wrapper">

      <h1>Card Tricks</h1>

      <div className="flexColumns">
        <div className="flip">
          <div className={ `card ${flipper}` } onClick={e => this.toggle(e)}>
            <div className="front" style={{ backgroundImage: `url(https://images.pexels.com/photos/1112007/pexels-photo-1112007.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)`}} >
              <div className="card-content">
                <p>Front</p>
                <span>Lorem ipsum</span>
              </div>
            </div>
            <div className="back">
              <div className="card-content">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c</p>
              </div>            
            </div>
          </div>
        </div> 
      </div>     
    </div>
  );
  }
}

export default CardHoverClickFlip;
