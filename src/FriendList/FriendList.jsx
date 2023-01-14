import PropType from 'prop-types';
import style from './friendList.module.css';

const FriendList = ({ friends }) => {
  const items = friends.map(item => {
    return (
      <li key={item.id} className={style.item}>
        <span
          className={`${style.status} ${item.isOnline && style.isOnline}`}
        ></span>
        <img
          className={style.avatar}
          src={item.avatar}
          alt="User avatar"
          width="48"
        />
        <p className={style.name}>{item.name}</p>
      </li>
    );
  });

  return (
    <section className={style.frindSection}>
      <ul className={style.friendList}>{items}</ul>
    </section>
  );
};

export default FriendList;

FriendList.defaultProps = {
  friends: [],
};

FriendList.propTypes = {
  friends: PropType.arrayOf(
    PropType.shape({
      avatar: PropType.string.isRequired,
      name: PropType.string.isRequired,
      isOnline: PropType.bool.isRequired,
      id: PropType.number.isRequired,
    })
  ),
};
