import PlayCircleIcon from '@mui/icons-material/PlayCircle';
function PlayButton(props) {
  return (
    <button {...props}>
    <PlayCircleIcon  style={{fontSize:'2.5rem'}}/>
      
    </button>
  );
}

export default PlayButton;