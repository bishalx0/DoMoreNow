import ReactSlider from 'react-slider';
import './slider.css'
import SettingsContext from "./SettingsContext";
import {useContext} from "react";
import BackButton from "./BackButton";


function Settings() {
  const settingsInfo = useContext(SettingsContext);
  return(
    <div style={{textAlign:'left'}}>
      <label>FocusTime: {settingsInfo.FocusTimeMinutes}:00</label>
      <ReactSlider
        className={'slider'}
        thumbClassName={'thumb'}
        trackClassName={'track'}
        value={settingsInfo.FocusTimeMinutes}
        onChange={newValue => settingsInfo.setFocusTimeMinutes(newValue)}
        min={1}
        max={120}
      />
      <label>break: {settingsInfo.breakMinutes}:00</label>
      <ReactSlider
        className={'slider green'}
        thumbClassName={'thumb'}
        trackClassName={'track'}
        value={settingsInfo.breakMinutes}
        onChange={newValue => settingsInfo.setBreakMinutes(newValue)}
        min={1}
        max={120}
      />
      <div style={{textAlign:'center', marginTop:'20px'}}>
        <BackButton onClick={() => settingsInfo.setShowSettings(false)} />
      </div>

    </div>
  );
}

export default Settings;