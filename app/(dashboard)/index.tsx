import { RootStatesType } from '@/stores';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

const HomeScreen = () => {
  const userInfo = useSelector((state: RootStatesType) => state.userInfo);

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>Home Screen</Text>
        {userInfo.userLogin ? (
          <Text style={styles.title}>Role: {userInfo.userLogin.roleName}</Text>
        ) : (
          <Text style={styles.title}>Loading role...</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
