import { IDataLoginResponse } from '@/shared/types/auth';
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

const updateUserInfo: CaseReducer<
  IDataLoginResponse,
  PayloadAction<IDataLoginResponse>
> = (state, action) => ({ ...state, ...action.payload });

export default {
  updateUserInfo,
};
