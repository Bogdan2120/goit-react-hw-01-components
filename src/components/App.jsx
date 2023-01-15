import userData from 'Data/user.json';
import statsData from 'Data/data.json';
import friendsData from 'Data/friends.json';
import transactionData from 'Data/transactions.json';

import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from 'FriendList/FriendList';
import TransactionHistory from 'TransactionHistory/TransactionHistory';

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
