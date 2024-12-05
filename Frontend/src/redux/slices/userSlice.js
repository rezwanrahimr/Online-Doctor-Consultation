import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        userInfo: null,
        token: null,
        isAuthenticated: false,
    },
    reducers: {
        login: (state, action) => {
            state.userInfo = action.payload.user;
            state.token = action.payload.access_token;
            state.isAuthenticated = true;
        },
        logout: (state) => {
            state.userInfo = null;
            state.token = null;
            state.isAuthenticated = false;
        }
    }
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;