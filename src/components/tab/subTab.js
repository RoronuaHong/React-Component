import React, { Component } from "react";

class SubTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: this.props.initialIndex
        }
    }

    render() {

        return(
            <React.Fragment>
                <ul className="tabTitle">
                    {
                        this.props.children.map((item, index) => (
                            <li
                                key={ index }
                                onClick={() => 
                                    this.setState({ currentIndex: index })
                                }
                            >
                                { item.props.name }
                            </li>
                        ))
                    }
                </ul>
                <div className="content">
                    {
                        this.props.children.map((item, index) => (
                            <div 
                                className="con"
                                key={ index }
                                style={{
                                    display: this.state.currentIndex === index ? "block" : "none"
                                }}
                            >
                                { item }
                            </div>
                        ))
                    }
                </div>
            </React.Fragment>
        )
    }
}

export default SubTab;
