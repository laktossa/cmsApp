import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "URL";

export const login = createAsyncThunk("login", async (payload) => {
  try {
    const { data } = await axios.post(`${BASE_URL}/login`, payload);
    localStorage.setItem("access_token", data.access_token);
  } catch (error) {
    console.log(error);
  }
});

export const getItems = createAsyncThunk("getItems", async () => {
  try {
    const { data } = await axios.get(`${BASE_URL}/item`);
    return data;
  } catch (error) {
    console.log(error);
  }
});

const dataSlice = createSlice({
  name: "data",
  initialState: {
    loading: false,
    items: [],
    categories: [],
    histories: [],
    detail: {},
  },
});

export const { actions, reducer } = dataSlice;
export default reducer;
