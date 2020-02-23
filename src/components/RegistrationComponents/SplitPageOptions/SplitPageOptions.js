import React, { Component } from 'react';
import { ArrowLeft } from 'react-feather';
import Option from './Option';
import './SplitPageOptions.css';

// TODO:: Make background styling customizable

class SplitPageOptions extends Component {

    constructor(props) {
        super(props);
        this.remove = this.remove.bind(this);
        this.setShowOption1 = this.setShowOption1.bind(this);
        this.setShowOption2 = this.setShowOption2.bind(this);
        this.reset = this.reset.bind(this);
        this.state = {
            option1Styles: "",
            option2Styles: "",
            optionHasBeenSelected: false,
            option1Active: false,
            option2Active: false,
            showOption1: true,
            showOption2: true
        };
    }

    remove(toRemove) {
        if (toRemove==="option1") {
            this.setState({
                option1Styles: "removed",
                option2Active: true,
                option2Styles: "opaque",
                optionHasBeenSelected: true
            })
        } else if (toRemove==="option2") {
            this.setState({
                option2Styles: "removed",
                option1Styles: "opaque",
                option1Active: true,
                optionHasBeenSelected: true
            })
        }
    }

    setShowOption1(newState) {
        this.setState({
            showOption1: newState
        });
    }

    setShowOption2(newState) {
        this.setState({
            showOption2: newState
        });
    }

    // OnBack functions should return true or false
    // true if the splitOptions should reset, false
    // if other behavior is expected
    reset() {
        var returnToNormal = true;
        if(this.state.option1Active) {
            // grow 2
            returnToNormal = this.props.onOneBack();
            if (returnToNormal) {
                this.setState({
                    option2Styles: "added",
                    option1Styles: "",
                    showOption2: true,
                    optionHasBeenSelected: false,
                    option1Active: false
                });
            }
        } else {
            // grow 1
            returnToNormal = this.props.onTwoBack();
            if (returnToNormal) {
                this.setState({
                    option1Styles: "added",
                    option2Styles: "",
                    showOption1: true,
                    optionHasBeenSelected: false,
                    option2Active: false,
                });
            }
        }
    }

    render() {
		return (
            <div className="full-page">
                <div className={"options"}>
                    <Option 
                        extraStyles={"option-1 " + this.state.option1Styles} 
                        onClick={() => {
                            this.props.onRenderActiveOne();
                            this.remove("option2");
                        }}
                        renderInactiveComponent={this.props.renderInactiveOne}
                        optionHasBeenSelected={this.state.optionHasBeenSelected}
                        active={this.state.option1Active}
                        renderActiveComponent={this.props.renderActiveOne}
                        show={this.state.showOption1}
                        setShow={this.setShowOption1}
                        reset={this.reset}
                    />
                    <Option 
                        extraStyles={"option-2 " + this.state.option2Styles}
                        onClick={() => {
                            this.props.onRenderActiveTwo();
                            this.remove("option1");
                        }}
                        renderInactiveComponent={this.props.renderInactiveTwo}
                        optionHasBeenSelected={this.state.optionHasBeenSelected}
                        active={this.state.option2Active}
                        renderActiveComponent={this.props.renderActiveTwo}
                        show={this.state.showOption2}
                        setShow={this.setShowOption2}
                        reset={this.reset}
                    />
                </div>
            </div>
		);
	}
}

export default SplitPageOptions;