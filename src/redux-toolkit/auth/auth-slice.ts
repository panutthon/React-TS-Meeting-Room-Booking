import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'
//import type { PayloadAction } from '@reduxjs/toolkit'

export interface AuthState {
  profile: string
  email: string
}

const initialState: AuthState = {
  profile : 'John Doe Example',
  email : 'aom@gmail.com Example',
}

export const authSlice = createSlice({
  name: 'auth',
  initialState : initialState,
  reducers: {
    updateProfileAction: (state) => {
      state.profile = 'Ploy Eiei Example';
      state.email = 'ploy@gmail.com Example'
    }
  },
})

// Action creators are generated for each case reducer function
export const { updateProfileAction } = authSlice.actions

export const selectAuthState = (state: RootState) => state.authState

export default authSlice.reducer

