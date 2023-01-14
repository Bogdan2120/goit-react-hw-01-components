import PropTypes from 'prop-types';

import style from './statistics.module.css';
import { randomColor } from 'utils';

const Statistics = ({ title, stats }) => {
  const items = stats.map(item => {
    return (
      <li
        className={style.item}
        key={item.id}
        style={{ backgroundColor: `#${randomColor()}` }}
      >
        <span className="label">{item.label}</span>
        <span className="percentage">{item.percentage}%</span>
      </li>
    );
  });

  return (
    <section className={style.statisticsSection}>
      <div className={style.statistics}>
        {title && <h2 className={style.title}>{title}</h2>}
        <ul className={style.statList}>{items}</ul>
      </div>
    </section>
  );
};

export default Statistics;

Statistics.defaulteProps = {
  stats: [],
};

Statistics.propsTyps = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      lable: PropTypes.string.isRequired,
      percentage: PropTypes.string.isRequired,
    })
  ),
};
