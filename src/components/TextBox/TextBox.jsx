import React, { Component, useState } from 'react'
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

//render prop, to enable dynamic control rendering

class TextArea extends Component {

    state = { textValue: '' }

    val = (e) => {
        this.setState({
            textValue: e.target.value
        })
    }

    render() {

        return this.props.children({ textValueProp: this.val, inputValueProp: this.state.textValue })
    }
}

// const TextArea = (props) => {

//     const [textValue, setTextValue] = useState('')

//     return props.children({ textValueProp: setTextValue, inputValueProp: textValue })
// }

// const renderTextField = ({ textValue }) => {
//     return (
//         <TextField
//             id="standard-basic" variant="outlined"
//             style={{ width: 200 }}
//             value={textValue}
//         />
//     )
// }



function TextBox({ label, labelPosition }) {

    return (

        <TextArea >
            {({ textValueProp, inputValueProp }) => {

                switch (labelPosition) {

                    default:
                        return (
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <Typography>{label}</Typography>
                                <TextField
                                    id="standard-basic" variant="outlined"
                                    style={{ width: 200 }}
                                    onChange={textValueProp}
                                />
                            </div>
                        )
                }


            }}</TextArea>


    )
}


export default TextBox;