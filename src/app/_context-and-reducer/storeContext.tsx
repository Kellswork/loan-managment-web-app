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
    
      Array.isArray(data) &&
        dispatch({
          type: ActionTypes.FETCH_DATA_SUCCESS,
          payload: data,
        });

      typeof data === "string" &&
        dispatch({
          type: ActionTypes.FETCH_DATA_FAILURE,
          payload: data,
        });
    };
    getUserData();
  }, []);

  const updateUserStatus = (userId: string, newStatus: 'Blacklisted' | 'Active') => {
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
    updateUserStatus
  };
  console.log("s", state.error);

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};
