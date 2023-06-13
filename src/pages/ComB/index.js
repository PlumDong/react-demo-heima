import React from "react";
import {connect} from "react-redux";

const comB = (props) => {
    console.log('comB  props =',props)
    return (
        <div> {props.count} </div>

    )
}

const mapStateToProps = (state) => {
    console.log('comB', state)
    return state
}

export default connect(mapStateToProps)(comB)