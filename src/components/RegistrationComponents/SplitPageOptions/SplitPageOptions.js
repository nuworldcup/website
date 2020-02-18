import React, { Component } from 'react';
import Option from './Option';
import './SplitPageOptions.css';

class SplitPageOptions extends Component {

    constructor(props) {
        super(props);
        this.remove = this.remove.bind(this);
        this.state = {
            option1Styles: "",
            option2Styles: "",
            optionHasBeenSelected: false,
            option1Active: false,
            option2Active: false,
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

    render() {
		return (
            <div className="full-page">
                <div className={"options"}>
                    <Option 
                        extraStyles={"option-1 " + this.state.option1Styles} 
                        onClick={() => this.remove("option2")}
                        text={"Womens World Cup"}
                        optionHasBeenSelected={this.state.optionHasBeenSelected}
                        active={this.state.option1Active}
                        componentToRender={this.props.option1Component}
                    />
                    <Option 
                        extraStyles={"option-2 " + this.state.option2Styles}
                        onClick={() => this.remove("option1")}
                        text={"Coed World Cup"}
                        optionHasBeenSelected={this.state.optionHasBeenSelected}
                        active={this.state.option2Active}
                        componentToRender={this.props.option2Component}
                    />
                </div>
            </div>
		);
	}
}


export default SplitPageOptions;