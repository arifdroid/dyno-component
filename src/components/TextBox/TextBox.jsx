import React, { Component } from 'react'
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

//render prop, to enable dynamic control rendering

class TextArea extends Component {
    state = { textValue: '' }

    render() {
        return (
            <TextField
                id="standard-basic" variant="outlined" style={{ width: 200 }}
            // value={textValue} 
            />
        )
    }
}



function TextBox() {
    return (
        <div>
            <Typography>Account Number</Typography>
            <TextField
                id="standard-basic" variant="outlined" style={{ width: 200 }}
            // value={textValue}
            />
        </div>

    )
}


export default TextBox;