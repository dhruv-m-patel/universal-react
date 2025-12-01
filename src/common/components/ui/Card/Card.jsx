import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default function Card({ children, className, ...props }) {
  return (
    <div
      className={classnames(
        'rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-sm',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

Card.defaultProps = {
  children: null,
  className: undefined,
};
