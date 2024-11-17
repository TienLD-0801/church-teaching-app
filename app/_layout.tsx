import { store } from '@/stores';
import { SplashScreen, Stack } from 'expo-router';
import { Provider } from 'react-redux';

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  return (
    <Provider store={store}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </Provider>
  );
}
