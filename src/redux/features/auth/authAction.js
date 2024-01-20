import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../../services/api";
import { toast } from "react-toastify";

export const userLogin = createAsyncThunk(
  "auth/login",
  async ({ role, email, password }, { rejectWithValue }) => {
    try {
      //   const { data } = await API.post(
      //     `${process.env.REACT_APP_API}/api/v1/auth/login`,
      //     { role, email, password }
      //   );
      const url = `${process.env.REACT_APP_API}/api/v1/auth/login`;
      console.log("Login URL:", url);
      const { data } = await API.post(url, { role, email, password });

      //store token
      if (data.success) {
        localStorage.setItem("token", data.token);
        toast.success(data.message);
        window.location.replace("/");
      }
      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

//register
export const userRegister = createAsyncThunk(
  "auth/register",
  async (
    {
      name,
      role,
      email,
      password,
      phone,
      organisationName,
      address,
      hospitalName,
      website,
    },
    { rejectWithValue }
  ) => {
    try {
      const url = `${process.env.REACT_APP_API}/api/v1/auth/register`;
      // console.log("Login URL:", url);
      const { data } = await API.post(url, {
        name,
        role,
        email,
        password,
        phone,
        organisationName,
        address,
        hospitalName,
        website,
      });
      if (data?.success) {
        toast.success(data.message);
        window.location.replace("/login");
      }
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
//current user
export const getCurrentUser = createAsyncThunk(
  "auth/getCurrentUser",
  async ({ rejectWithValue }) => {
    try {
      const res = await API.get(
        `${process.env.REACT_APP_API}/api/v1/auth/current-user`
      );
      if (res.data) {
        return res?.data;
      }
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
