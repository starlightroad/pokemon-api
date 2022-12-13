import styles from './button.module.css';

const Button = ({ children, className, ...otherProps }) => {
  const classNames = (className && `${styles.button} ${className}`) || styles.button;

  return (
    <button className={classNames} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
