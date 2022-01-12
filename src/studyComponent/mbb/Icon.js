import { Suspense, lazy } from 'react';
import PropTypes from 'prop-types';

import { ICONS, IMAGES } from 'utils/icons';

const SvgIcon = lazy(() => import('@material-ui/core/SvgIcon'));

const Tooltip = lazy(() => import('./Tooltip'));

const MaterialIcon = ({ icon }) => ICONS.get(icon || 'default');

const Icon = ({ isAssetIcon, hasTooltip, type, title, placement, className, tooltipClassName }) => {
  const svgSource = isAssetIcon && IMAGES.get(type || 'default');

  return (
    <Suspense fallback={null}>
      {hasTooltip ? (
        <Tooltip title={title} placement={placement} className={tooltipClassName}>
          {isAssetIcon ? (
            <img src={svgSource} alt="" className={className} />
          ) : (
            <SvgIcon className={className}>
              <MaterialIcon icon={type} />
            </SvgIcon>
          )}
        </Tooltip>
      ) : (
        <>
          {isAssetIcon ? (
            <img src={svgSource} alt="" className={className} />
          ) : (
            <SvgIcon className={className}>
              <MaterialIcon icon={type} />
            </SvgIcon>
          )}
        </>
      )}
    </Suspense>
  );
};

Icon.defaultProps = {
  isAssetIcon: false,
  title: '',
  type: 'questionMark', // Temporarily defaulted to 'questionMark' svg
  placement: 'top',
  className: '',
  hasTooltip: false,
  tooltipClassName: '',
};

Icon.propTypes = {
  isAssetIcon: PropTypes.bool,
  type: PropTypes.string,
  title: PropTypes.node,
  hasTooltip: PropTypes.bool,
  placement: PropTypes.string,
  className: PropTypes.string,
  tooltipClassName: PropTypes.string,
};

export default Icon;
