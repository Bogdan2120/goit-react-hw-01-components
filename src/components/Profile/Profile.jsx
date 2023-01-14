import PropTypes from 'prop-types';
import style from './profole.module.css';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <section className={style.profileSection}>
      <div className={style.profile}>
        <div className={style.description}>
          <img src={avatar} alt={username} className={style.avatar} />
          <p className={style.name}>{username}</p>
          <p className={style.tag}>{tag}</p>
          <p className={style.location}>{location}</p>
        </div>

        <ul className={style.stats}>
          <li className={style.stat}>
            <span className={style.lable}>Followers</span>
            <span className={style.quantity}>{stats.followers}</span>
          </li>
          <li className={style.stat}>
            <span className={style.lable}>Views</span>
            <span className={style.quantity}>{stats.views}</span>
          </li>
          <li className={style.stat}>
            <span className={style.lable}>Likes</span>
            <span className={style.quantity}>{stats.likes}</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Profile;

Profile.defaultProps = {
  avatar: 'https://cdn-icons-png.flaticon.com/512/2922/2922506.png',
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
