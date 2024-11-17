import { RootStatesType } from '@/stores';
import { Redirect, Slot } from 'expo-router';
import { useSelector } from 'react-redux';

const LoginLayout = () => {
  const userInfo = useSelector((state: RootStatesType) => state.userInfo);
  return userInfo.accessToken ? <Redirect href="/(dashboard)" /> : <Slot />;
};

export default LoginLayout;
