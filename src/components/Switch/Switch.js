import React from 'react';
import PropTypes from 'prop-types';
import './Switch.css'

const Switch = ({ variant, onChecked, containerStyle, labelStyle, inputStyle, inputSliderStyle, classNameSlider }) => {

    const onToggle = (e) => onChecked(e.target.checked)



    if (variant === 'secondary') {

        return (
            <div className="flex" style={containerStyle}>
                <label className="switch-secondary" style={labelStyle}>
                    <input type="checkbox" onChange={onToggle} style={inputStyle} />
                    <span className="slider-secondary round" style={inputSliderStyle}></span>
                </label>
            </div>
        )

    } else {

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