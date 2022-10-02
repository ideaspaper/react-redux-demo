const Button = ({ children, onClickHandler }) => {
  return <button onClick={onClickHandler}>{children}</button>;
};

export default Button;
