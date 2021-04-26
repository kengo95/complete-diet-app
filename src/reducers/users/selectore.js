import {createSelector} from "reselect";

const userSelector=(state)=>state.users;

export const getUserId =createSelector(
  [userSelector],
  state =>state.uid
)
export const getUserIsSignedIn =createSelector(
  [userSelector],
  state =>state.isSignIn
)
export const getUserName =createSelector(
  [userSelector],
  state =>state.username
)
export const getUserFoodList =createSelector(
  [userSelector],
  state =>state.list
)