/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {StyleSheet, useColorScheme} from 'react-native';
import SmsAndroid from 'react-native-get-sms-android';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import RootNavigation from '../navigation/rootNavigation';

const App = () => {
  const createTransaction = async () => {
    console.log('fetching.....');
    const transaction = await fetch(
      'https://211b-103-142-31-94.in.ngrok.io/api/v1/transaction',
      {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          title: 'Swiggie',
          userShares: [
            {
              userId: 'd89e855f-11a9-454e-ac83-51b28cb820be',
              amount: 0,
            },
          ],
          milestoneId: '037bcbb5-0015-4c62-a205-29013b74c006',
          amount: 0,
          shareType: 'EQUALLY',
          paidBy: 'd89e855f-11a9-454e-ac83-51b28cb820be',
          category: 'CLOTHES',
        }),
      },
    );
    return transaction.json();
  };
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  let msgIds = new Set();
  var filter = {
    box: 'inbox',
    bodyRegex: '(.*)debited(.*)', // content regex to match
    // indexFrom: 0, // start from index 0
    maxCount: 1, // count of SMS to return each time
  };

  setInterval(
    () =>
      SmsAndroid.list(
        JSON.stringify(filter),
        fail => {
          console.log('Failed with this error: ' + fail);
        },
        (count, smsList) => {
          var arr = JSON.parse(smsList);
          if (!msgIds.has(arr[0]._id)) {
            msgIds.add(arr[0]._id);
            createTransaction();
            console.log(msgIds);
          }
        },
      ),
    2000,
  );

  return <RootNavigation />;
};

const styles = StyleSheet.create({});

export default App;
