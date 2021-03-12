import './App.css';

import React, { useState } from 'react';

import TemplateOne from './TemplateOne';
import TemplateTwo from './TemplateTwo';
import TemplateThree from './TemplateThree';

function App() {
  const [websiteOne, showWebsiteOne] = useState(false);
  const [websiteTwo, showWebsiteTwo] = useState(false);
  const [websiteThree, showWebsiteThree] = useState(true);

  return (
    <>
      <div className="fixed top-0 z-10 flex justify-center w-full h-32 p-8 bg-white border-b border-gray-100 align-center">
        <button
          className="mx-2"
          onClick={() => {
            showWebsiteOne(true);
            showWebsiteTwo(false);
            showWebsiteThree(false);
          }}
          disabled={websiteOne}
        >
          Template #1
        </button>
        <button
          className="mx-2"
          onClick={() => {
            showWebsiteTwo(true);
            showWebsiteOne(false);
            showWebsiteThree(false);
          }}
          disabled={websiteTwo}
        >
          Template #2
        </button>
        <button
          className="mx-2"
          onClick={() => {
            showWebsiteTwo(false);
            showWebsiteOne(false);
            showWebsiteThree(true);
          }}
          disabled={websiteThree}
        >
          Template #3
        </button>
      </div>
      <div className="mt-32">
        {websiteOne && <TemplateOne />}
        {websiteTwo && <TemplateTwo />}
        {websiteThree && <TemplateThree />}
      </div>
    </>
    // <TemplateThree />
  );
}

export default App;
