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
            console.log('parse');
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
