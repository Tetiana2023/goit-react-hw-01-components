import {Helmet} from "react-helmet";
import { Profile } from "../components/UserProfile/Profile";
import user from "../components/UserProfile/user.json";
import { Statistics } from "../components/Statistics/Statistics";
import data from "../components/Statistics/data.json";
import { FriendsList } from "../components/FriendsList/FriendsList";
import friends from "../components/FriendsList/friends.json";
import { TransactionHistory } from "../components/TransactionHistory/TransactionHistory";
import transactions from "../components/TransactionHistory/transactions.json";
import css from  "./App.module.css";
// import {Helmet} from "react-helmet";

export const App = () => {
  return (    
    <div className={css.container}>
      <Helmet>
    <meta charSet="utf-8" />
    <title>My first work</title>
    <link rel="canonical" href="http://mysite.com/example"/>
    <meta name="description" content="First work" />
</Helmet>
    <Profile
    username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}
  />
    <Statistics title="Upload stats" stats={data} /> 
    <FriendsList friends={friends} />
    <TransactionHistory items={transactions} />

    </div>
  );
};
