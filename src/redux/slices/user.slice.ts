import {createSlice} from '@reduxjs/toolkit';

export interface UserState {
  id: number;
  fullName: string;
  email: string;
  isLogin: boolean;
}

const initialState: UserState = {
  id: 0,
  fullName: '',
  email: '',
  isLogin: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    actionUpdateUser(state, action) {
      return (state = {
        ...state,
        isLogin: true,
        ...action.payload,
      });
    },
    actionLogout() {
      return initialState;
    },
  },
});

export const {actionUpdateUser, actionLogout} = userSlice.actions;
export default userSlice.reducer;