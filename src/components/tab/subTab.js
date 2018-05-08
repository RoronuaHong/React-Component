import React, { Component } from "react";

// class SubTab extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             currentIndex: this.props.initialIndex
//         }
//     }

//     render() {
//         console.log(this.props.children)
//         return(
//             <React.Fragment>
//                 <ul className="tabTitle">
//                     {
//                         this.props.children.map((item, index) => (
//                             <li
//                                 key={ index }
//                                 onClick={() => 
//                                     this.setState({ currentIndex: index })
//                                 }
//                             >
//                                 { item.props.name }
//                             </li>
//                         ))
//                     }
//                 </ul>
//                 <div className="content">
//                     {
//                         this.props.children.map((item, index) => (
//                             <div 
//                                 className="con"
//                                 key={ index }
//                                 style={{
//                                     display: this.state.currentIndex === index ? "block" : "none"
//                                 }}
//                             >
//                                 { item }
//                             </div>
//                         ))
//                     }
//                 </div>
//             </React.Fragment>
//         )
//     }
// }

const SubTab = props => {
    return (
        <React.Fragment>
            <ul className="tabTitle">
                {
                    props.children.map((item, index) => {
                        return(
                            <li
                                key={index}
                                onClick={() => props.changeCurrentIndex(index) }
                            >
                                {item.props.name}
                            </li>
                        ) 
                    })
                }
            </ul>
            <div className="content">
                {
                    props.children.map((item, index) => {
                        return(
                            <div
                                className="con"
                                key={index}
                                style={{
                                    display: props.currentIndex === index ? "block" : "none"
                                }}
                            >
                                {item.props.children}
                            </div>
                        )
                    })
                }
            </div>
        </React.Fragment>
    )
}

export default SubTab;
