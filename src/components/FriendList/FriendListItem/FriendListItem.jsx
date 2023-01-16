import PropType from 'prop-types';

import style from './friendListItem.module.css';

const FriendListItem = ({ isOnline, avatar, name }) => {
  return (
    <>
      <li className={style.item}>
        <span
          className={`${style.status} ${isOnline && style.isOnline}`}
        ></span>
        <img
          className={style.avatar}
          src={avatar}
          alt="User avatar"
          width="48"
        />
        <p className={style.name}>{name}</p>
      </li>
    </>
  );
};

export default FriendListItem;

FriendListItem.propTypes = {
  avatar: PropType.string.isRequired,
  name: PropType.string.isRequired,
  isOnline: PropType.bool.isRequired,
};
