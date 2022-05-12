import classes from './Display.module.css';

const Display = (props)=>{
  
  return <div className={classes.display}  > 
      <h2 id="display" >{props.drumName}</h2>
  </div>
};

export default Display;