import userData from 'data/user.json';
import statsData from 'data/data.json';
import friendsData from 'data/friends.json';
import transactionData from 'data/transactions.json';

import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />

      <Statistics title="Upload stats" stats={statsData} />

      <FriendList friends={friendsData} />

      <TransactionHistory transaction={transactionData} />
    </div>
  );
};
