import React, { useState } from "react";
import Canvas from "./component/Canvas/Canvas";

import "./App.scss";
import Toolbar from "./component/Toolbar/Toolbar";
import SettingsBar from "./component/SettingsBar/SettingsBar";

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  return (
    <div className="app">
      <Toolbar />
      <SettingsBar />
      <Canvas />
    </div>
  );
};

export default App;
