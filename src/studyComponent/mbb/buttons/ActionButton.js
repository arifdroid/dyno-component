import PropTypes from 'prop-types';

import Button from '@mui/material/Button';

import Icon from '../Icon';

import './style.scss';

const ActionButton = ({
  isAssetIcon,
  icon,
  title,
  onClick,
  variant,
  disabled,
  size,
  fullWidth,
  className,
  hasLeftIcon,
  hasRightIcon,
  disableRipple,
  disabledElevation,
}) => (
  <Button
    size={size}
    variant={variant}
    onClick={onClick}
    disabled={disabled}
    fullWidth={fullWidth}
    disableRipple={disableRipple}
    disableElevation={disabledElevation}
    className={`${className} btn btn-action ${isAssetIcon ? 'btn--asset' : ''}`}
  >
    {hasRightIcon && <Icon className="right--icon" isAssetIcon={isAssetIcon} type={icon} />}
    <span className="btn--title">{title}</span>
    {hasLeftIcon && <Icon className="left--icon" isAssetIcon={isAssetIcon} type={icon} />}
  </Button>
);

ActionButton.defaultProps = {
  icon: '',
  title: '',
  isAssetIcon: false,
  className: '',
  size: 'medium',
  onClick: null,
  disabled: false,
  fullWidth: false,
  variant: 'contained',
  disableRipple: false,
  hasLeftIcon: true,
  hasRightIcon: false,
  disabledElevation: true,
};

ActionButton.propTypes = {
  isAssetIcon: PropTypes.bool,
  icon: PropTypes.string,
  title: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  size: PropTypes.string,
  fullWidth: PropTypes.bool,
  variant: PropTypes.string,
  className: PropTypes.string,
  hasLeftIcon: PropTypes.bool,
  hasRightIcon: PropTypes.bool,
  disableRipple: PropTypes.bool,
  disabledElevation: PropTypes.bool,
};

export default ActionButton;
