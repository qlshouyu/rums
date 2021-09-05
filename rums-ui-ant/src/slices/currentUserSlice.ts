import { createSlice } from '@reduxjs/toolkit'

export const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState: {
    currentUser:{}
  },
  reducers: {
    loginAction: (state:any,data:any) => {
      state.currentUser=data.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { loginAction } = currentUserSlice.actions

export default currentUserSlice.reducer