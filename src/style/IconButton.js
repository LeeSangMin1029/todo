import "semantic-ui-css/semantic.min.css";

const IconButton = (props) => {
  return (
    <button className="ui icon button" {...props}>
      {props.children}
    </button>
  );
};
export default IconButton;
