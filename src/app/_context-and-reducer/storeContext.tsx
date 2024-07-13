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
      const storedDataString = localStorage.getItem("appData") as string;
      // if no data, the fech data from fetchuserdata

      const storedDataParsed = JSON.parse(storedDataString);

      if (Array.isArray(storedDataParsed) && storedDataParsed.length > 0) {
        // const storedDataParsed
        dispatch({
          type: ActionTypes.FETCH_DATA_SUCCESS,
          payload: storedDataParsed,
        });
        console.log("fetched from local storage");
      } else if (Array.isArray(data)) {
        dispatch({
          type: ActionTypes.FETCH_DATA_SUCCESS,
          payload: data,
        });
        console.log("fetched from api");
        localStorage.setItem("appData", JSON.stringify(data));
      }

      // if fetched data is a string and localstorage is empty
      else if (typeof data === "string") {
        dispatch({
          type: ActionTypes.FETCH_DATA_FAILURE,
          payload: data,
        });
        console.log("no fetched data");
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
    console.log(userId, newStatus, "updated");
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
