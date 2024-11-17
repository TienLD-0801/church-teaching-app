import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { useRouter } from 'expo-router';
import API from '@/services/axiosClient';
import { AxiosError } from 'axios';
import { ILoginError, IParamsLogin } from '@/shared/types/auth';
import { useDispatch } from 'react-redux';
import { updateUserInfo } from '@/stores/slices/User';

const LoginScreen = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [paramsLogin, setParamsLogin] = useState<IParamsLogin>({
    account: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleLogin = async () => {
    setIsLoading(true);
    setErrorMessage('');
    try {
      const res = await API.apiLogin(paramsLogin);
      const { data } = res.data;

      if (data && data.accessToken) {
        dispatch(
          updateUserInfo({
            accessToken: data.accessToken,
            refreshToken: data.refreshToken,
            userLogin: data.userLogin,
          })
        );

        router.replace('/');
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        const err: ILoginError = error.response?.data;
        setErrorMessage(err.error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={paramsLogin.account}
        onChangeText={(text) =>
          setParamsLogin({ ...paramsLogin, account: text })
        }
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={paramsLogin.password}
        onChangeText={(text) =>
          setParamsLogin({ ...paramsLogin, password: text })
        }
        secureTextEntry
      />
      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <Button title="Login" onPress={handleLogin} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default LoginScreen;
