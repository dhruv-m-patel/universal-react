import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classnames from 'classnames/bind';
import Page from '../Page';
import { Spinner } from '../ui';
import * as styles from './ReduxExamplePage.css';

const cx = classnames.bind(styles);

export default function ReduxExamplePage({
  isFetching,
  error,
  data,
  fetchTestData,
}) {
  useEffect(() => {
    if (!isFetching && !error && (!data || !data.length)) {
      fetchTestData();
    }
  }, [isFetching, error, data, fetchTestData]);

  return (
    <Page>
      <div className="flex justify-center">
        <div className="w-full sm:w-10/12 md:w-3/3 sm:ml-[8.333333%] md:ml-[25%]">
          <h4 className="text-xl font-semibold mb-4">
            An example page showing Redux integration
          </h4>
          <br />
          <br />
          {isFetching && (
            <div className="flex items-center gap-2">
              <Spinner size="sm" />
              <label>Fetching data with redux...</label>
            </div>
          )}
          {!!error && (
            <label className={cx('error')}>Error fetching data</label>
          )}
          {data && data.length > 0 && (
            <React.Fragment>
              <h5 className="text-lg font-semibold mb-2">
                Following data was fetched using Redux
              </h5>
              <ul className="list-disc list-inside space-y-1">
                {data.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </React.Fragment>
          )}
          <br />
          <br />
          <Link to="/" className="text-blue-600 hover:text-blue-800 underline">
            View Home Page
          </Link>
        </div>
      </div>
    </Page>
  );
}

ReduxExamplePage.propTypes = {
  isFetching: PropTypes.bool,
  error: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.string),
  fetchTestData: PropTypes.func,
};

ReduxExamplePage.defaultProps = {
  isFetching: false,
  error: undefined,
  data: undefined,
  fetchTestData: () => {},
};
