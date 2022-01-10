import React from 'react';
import PropTypes from 'prop-types';
import './Switch.css'

const Switch = ({ variant, ...props }) => {

    if (variant === 'secondary') {

        return (
            <div className="flex" >
                <label className="switch-secondary">
                    <input type="checkbox" />
                    <span className="slider-secondary round"></span>
                </label>
            </div>
        )

    } else {

        return (
            <div className="flex" {...props}>
                <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round"></span>
                </label>
            </div>
        )
    }

}

Switch.defaultProps = {
    variant: 'secondary'
}

Switch.propTypes = {
    onClick: PropTypes.func.isRequired,
    variant: PropTypes.oneOf(['primary', 'material']),
}

export default Switch;