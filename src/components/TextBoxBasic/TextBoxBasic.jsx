import React, { Component, useState } from 'react'
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types'

let containerFlexDirection = 'column';

function TextBoxBasic({ label, labelPosition, ...props }) {

    const { containerStyle,
        typographyStyle,
        textFieldStyle,
        textValueProp,
        textFieldVariant
    } = props


    if (labelPosition === 'left') containerFlexDirection = 'row'
    if (labelPosition === 'right') containerFlexDirection = 'row-reverse'
    if (labelPosition === 'bottom') containerFlexDirection = 'column-reverse'


    return (
        <div style={{ ...containerStyle }}>
            <Typography style={{ ...typographyStyle }}>{label}</Typography>
            <TextField
                variant={textFieldVariant}
                style={{ ...textFieldStyle }}
                onChange={textValueProp}
                // missing border radius inline styling
                
            />
        </div>
    )
}

TextBoxBasic.defaultProps = {
    containerStyle: { display: 'flex', flexDirection: containerFlexDirection, alignSelf: 'flex-start' },
    textFieldStyle: { width: 300 },
    textFieldVariant: 'outlined'
}

TextBoxBasic.propTypes = {
    
    textFieldVariant: PropTypes.oneOf(['primary','outlined','filled']),
}



export default TextBoxBasic;