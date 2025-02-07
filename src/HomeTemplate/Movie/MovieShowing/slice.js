import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchShowingMovieList = createAsyncThunk("fetchShowingMovieList", async ()=> {
    try{
const result = await axios({
    url: "",
    method: "",
    headers: {
        
    }
})
    }catch(error){
        return error
    }
})