import React, {Component} from 'react';
import Card from './Card';
import './App.css';

const cardDetails = require('./cardInformation.json');

class CardClickFlip extends Component {
  constructor(props) {
    super(props);
      this.state = {
        flipState: cardDetails.map(() => false)
      }
  }

  handleClick(index) {
    const newflipState = [...this.state.flipState];
    newflipState[index] = !this.state.flipState[index];
    this.setState({flipState: newflipState});
  }
 
  render () {
    console.log(`The flipState is ${this.state.flipState}`);
    console.log(`condition is: ${this.props.condition}`);

    const deck = cardDetails.map((card, index) => {
      return <Card
                  key={card.id}
                  index={index}
                  handleClick={this.handleClick.bind(this)}
                  condition={this.state.flipState[index]}
                  frontTitle={card.name}
                  frontSubTitle={card.subtitle}
                  image={{backgroundImage: `url(${card.backgroundImage})`}}
              />
            }
          );
  
  return (
    <div className="wrapper">

      <h1>Card Tricks</h1>

      <div className="flexColumns">


        {/*********** Basic Card ***********/}
          {deck}

      
        {/*********** The Whole Works *************/}
        {/* <div className="card-wrapper">
          <div className={ `card${flipper}` } onClick={e => this.toggle(e)}>
            <div className="front" style={{ backgroundImage: `url(https://images.pexels.com/photos/1112007/pexels-photo-1112007.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)`}} >
              <div className="card-content">
                <p>Whole Works</p>
                <span className="subtitleText">Everything Bagel</span>
              </div>
            </div>
            <div className="back">
              <div className="card-content">
                <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.</p>
              </div>            
            </div>
          </div>
        </div> */}


      </div>      
    </div>     


  );
  }
}

export default CardClickFlip;
