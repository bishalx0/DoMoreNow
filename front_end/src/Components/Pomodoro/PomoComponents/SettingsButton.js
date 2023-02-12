
import SettingsIcon from '@mui/icons-material/Settings';
function SettingsButton(props) {
  return (
    <button {...props} className={'with-text'}>
    <SettingsIcon  style={{fontSize:'2.5rem'}}/>
      Settings
    </button>
  );
}

export default SettingsButton;