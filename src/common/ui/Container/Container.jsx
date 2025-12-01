import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default function Container({ fluid, children, className, ...props }) {
  return (
    <div
      className={classnames(
        'mx-auto px-4 sm:px-6 lg:px-8',
        {
          'w-full': fluid,
          'max-w-7xl': !fluid,
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

Container.propTypes = {
  fluid: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
};

Container.defaultProps = {
  fluid: false,
  children: null,
  className: undefined,
};
