import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';

const Milestone = () => {
  const [currentMilestone, setCurrentmilestone] = useState<any>({});
  const [amountAchieved, setAmountAchieved] = useState();

  const getMilestones = async () => {
    console.log('fetching.....');
    const currMile = await fetch('https://211b-103-142-31-94.in.ngrok.io/api/v1/milestone/current-milestone/d89e855f-11a9-454e-ac83-51b28cb820be', { method: 'GET' });
    return currMile.json();
  };

  const getUserSummary = async () => {
    console.log('fetching.....');
    const userSummary = await fetch('https://211b-103-142-31-94.in.ngrok.io/api/v1/user/summary?userId=d89e855f-11a9-454e-ac83-51b28cb820be&milestoneId=037bcbb5-0015-4c62-a205-29013b74c006', { method: 'GET' });
    return userSummary.json();
  };

  useEffect(() => {
      getMilestones().then(data => {
        setCurrentmilestone({
          type: data.type,
          amount: data.amount
        });
      });
      getUserSummary().then(data => {
        setAmountAchieved(data.totalSpend);
      });
  }, []);

    return (
    <View>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        colors={['rgba(255, 255, 255, 0)', '#8082EA']}
        style={styles.container}
      >
        <Text style={styles.title}>Milestone</Text>
        <View style={{ backgroundColor: 'white', borderRadius: 10, paddingVertical: 16, paddingHorizontal: 19}}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.title2}>{currentMilestone.type}</Text>
            <View style={{ flexDirection: 'row' }}>
              {/* <View>
                <Text style={{ fontSize: 10, color: '#535353', fontWeight: '400' }}>Start Date</Text>
                <Text style={{ fontSize: 12, color: '#1B1B1B', fontWeight: '500' }}>1/8/2022</Text>
              </View>
              <View style={{ marginLeft: 10 }}>
                <Text style={{ fontSize: 10, color: '#535353', fontWeight: '400' }}>End Date</Text>
                <Text style={{ fontSize: 12, color: '#1B1B1B', fontWeight: '500' }}>19/8/2022</Text>
              </View> */}
            </View>
          </View>
          <Text style={{ fontSize: 11, color: '#535353', marginTop: 13, marginBottom: 5, fontWeight: '500' }}>Target</Text>
            <Text style={{ fontSize: 15, color: '#6264FF', marginBottom: 14, fontWeight: '700' }}>{currentMilestone.amount}</Text>
            <Text style={{ fontSize: 11, color: '#535353', marginTop: 13, marginBottom: 5, fontWeight: '500' }}>Achieved</Text>
            <Text style={{ fontSize: 15, color: '#6264FF', marginBottom: 14, fontWeight: '700' }}>{amountAchieved}</Text>
        </View>
      </LinearGradient>
    </View>
    );
};

export default Milestone;
