import PropType from 'prop-types';

import style from './transactionHistory.module.css';

const TransactionHistory = ({ transaction }) => {
  const elements = transaction.map(elem => {
    return (
      <tr key={elem.id}>
        <td>{elem.type}</td>
        <td>{elem.amount}</td>
        <td>{elem.currency}</td>
      </tr>
    );
  });

  return (
    <section className={style.transactionSection}>
      <table className={style.transactionHistory}>
        <thead className={style.transactionHeader}>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>{elements}</tbody>
      </table>
    </section>
  );
};

export default TransactionHistory;

TransactionHistory.defaulteProps = {
  transaction: [],
};

TransactionHistory.propTypes = {
  transaction: PropType.arrayOf(
    PropType.shape({
      id: PropType.string.isRequired,
      type: PropType.string.isRequired,
      amount: PropType.string.isRequired,
      currency: PropType.string.isRequired,
    })
  ),
};
