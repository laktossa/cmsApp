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
    const { data } = await axios.get(`${BASE_URL}/item`, {
      headers: { access_token: localStorage.getItem("access_token") },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const getItemDetails = createAsyncThunk(
  "getItemDetails",
  async (payload) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/item/${payload}`, {
        headers: { access_token: localStorage.getItem("access_token") },
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const addItem = createAsyncThunk("addItem", async (payload) => {
  try {
    await axios.post(`${BASE_URL}/item`, payload, {
      headers: { access_token: localStorage.getItem("access_token") },
    });
  } catch (error) {
    console.log(error);
  }
});

export const editItem = createAsyncThunk("editItem", async (payload) => {
  try {
    await axios.put(`${BASE_URL}/item`, payload.input, {
      headers: { access_token: localStorage.getItem("access_token") },
    });
  } catch (error) {
    console.log(error);
  }
});

export const getCategories = createAsyncThunk("getCategories", async () => {
  try {
    const { data } = await axios.get(`${BASE_URL}/category`, {
      headers: { access_token: localStorage.getItem("access_token") },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const addCategory = createAsyncThunk("addCategory", async (payload) => {
  try {
    await axios.post(`${BASE_URL}/category`, payload, {
      headers: { access_token: localStorage.getItem("access_token") },
    });
  } catch (error) {
    console.log(error);
  }
});

export const getHistories = createAsyncThunk("getHistories", async () => {
  try {
    const { data } = await axios.get(`${BASE_URL}/history`, {
      headers: { access_token: localStorage.getItem("access_token") },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
});

const dataSlice = createSlice({
  name: "data",
  initialState: {
    loading: false,
    login: false,
    failed: false,
    items: [],
    categories: [],
    histories: [],
    detail: {},
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(login.fulfilled, (state) => {
      state.login = true;
      state.loading = false;
      state.loading = false;
    });
    builder.addCase(login.rejected, (state) => {
      state.failed = true;
    });

    builder.addCase(getItems.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getItems.fulfilled, (state, action) => {
      state.items = action.payload;
    });

    builder.addCase(getItemDetails.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getItemDetails.fulfilled, (state, actions) => {
      state.detail = actions.payload;
      state.loading = false;
    });

    builder.addCase(getCategories.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getCategories, (state, action) => {
      state.categories = action.payload;
      state.loading = false;
    });

    builder.addCase(getHistories.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getHistories.fulfilled, (state, actions) => {
      state.histories = actions.payload;
      state.loading = true;
    });
  },
});

export const { actions, reducer } = dataSlice;
export default reducer;
