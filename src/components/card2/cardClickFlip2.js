import React, {Component} from 'react';
import Card2 from './Card2';
import './card2.css';

const cardDetails = require('./cardInformation2.json');

class CardClickFlip2 extends Component {
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

  linkClick (e) {
    e.stopPropagation();
  }
 
  render () {
    const deck = cardDetails.map((card, index) => {
      return <Card2
                  key={card.id}
                  index={index}
                  handleClick={this.handleClick.bind(this)}
                  condition={this.state.flipState[index]}
                  frontTitle={card.name}
                  frontSubTitle={card.subtitle}
                  image={{backgroundImage: `url(${card.backgroundImage})`}}
                  backText={card.backText}
                  link1={card.link1}
                  link2={card.link2}
                  linkClick={this.linkClick.bind(this)}
              />
            }
          );
  
  return (
    <div className="wrapper">

      <h2>Flip on Hover</h2>
      
      <div className="flexColumns">

          {deck}

      </div>      
    </div>     


  );
  }
}

export default CardClickFlip2;
