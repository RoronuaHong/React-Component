import React, { Component } from "react";
import SubTab from "./subTab";
import "./main";

class Tab extends Component {
    constructor() {
        super();

        this.state = {
            currentIndex: 0
        }

        this.changeCurrentIndex = this.changeCurrentIndex.bind(this);
    }

    changeCurrentIndex(index) {
        this.setState({ 
            currentIndex: index
        });
    }

    render() {
        return (
            <SubTab 
                currentIndex={ this.state.currentIndex }
                changeCurrentIndex={ this.changeCurrentIndex }
            >
                <div name="首页">这是首页</div>
                <div name="新闻">这是新闻</div>
                <div name="体育">这是体育</div>
                <div name="彩票">这是彩票</div>
                <div name="头条">这是头条</div>
            </SubTab>
        )
    }
}

export default Tab;
