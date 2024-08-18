import { createSlice } from "@reduxjs/toolkit";

const ApplicationSlice = createSlice({
    name:'application',
    initialState:{
        applicants:null,
    },
    reducers:{
        setAllApplicants:(state,action) => {
            state.applicants = action.payload;
        }
    }
});
export const {setAllApplicants} = ApplicationSlice.actions;
export default ApplicationSlice.reducer;