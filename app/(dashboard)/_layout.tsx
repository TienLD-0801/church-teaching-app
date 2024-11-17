import { RootStatesType } from '@/stores';
import { Redirect, Slot, Stack, useRouter } from 'expo-router';
import { Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import API from '@/services/axiosClient';
import { updateUserInfo } from '@/stores/slices/User';

const LoginLayout = () => {
  const navigation = useRouter();
  const userInfo = useSelector((state: RootStatesType) => state.userInfo);
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      const res = await API.apiLogout();
      const { status } = res.data;

      if (status === 'success') {
        dispatch(
          updateUserInfo({
            accessToken: '',
            refreshToken: '',
            userLogin: {
              id: 0,
              account: '',
              name: '',
              roleName: '',
              leaderType: '',
            },
          })
        );
        navigation.replace('/login');
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  return !userInfo.accessToken ? (
    <Redirect href="/login" />
  ) : (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'Dashboard',
          headerRight: () => (
            <Button onPress={handleLogout} title="Logout" color="#f4511e" />
          ),
        }}
      />
    </Stack>
  );
};

export default LoginLayout;
