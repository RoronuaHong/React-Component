import React, { Component } from "react";

import "../../styles/scss/calendar";

class calendar extends Component {
    constructor() {
        super();
    }

    //实现当前日期
    showDate() {

    }

    render() {
        const arr = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
        const showDate = arr.map((item, index) => (
            <li key={ index }>
                { item }
            </li>
        ));

        return (
            <div className="calendar-box">
                <div className="header">
                    <div className="left">
                        {"<"}
                    </div>
                    <div className="title">
                        2018-05-21
                    </div>
                    <div className="right">
                        {">"}
                    </div>
                </div>
                <ul className="content clearfix">
                    { showDate }
                </ul>
            </div>
        )
    }
}

export default calendar;
