import DrumButton from "./DrumButton";
import classes from './Drum.module.css';

const Drum = (props) => {
  const drumButtons = props.drumList.map((item) => (
    <DrumButton
      nowPlaying={props.nowPlaying}
      url={item.url}
      keyTrigger={item.keyTrigger}
      keyCode={item.keyCode}
      id={item.id}
    />
  ));

  return <div className={classes.drumButtons} >{drumButtons}</div>;
};

export default Drum;
