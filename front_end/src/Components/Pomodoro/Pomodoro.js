import React from "react";
import Timer from "./PomoComponents/Timer";
import Settings from "./PomoComponents/Settings";
import {useState} from 'react';
import SettingsContext from "./PomoComponents/SettingsContext";
import "./PomoComponents/pomodoro.css";
import Todo from "../Todo/Todo";




const Pomodoro = () => {
  const [showSettings, setShowSettings] = useState(false);
  const [FocusTimeMinutes, setFocusTimeMinutes] = useState(1);
  const [breakMinutes, setBreakMinutes] = useState(1);

  return (
    <div className="pomodoro">
      <main>
        <SettingsContext.Provider
          value={{
            showSettings,
            setShowSettings,
            FocusTimeMinutes,
            breakMinutes,
            setFocusTimeMinutes,
            setBreakMinutes,
          }}
        >
          { showSettings ? <Settings /> : <Timer />}
        </SettingsContext.Provider>
      </main>
    </div>
  );
};

export default Pomodoro;