import "./Button.css";

const Button = ({ id, className, value, onClick }) => {
  return (
    <button id={id} className={className} onClick={onClick}>
      {value}
    </button>
  );
};

export default Button;
