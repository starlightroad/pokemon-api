import styles from './input.module.css';

const Input = ({ className, ...otherProps }) => {
  const inputClass = styles.input;
  const classNames = (className && `${inputClass} ${className}`) || inputClass;

  return <input className={classNames} {...otherProps} />;
};

export default Input;
