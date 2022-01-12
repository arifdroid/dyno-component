import React from 'react';
import PropTypes from 'prop-types';
import './Switch.css'

//build the molecule itself

const Switch = (props) => {

    const { variant, onChecked,
        containerStyle, labelStyle,
        inputStyle, inputSliderStyle,
        classNameSlider } = props

    const onToggle = (e) => onChecked(e.target.checked)



    switch (variant) {

        case 'secondary':
            return (
                <div className="flex" style={containerStyle}>
                    <label className="switch-secondary" style={labelStyle}>
                        <input type="checkbox" onChange={onToggle} style={inputStyle} />
                        <span className="slider-secondary round" style={inputSliderStyle}></span>
                    </label>
                </div>
            )

        case 'switch-material':

            let SwitchMaterial = require('@mui/material/Switch').default;

            return (<SwitchMaterial
                onChange={onToggle}
                inputProps={{ 'aria-label': 'controlled' }}
            />)

        default:
            const classNameSliderT = classNameSlider ? classNameSlider : 'slider round'
            return (
                <div style={containerStyle}>
                    <label className="switch" style={labelStyle} >
                        <input type="checkbox" onChange={onToggle} style={inputStyle} />
                        <span className={classNameSliderT} style={inputSliderStyle}></span>
                    </label>
                </div>
            )
    }
}

Switch.defaultProps = {
    variant: 'primary'
}

Switch.propTypes = {
    onClick: PropTypes.func.isRequired,
    variant: PropTypes.oneOf(['primary', 'material']),
}

export default Switch;