import styles from './typography.module.css';

const Typography = ({ children, variant, className }) => {
  const classNames = `${styles.font} ${className}`;

  if (variant === 'h1') return <h1 className={classNames}>{children}</h1>;
  if (variant === 'h2') return <h2 className={classNames}>{children}</h2>;
  if (variant === 'h3') return <h3 className={classNames}>{children}</h3>;
  if (variant === 'p') return <p className={classNames}>{children}</p>;
};

export default Typography;
