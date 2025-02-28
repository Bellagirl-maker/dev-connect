import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Job{
    id: string;
    title: string;
    company: string;
    location: string;
    description: string;
    salary: string;
}

interface JobState {
    jobs: Job[];
}

const initialState: JobState = {
    jobs: [],
};

const jobSlice = createSlice({
    name: "jobs",
    initialState,
    reducers: {
        addJob: (state, action: PayloadAction<Job>) => {
            state.jobs.push(action.payload);
        },

        removeJob: (state, action: PayloadAction<string>) => {
            state.jobs.filter((job) => job.id !== action.payload);
        },


    },
});

export const { addJob, removeJob } = jobSlice.actions;
export default jobSlice.reducer;


