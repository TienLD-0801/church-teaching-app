import { store } from '@/stores';
import { Stack, useRouter } from 'expo-router';
import { Button } from 'react-native';
import { Provider, useDispatch } from 'react-redux';

export default function Layout() {
  return (
    <Provider store={store}>
      <Stack
        initialRouteName="(auth)"
        screenOptions={{
          headerShown: false,
        }}
      />
    </Provider>
  );
}
