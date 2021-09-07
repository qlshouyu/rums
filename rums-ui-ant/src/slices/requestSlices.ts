import { createSlice } from '@reduxjs/toolkit'

export const requestSlice = createSlice({
  name: 'requestSlice',
  initialState: {
    isLoading:false
  },
  reducers: {
    loading: (state:any) => {
      console.log('请求中……')
      state.isLoading=true
    },
    unloading: (state:any)=> {
      console.log('请求完成')
      state.isLoading=false
    }
  },
})

// Action creators are generated for each case reducer function
console.log('request actions:',requestSlice.actions)
export const { loading,unloading} = requestSlice.actions

export default requestSlice.reducer