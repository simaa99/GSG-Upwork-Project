import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "@/api/API";

export const dataSlicer = createSlice({
    name: "data",
    initialState: {
        job: {},
        jobs: [],
        profileData: {},
        isLoading: false,
        error: {}
    },
    reducers: {
        getJob: (state, action) => {
            state.job = action.payload
        },
        getAllJobs: (state, action) => {
            state.jobs = action.payload
        },
        isLoading: (state, action) => {
            state.isLoading = action.payload
        },
        setError: (state, action) => {
            state.error = { message: action.payload }
        }
    }
})

const { getJob, getAllJobs, isLoading, setError, } = dataSlicer.actions

export const getJobAPI = (id) => async (dispatch) => {
    dispatch(isLoading(true));
    try {
      const { data } = await axios.get(`${API_URL}jobs/${id}`);
      dispatch(getJob(data)); 
    } catch (error) {
      dispatch(setError("Something went wrong")); 
    } finally {
      dispatch(isLoading(false));
    }
  };
  

export const searchJobsAPI = (keyWord) => async (dispatch) => {
    dispatch(isLoading(true));
    try {
      let { data } = await axios.get(`${API_URL}jobs`);
      if (keyWord) {
        data = data.filter((job) =>
          job.freelancerReq.wantedSkills.some((skill) => keyWord === skill)
        );
      }
      dispatch(getAllJobs(data)); 
    } catch (error) {
      dispatch(setError("Something went wrong")); 
    } finally {
      dispatch(isLoading(false));
    }
  };
  


export const getAllJobsAPI = () => async (dispatch) => {
    dispatch(isLoading(true))
    try {
        let { data } = await axios.get(`${API_URL}jobs`)
        dispatch(getAllJobs(data))
    } catch (error) {
        setError("Somthing went wrong")
    } finally {
        dispatch(isLoading(false))
    }
}

export const getFilteredJobsAPI = (filter) => async (dispatch) => {
    dispatch(isLoading(true))
    try {
        let { data } = await axios.get(`${API_URL}jobs`)
        // let newData = []

        // filter.map((F) => {
        //     if (F.title) {
        //         newData = data.filter((job) =>
        //             (job.task.title))
        //     }
        // })

        dispatch(getAllJobs(data))
    } catch (error) {
        setError("Somthing went wrong")
    } finally {
        dispatch(isLoading(false))
    }
}


export default dataSlicer.reducer