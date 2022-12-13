import styles from './menu-icon.module.css';

const MenuIcon = ({ className, ...otherProps }) => {
  const menuClass = styles.menuIcon;
  const menuContainerClass = styles.menuIconContainer;
  const classNames = (className && `${menuContainerClass} ${className}`) || menuContainerClass;

  return (
    <div className={classNames} {...otherProps}>
      <div className={menuClass}></div>
    </div>
  );
};

export default MenuIcon;
