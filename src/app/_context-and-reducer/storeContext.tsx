"use client";
import React, { createContext, useEffect, useReducer } from "react";
import {
  initialState,
  State,
  storeReducer as reducer,
  ActionTypes,
  UpdateUserStatusAction,
} from "./reducer";
import { fetchUsersData } from "../api/api";
import { UserDataProps } from "@/utils/userDetails";

export const StoreContext = createContext<State>(initialState);

export const StoreContextProvider: React.FC<{
  children?: React.ReactNode;
}> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const getUserData = async () => {
      dispatch({ type: ActionTypes.FETCH_DATA_REQUEST });
      const data = await fetchUsersData();
   
      // fetch appData from local storage
      const storedData = localStorage.getItem("appData");
      // if no data, the fech data from fetchuserdata
      if (storedData) {
        dispatch({
          type: ActionTypes.FETCH_DATA_SUCCESS,
          payload: JSON.parse(storedData),
        });
      }
      if (!storedData) {
        Array.isArray(data) &&
          dispatch({
            type: ActionTypes.FETCH_DATA_SUCCESS,
            payload: data,
          });

        localStorage.setItem("appData", JSON.stringify(data));
      }

      // if fetched data is a string and localstorage is empty
      if (typeof data === "string" && !storedData) {
        dispatch({
          type: ActionTypes.FETCH_DATA_FAILURE,
          payload: data,
        });
      }
    };

    getUserData();
  }, []);

  const updateUserStatus = (
    userId: string,
    newStatus: "Blacklisted" | "Active"
  ) => {
    dispatch({
      type: ActionTypes.UPDATE_USER_STATUS,
      payload: {
        userId,
        newStatus,
      },
    });
  };

  const value = {
    userData: state.userData,
    error: state.error,
    loading: state.loading,
    updateUserStatus,
  };

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};
