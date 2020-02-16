import React, {Component} from 'react';



class Card extends Component {

    render() {
        let cardClass = this.props.condition ? 'card flipped' : 'card';
        console.log(`cardClass is: ${cardClass}`);
        return (
            <div className="card-wrapper">
                <div onClick={ () => this.props.handleClick(this.props.index) }  className={cardClass} >
                        <div className="front" style={this.props.image} >
                            <div className="card-content">
                                <p>Front: {this.props.frontTitle}</p>
                                <span className="subtitleText">SubTitle: {this.props.frontSubTitle}</span>
                            </div>
                        </div>

                        <div className="back">
                            <div className="card-content">
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c</p>
                            </div>            
                        </div>
                </div>
            </div>

        );
    }
}

export default Card;