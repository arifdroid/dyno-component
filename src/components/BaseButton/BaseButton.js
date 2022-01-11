import React from 'react';
import PropTypes from 'prop-types';
import './BaseButton.css'

const BaseButton = ({ variant,  ...props }) => { // --> arrow function 

    return <button
        className={`base-button-${variant}`}
        {...props}
    ></button>;

}

BaseButton.defaultProps = {    
    variant: 'primary'
}

BaseButton.propTypes = {    
    onClick: PropTypes.func.isRequired,
    variant: PropTypes.oneOf(['primary','outlined']),
}

export default BaseButton;