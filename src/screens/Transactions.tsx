import React from 'react';
import {View} from 'react-native';
import Data from '../Data.json';
import {TransactionInfo} from '../components/TransactionInfo';

const Transactions = () => {
  const {transactions} = Data;
  return (
    <View>
      {transactions.map((data, index) => {
        return (
          <TransactionInfo
            key={index}
            type={data.type}
            amount={data.amount}
            account={data.account}
            fromAccount={data.fromAccount}
            toAccount={data.toAccount}
          />
        );
      })}
    </View>
  );
};

export default Transactions;
