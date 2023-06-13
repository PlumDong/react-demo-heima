import React from "react";
import {connect} from "react-redux";

const comA = (props) => {
    const handleClick = () => {
        console.log('comA=',props)
        props.sendAction()
    }
    return (
        <button onClick={handleClick}> + </button>

    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        sendAction: () => {
            dispatch({
                type: 'send_action'
            })
        }
    }
}

export default connect(null, mapDispatchToProps)(comA)


