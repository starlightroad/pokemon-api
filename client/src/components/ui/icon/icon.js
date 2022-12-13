import styles from './icon.module.css';
import spriteIcons from 'assets/sprite.svg';
import MenuIcon from './menu-icon';

const Icon = ({ className, icon, ...otherProps }) => {
  const iconClass = styles.icon;
  const selectedIcon = `${spriteIcons}#${icon}`;

  if (icon === 'menu') return <MenuIcon className={className} {...otherProps} />;

  return (
    <span className={className} {...otherProps}>
      <svg className={iconClass}>
        <use href={selectedIcon}></use>
      </svg>
    </span>
  );
};

export default Icon;
