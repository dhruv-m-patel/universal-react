import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import DefaultHelmet from '../DefaultHelmet';
import ThemeSwitch from '../ThemeSwitch';
import { Container } from '../../ui';
import * as styles from './Page.css';

const cx = classnames.bind(styles);

export default function Page({ title, description, children }) {
  const [hasSwitchedToDarkMode, setHasSwitchedToDarkMode] = useState(false);

  // Update CSS Module classes when theme changes
  const handleThemeChange = (isDarkMode) => {
    setHasSwitchedToDarkMode(isDarkMode);
  };

  return (
    <Container
      fluid
      className={cx('page', {
        darkTheme: hasSwitchedToDarkMode,
        lightTheme: !hasSwitchedToDarkMode,
      })}
    >
      <DefaultHelmet title={title} description={description} />
      <div className={cx('textRight')}>
        <ThemeSwitch onThemeChange={handleThemeChange} />
      </div>
      <div className={cx('app')}>
        <header className={cx('appHeader')}>
          <h2>
            <img src="/images/react.svg" className={cx('appLogo')} alt="logo" />
            React App
          </h2>
          <small>A React starter app with SSR support.</small>
        </header>
        <br />
        <br />
        <Container className={cx('content')}>{children}</Container>
      </div>
    </Container>
  );
}

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
};

Page.defaultProps = {
  title: undefined,
  description: undefined,
};
