import React, { Component, useState } from 'react'
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types'

function TextBoxBasic({ label, labelPosition, ...props }) {

    const { containerStyle, containerProps,
        typographyStyle, textFieldStyle,
        textValueProp } = props

    let containerFlexDirection = 'column';
    if (labelPosition === 'left') containerFlexDirection = 'row'
    if (labelPosition === 'right') containerFlexDirection = 'row-reverse'
    if (labelPosition === 'bottom') containerFlexDirection = 'column-reverse'


    return (
        <div style={{ display: 'flex', flexDirection: containerFlexDirection, alignSelf: 'flex-start', ...containerStyle }} {...containerProps}>
            <Typography style={{ ...typographyStyle }}>{label}</Typography>
            <TextField
                id="standard-basic" variant="outlined"
                style={{ width: 200, ...textFieldStyle }}
                onChange={textValueProp}

            />
        </div>
    )
}


export default TextBoxBasic;