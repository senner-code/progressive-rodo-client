import React, {FC} from 'react';

import Router from "./Router/Router";
const App:FC = () => {
  return (
      <div className={`app`}>
        <Router/>
      </div>
  );
};

export default App;