import React from 'react'

function Alert(props) {
    return (
        <div className={`alert alert-${props.value.type}`} role="alert">
            {props.value.msg}
        </div>
    )
}

export default Alert