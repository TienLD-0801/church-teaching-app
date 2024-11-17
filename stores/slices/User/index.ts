import { createSlice } from '@reduxjs/toolkit';
import reducers from '@/stores/slices/User/reducer';
import { IDataLoginResponse } from '@/shared/types/auth';

const initState: IDataLoginResponse = {
  accessToken: '',
  refreshToken: '',
  userLogin: {
    id: 0,
    account: '',
    name: '',
    roleName: '',
    leaderType: '',
  },
};

export const userSlice = createSlice({
  name: 'language',
  initialState: initState,
  reducers: reducers,
});

export const { updateUserInfo } = userSlice.actions;

export default userSlice.reducer;
