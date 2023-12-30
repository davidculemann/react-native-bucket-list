import { AntDesign } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors } from '@theme';
import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { HomeStackNavigator, ProfileStackNavigator } from '../stack/Stack';
import { TabBarStatus, TabParamList } from './Tab.typeDefs';

const Tab = createBottomTabNavigator<TabParamList>();

const renderTabBarIcon = (tabName: keyof TabParamList) => (tabStatus: TabBarStatus) => {
  switch (tabName) {
    case 'HomeTab':
      return <AntDesign name="home" size={24} color={tabStatus.color} />;
    case 'ProfileTab':
      return <AntDesign name="profile" size={24} color={tabStatus.color} />;
    // add more...
  }
};

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: renderTabBarIcon(route.name),
        headerShown: false,
        tabBarInactiveTintColor: colors.gray,
        tabBarInactiveBackgroundColor: colors.white,
        tabBarActiveTintColor: colors.lightPurple,
        tabBarActiveBackgroundColor: colors.white,
      })}>
      <Tab.Screen name="HomeTab" component={HomeStackNavigator} options={{ title: 'Home' }} />
      <Tab.Screen
        name="Create"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: () => {
            return <AddItemButton />;
          },
          presentation: 'modal',
        }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={ProfileStackNavigator}
        options={{ title: 'Profile' }}
      />
    </Tab.Navigator>
  );
}

const AddItemButton = () => {
  return (
    <TouchableOpacity style={styles.addItemButton}>
      <Image source={require('@assets/images/plus.png')} style={styles.plusImage} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  addItemButton: {
    top: -20,
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: colors.lightPurple,
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusImage: {
    width: 30,
    height: 30,
  },
});
