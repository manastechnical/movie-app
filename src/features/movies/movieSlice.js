import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi";
import {APIKEY} from "../../common/apis/MovieApiKey";

export const fetchAsyncMovies = createAsyncThunk('movies/fetchMovies',async(term)=>{
    const response = await movieApi.get(`?apiKey=${APIKEY}&s=${term}&type=movie`);
    return response.data;
})

export const fetchAsyncShows = createAsyncThunk('movies/fetchShows',async(term)=>{
    const response = await movieApi.get(`?apiKey=${APIKEY}&s=${term}&type=series`);
    return response.data;
})

export const fetchAsyncMovieOrShowDetail = createAsyncThunk('movies/fetchAsyncMovieOrShowDetail',async(id)=>{
    const response = await movieApi.get(`?apiKey=${APIKEY}&i=${id}&Plot=full`);
    return response.data;
})

const initialState = {
    movies:{},
    shows:{},
    selectMovieOrShow:{}
};

const movieSlice = createSlice({
    name:'movies',
    initialState,
    reducers:{
        removeSelectedMoiveOrShow: (state) => {
            state.selectMovieOrShow = {};
        }

    },
    extraReducers:{
        [fetchAsyncMovies.pending]:()=>{
            console.log("Pending");
        },
        [fetchAsyncMovies.fulfilled]:(state,{payload})=>{
            console.log("Fetched Successfully");
            return {...state,movies:payload};
        },
        [fetchAsyncMovies.rejected]:()=>{
            console.log("Rejected");
        },
        [fetchAsyncShows.fulfilled]:(state,{payload})=>{
            console.log("Fetched Successfully");
            return {...state,shows:payload};
        },
        [fetchAsyncMovieOrShowDetail.fulfilled]:(state,{payload})=>{
            console.log("Fetched Successfully");
            return {...state,selectMovieOrShow:payload};
        },

    }
})

export const {removeSelectedMoiveOrShow} = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovieOrShow = (state) => state.movies.selectMovieOrShow;
export default movieSlice.reducer;