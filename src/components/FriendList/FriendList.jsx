import PropType from 'prop-types';
import style from './friendList.module.css';
import FriendListItem from './FriendListItem/FriendListItem';

const FriendList = ({ friends }) => {
  const items = friends.map(item => {
    return <FriendListItem key={item.id} {...item} />;
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
      id: PropType.number.isRequired,
    })
  ),
};
