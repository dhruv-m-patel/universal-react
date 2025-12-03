import React from 'react';
import { Link } from 'react-router-dom';
import Page from '../../components/Page';

export default function HomePage() {
  return (
    <Page>
      <div className="flex justify-center">
        <div className="w-full sm:w-10/12 md:w-3/3 sm:ml-[8.333333%] md:ml-[33.333333%]">
          <h5 className="text-lg font-semibold mb-4">
            This starter app was built with:
          </h5>
          <ul className="list-disc list-inside space-y-2">
            <li>React v18</li>
            <li>Redux</li>
            <li>React Router v6</li>
            <li>Vite v5</li>
            <li>Babel v7</li>
            <li>Express v4</li>
            <li>
              Configuration (using{' '}
              <a
                href="https://www.npmjs.com/package/confit"
                target="blank"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                confit
              </a>{' '}
              /{' '}
              <a
                href="https://www.npmjs.com/package/meddleware"
                target="blank"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                meddleware
              </a>
              )
            </li>
            <li>Code splitting (using React.lazy)</li>
            <li>Radix UI + Tailwind CSS</li>
          </ul>
          <br />
          <br />
          <div className="space-y-3">
            <div>
              <Link
                to="/posts"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                View Posts (Modern React Features Demo)
              </Link>
            </div>
            <div>
              <Link
                to="/users"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                View Users (useTransition Demo)
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
}
