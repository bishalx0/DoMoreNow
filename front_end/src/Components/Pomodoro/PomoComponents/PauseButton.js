import PauseCircleIcon from '@mui/icons-material/PauseCircle';

function PauseButton(props) {
  return (
    <button {...props}>
    <PauseCircleIcon  style={{fontSize:'2.5rem'}}/>
      
    </button>
  );
}

export default PauseButton;