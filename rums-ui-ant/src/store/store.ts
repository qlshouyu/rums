import { configureStore } from '@reduxjs/toolkit'
import currentUserReducer from '../slices/currentUserSlice'
import requestReducer from '../slices/requestSlices'

const store:any = configureStore({
  reducer: {
    currentUser: currentUserReducer,
    request: requestReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type ReactDispatch = typeof store.dispatch
export default store