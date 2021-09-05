import { createSlice } from '@reduxjs/toolkit'

export const requestSlice = createSlice({
  name: 'requestSlice',
  initialState: {
    isLoading:false
  },
  reducers: {
    loading: (state:any) => {
      state.isLoading=true
    },
    unloading: (state:any)=> {
      state.isLoading=false
    }
  },
})

// Action creators are generated for each case reducer function
export const { loading,unloading} = requestSlice.actions

export default requestSlice.reducer