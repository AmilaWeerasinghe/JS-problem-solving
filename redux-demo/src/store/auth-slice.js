import {createSlice} from '@reduxjs/toolkit';

const initialAuthState = {
    isAuthenticated: false
}

const authSlicer = createSlice({
    name: 'Authentication',
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state) {
            state.isAuthenticated = false
        }
    }
})

export const authAction = authSlicer.actions;

export default authSlicer.reducer;