import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'
//import type { PayloadAction } from '@reduxjs/toolkit'

export interface AuthState {
  profile: string
  email: string
}

const initialState: AuthState = {
  profile : 'John Doe',
  email : 'aom@gmail.com',
}

export const authSlice = createSlice({
  name: 'auth',
  initialState : initialState,
  reducers: {
    updateProfileAction: (state) => {
      state.profile = 'Ploy Eiei';
      state.email = 'ploy@gmail.com'
    }
  },
})

// Action creators are generated for each case reducer function
export const { updateProfileAction } = authSlice.actions

export const selectAuthState = (state: RootState) => state.authState

export default authSlice.reducer

