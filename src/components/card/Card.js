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
                                <p>{this.props.frontTitle}</p>
                                <span className="subtitleText">{this.props.frontSubTitle}</span>
                            </div>
                        </div>

                        <div className="back">
                            <div className="card-content">
                                <p className="backPara">{this.props.backText}</p>
                                <div className="card-actions">
                                    <a 
                                        onClick={(e) => this.props.linkClick(e)}
                                        className="backLink1" href={this.props.link1} rel="noopener noreferrer" target="_blank">
                                            Site 1 
                                    </a>
                                    <a 
                                        onClick={(e) => this.props.linkClick(e)}className="backLink2" href={this.props.link2} rel="noopener noreferrer" target="_blank"> 
                                        Site 2
                                    </a>
                                </div>
                            </div>            
                        </div>
                </div>
            </div>

        );
    }
}

export default Card;