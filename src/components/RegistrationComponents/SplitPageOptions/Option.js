import React from 'react';
import FadeInText from './FadeInText';
import './Option.css';

class Option extends React.Component {
    constructor(props) {
        super(props);
        this.handleEndTransition = this.handleEndTransition.bind(this);
        this.onClick = this.onClick.bind(this);
        this.state = {
            show: true
        };
    }

    onClick() {
        this.props.onClick()
    }

    handleEndTransition() {
        if (this.state.show && this.optionHasBeenSelected) {
            this.setState({
                show: false
            })
        }
    }

  render() {
      if (this.state.show) {
        return (
            <div 
                className={this.props.extraStyles + " flex-center"} 
                onClick={this.onClick}
                onTransitionEnd={() => this.handleEndTransition()}
            >
                {this.props.optionHasBeenSelected ?
                // Populate with passed component not null
                    this.props.active ? this.props.componentToRender() : null
                    :
                    <FadeInText text={this.props.text} />
                }
                
            </div>
        );
      }
  }
}

export default Option;