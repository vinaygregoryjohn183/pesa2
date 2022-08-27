import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const BottomTabBar = (props: any) => {
  const { state, descriptors, navigation, visible } = props;

  return true ? (
    <View style={styles.navbarView}>
      {state.routes.map((route: any, index: number) => {
        const { options } = descriptors[route.key];

        let label;
        const TabIcon = options.tabBarIcon;

        if (options.tabBarLabel) {
          label = options.tabBarLabel;
        } else if (options.routeName) {
          label = options.routeName;
        } else {
          label = route.name;
        }

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key
          });
        };

        const tabBarItem = (
          <View style={{ alignItems: 'center' }} key={index}>
            <TabIcon
              focused={isFocused}
              color={'#311B92'}
              height={20}
              width={20}
            />
            <Text
              style={[
                styles.tabTextStyle,
                isFocused && styles.selectedTabTextStyle
              ]}
              numberOfLines={1}
            >
              {label}
            </Text>
          </View>
        );

        return (
          <View key={route.key} style={styles.tabStyle}>
            <TouchableOpacity
              activeOpacity={0.9}
              accessibilityRole="button"
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.tabTouchOpacity}
            >
              {tabBarItem}
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  ) : null;
};

export default BottomTabBar;

const styles = StyleSheet.create({
    navbarView: {
      flexDirection: 'row',
      width: '100%',
      alignItems: 'center',
      backgroundColor: '#ffffff',
      height: 60,
      borderTopWidth: 0.4,
      borderTopColor: 'rgba(0, 0, 0, 0.2)'
    },
    tabTextStyle: {
      fontSize: 10,
      fontWeight: '500',
      color: '#6D6D6D',
      width: 'auto',
      paddingTop: 5,
      paddingBottom: 0
    },
    selectedTabTextStyle: {
      fontSize: 12,
      color: '#6264FF',
    },
    tabStyle: {
        flex: 1,
        width: 'auto',
        justifyContent: 'center',
        flexDirection: 'row',
        paddingTop: 9
      },
      tabTouchOpacity: {
        margin: 5,
        width: 'auto',
        flex: 1
      },
});
