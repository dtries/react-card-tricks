import React, {Component} from 'react';



class Card2 extends Component {

    render() {
        let cardClass = 'card2';
        console.log(`cardClass is: ${cardClass}`);
        return (
            <div className="card2-wrapper">
                <div onClick={ () => this.props.handleClick(this.props.index) }  className={cardClass} >
                        <div className="front2" style={this.props.image} >
                            <div className="card2-content">
                                <p>{this.props.frontTitle}</p>
                                <span className="subtitleText2">{this.props.frontSubTitle}</span>
                            </div>
                        </div>

                        <div className="back2">
                            <div className="card2-content">
                                <p className="back2Para">{this.props.backText}</p>
                                <div className="card2-actions">
                                    <a 
                                        onClick={(e) => this.props.linkClick(e)}
                                        className="back2Link1 back2Links" href={this.props.link1} rel="noopener noreferrer" target="_blank">
                                            Site 1 
                                    </a>
                                    <a 
                                        onClick={(e) => this.props.linkClick(e)}className="back2Link2 back2Links" href={this.props.link2} rel="noopener noreferrer" target="_blank"> 
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

export default Card2;