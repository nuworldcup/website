import React, { Fragment } from 'react';
import { ArrowLeft } from 'react-feather';
import FadeInText from './FadeInText';
import './Option.css';

class Option extends React.Component {
    constructor(props) {
        super(props);
        this.handleEndTransition = this.handleEndTransition.bind(this);
        this.renderIfActive = this.renderIfActive.bind(this);
        this.onClick = this.onClick.bind(this);
        this.renderBackButton = this.renderBackButton.bind(this);
        this.state = {
            show: true
        };
    }

    renderBackButton() {
        if (this.props.active) {
            return(
                <div className="back">
                    <ArrowLeft size={48} onClick={this.props.reset}/>
                </div>
            );
        }
    }

    onClick() {
        this.props.onClick()
    }

    handleEndTransition() {
        if (this.props.show && this.optionHasBeenSelected) {
            this.props.setShow({
                show: false
            })
        }
    }

    renderIfActive() {
        if(this.props.active) {
            return this.props.componentToRender();
        }
        if(this.props.optionHasBeenSelected) {
            return null;
        }
        return(
            <FadeInText text={this.props.text} />
        );
    }

  render() {
      if (this.props.show) {
        return (
            <Fragment>
                {this.renderBackButton()}
                <div 
                    className={this.props.extraStyles + " flex-center"} 
                    onClick={this.onClick}
                    onTransitionEnd={() => this.handleEndTransition()}
                >
                    {this.renderIfActive()}
                </div>
            </Fragment>
        );
      }
  }
}

export default Option;