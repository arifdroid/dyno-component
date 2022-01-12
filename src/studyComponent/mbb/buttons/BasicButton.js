import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';

import './style.scss';

const BasicButton = ({ title, onClick, variant, disabled, size, fullWidth, children, className, disableRipple, disabledElevation }) => (
  <Button
    size={size}
    variant={variant}
    onClick={onClick}
    disabled={disabled}
    fullWidth={fullWidth}
    disableRipple={disableRipple}
    disableElevation={disabledElevation}
    className={`btn btn-basic ${className}`}
  >
    {title || children}
  </Button>
);

BasicButton.defaultProps = {
  title: '',
  className: '',
  size: 'medium',
  onClick: null,
  children: null,
  disabled: false,
  fullWidth: false,
  variant: 'contained',
  disableRipple: false,
  disabledElevation: true,
};

BasicButton.propTypes = {
  title: PropTypes.node,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  children: PropTypes.node,
  size: PropTypes.string,
  fullWidth: PropTypes.bool,
  variant: PropTypes.string,
  className: PropTypes.string,
  disableRipple: PropTypes.bool,
  disabledElevation: PropTypes.bool,
};

export default BasicButton;
