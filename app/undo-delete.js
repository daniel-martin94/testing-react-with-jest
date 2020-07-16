import React, { useState, Component } from 'react'
import { render } from 'react-dom'

const undoDelete = (props) => {
    let { undo } = props
    return (
        <div>
            <input type="button" value="Undo Delete" onClick={undo}/>
        </div>
    )
}

export default undoDelete