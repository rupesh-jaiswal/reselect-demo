import React from 'react';
import { connect } from "react-redux";
class DateTime extends React.Component {
    componentDidMount(){
        setInterval(() => {
            const today = new Date();
            const time = today.getHours() + "::" + today.getMinutes() + "::" + today.getSeconds();
            this.props.dispatch({type: 'SET_DATE', time});
        },1000);
    }
    render() {
        return <div>{this.props.currentTime}</div>
    }
};

export default connect(state => ({currentTime: state.dateReducer.currentTime}))(DateTime)