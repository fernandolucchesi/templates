import './App.css';

import React, { useState } from 'react';

import TemplateOne from './TemplateOne';
import TemplateTwo from './TemplateTwo';
import TemplateThree from './TemplateThree';

function App() {
  const [websiteOne, showWebsiteOne] = useState(false);
  const [websiteTwo, showWebsiteTwo] = useState(false);
  const [websiteThree, showWebsiteThree] = useState(true);

  return <TemplateThree />;
}

export default App;
