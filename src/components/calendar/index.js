import React, { Component } from "react";

import "../../styles/scss/calendar";

class calendar extends Component {
    state = {
        currentYear: "",
        currentMonth: "",
        dayArr: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
    }

    componentDidMount() {
        //获取当前的年份和月份
        this.setState({
            currentYear: new Date().getFullYear(),
            currentMonth: new Date().getMonth() + 1 
        });
    }

    //实现日期显示
    showDate(currentYear, currentMonth, dayArr) {
        //判断currentMonth的日期数
        if (currentYear || currentMonth) {
            const dateArr = [],
                currentSum = new Date(currentYear, currentMonth, 0).getDate(),
                currentDay = new Date(currentYear, currentMonth - 1, 1).getDay();
    
            //将当前日期循环
            for(let i = 1; i <= currentSum; i++) {
                dateArr.push(i);
            }

            console.log(dateArr);
        }
    }

    //切换月份
    handleMonth(direction) {
        let currentYear = this.state.currentYear,
            currentMonth = this.state.currentMonth;

        if(direction == "left") {
            currentMonth--;

            if (currentMonth <= 1) {
                currentYear = currentYear - 1;
                currentMonth = 12;
            }
        }

        if(direction == "right") {
            currentMonth++;

            if (currentMonth >= 12) {
                currentYear = currentYear + 1;
                currentMonth = 1;
            }
        }

        this.setState({
            currentYear,
            currentMonth
        });
    }

    render() {
        const {
            currentYear,
            currentMonth
        } = this.state,
            arr = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            dataArr = this.showDate(this.state.currentYear, this.state.currentMonth, this.state.dayArr);

        const showWeek = arr.map((item, index) => (
            <li key={ index }>
                { item }
            </li>
        ));

        return (
            <div className="calendar-box">
                <div className="header">
                    <div 
                        className="left"
                        onClick={ () => this.handleMonth("left") }
                    >
                        {"<"}
                    </div>
                    <div className="title">
                        { currentYear }-{ currentMonth }
                    </div>
                    <div 
                        className="right"
                        onClick={ () => this.handleMonth("right") }
                    >
                        {">"}
                    </div>
                </div>
                <ul className="content clearfix">
                    { showWeek }
                </ul>
            </div>
        )
    }
}

export default calendar;
