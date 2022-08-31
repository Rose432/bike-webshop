import { createSlice } from "@reduxjs/toolkit";

const registeredUsers = [];
const loggedInUser = {};

const profileSlice = createSlice({
  name: "users",
  initialState: { registeredUsers, loggedInUser },
  reducers: {
    registerUser: (state, action) => {
      if (state.registeredUsers.length === 0) {
        state.registeredUsers.push(action.payload);
      } else if (state.registeredUsers.length > 0) {
        const userExists = state.registeredUsers.some(
          (user) => user.email === action.payload.email
        );
        if (userExists) {
          throw new Error("User already exists!");
        } else {
          state.registeredUsers.push(action.payload);
        }
      }
    },
    loginUser: (state, action) => {
      const validCredentials = state.registeredUsers.find(
        (curr) =>
          curr.email === action.payload.email &&
          curr.password === action.payload.password
      );

      if (!validCredentials) {
        throw new Error("Invalid credentials!");
      } else {
        state.loggedInUser = validCredentials;
      }
    },
    updateUserInfo: (state, action) => {
      let user = state.registeredUsers.find(
        (curr) => curr.email === action.payload.email
      );
      user.userInfo = action.payload;
      state.loggedInUser.userInfo = action.payload;
    },
    updateUserPassword: (state, action) => {
      let user = state.registeredUsers.find(
        (curr) => curr.email === action.payload.email
      );
      if (user.password !== action.payload.oldPassword) {
        throw new Error("Wrong password!");
      } else {
        user.password = action.payload.newPassword;
        state.loggedInUser.password = action.payload.newPassword;
      }
    },
    logoutUser: (state) => {
      state.loggedInUser = {};
    },
  },
});

export const { registerUser, loginUser, updateUserInfo, updateUserPassword } =
  profileSlice.actions;

export default profileSlice.reducer;
