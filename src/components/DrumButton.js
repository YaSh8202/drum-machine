import { useCallback, useEffect } from "react";
import classes from "./DrumButton.module.css";

const DrumButton = (props) => {
  const playSoundHandler = useCallback(() => {
    props.nowPlaying(props.id);
    document.getElementById(props.keyTrigger).play();
  }, [props]);

  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (e.keyCode.toString().toUpperCase() === props.keyCode.toString()) {
        playSoundHandler();
      }
    });
  }, [playSoundHandler, props.keyCode]);

  const keypressHandler = (e) => {
    if (e.keyCode.toString().toUpperCase() === props.keyCode.toString()) {
      playSoundHandler();
    }
  };

  return (
    <div
      id={props.id}
      onKeyDown={keypressHandler}
      className={`drum-pad ${classes.drumPad}`}
      onClick={playSoundHandler}
    >
      <audio className="clip" src={props.url} id={props.keyTrigger} />
      {props.keyTrigger}
    </div>
  );
};

export default DrumButton;
