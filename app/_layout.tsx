import { store } from '@/stores';
import { SplashScreen, Stack } from 'expo-router';
import { Provider } from 'react-redux';

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
