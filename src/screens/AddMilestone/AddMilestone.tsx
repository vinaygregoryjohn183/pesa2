import React, { useEffect, useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { RadioButton } from 'react-native-radio-buttons-group';

import styles from './styles';

enum MilestonePeriods {
    Weekly = 'Weekly',
    Monthly = 'Monthly'
}

const AddMilestone = () => {
    const [budget, setBudget] = useState('');
    const [period, setPeriod] = useState<MilestonePeriods>(MilestonePeriods.Weekly);

    return (
    <View>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        colors={['rgba(255, 255, 255, 0)', '#8082EA']}
        style={styles.container}
      >
        <View style={styles.innerContainer}>
          <Text style={styles.label}>Period</Text>
          <RadioButton id={MilestonePeriods.Weekly} color="#6264FF" label="Weekly" size={15} containerStyle={{ marginLeft: 0, marginTop: 12 }} labelStyle={styles.radioLabel} onPress={() => setPeriod(MilestonePeriods.Weekly)} selected={period === MilestonePeriods.Weekly} />
          <RadioButton id={MilestonePeriods.Monthly} color="#6264FF" label="Monthly" size={15} containerStyle={{ marginLeft: 0, marginBottom: 30 }} labelStyle={styles.radioLabel} onPress={() => setPeriod(MilestonePeriods.Monthly)} selected={period === MilestonePeriods.Monthly} />

          <Text style={styles.label}>Maximum Spend limit</Text>
          <TextInput placeholder="Enter your budget" selectionColor="#3F60A6" value={budget}  onChange={(e) => setBudget(e.nativeEvent.text)} style={{ borderBottomColor: '#2B4985', borderBottomWidth: 1, width: '40%', padding: 0 }} />
          <View style={{ width: '30%', marginBottom: 20, marginTop: 75 }}>
            <Button disabled title="Save" color="#6264FF" />
          </View>
        </View>
      </LinearGradient>
    </View>
    );
};

export default AddMilestone;
