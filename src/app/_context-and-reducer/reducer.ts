/* eslint-disable no-case-declarations */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-enum-comparison */
/* eslint-disable @typescript-eslint/no-explicit-any */
// TODO: fix or update eslint rules

import { UserDataProps } from "@/utils/userDetails";

export interface State {
  userData: UserDataProps[];
  loading: boolean;
  error: string | null;
  updateUserStatus?: (userId: string, newStatus: 'Blacklisted' | 'Active') => void
  getUserData?: () => void
}

export enum ActionTypes {
  FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST",
  FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS",
  FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE",
  UPDATE_USER_STATUS = "UPDATE_USER_STATUS",
}

interface Action {
  type: string;
  payload?: any;
}

export interface UpdateUserStatusAction {
  type: ActionTypes.UPDATE_USER_STATUS;
  payload: {
    userId: string;
    newStatus: 'Blacklist' | 'Active';
  };
}

export const initialState: State = {
  userData: [],
  loading: false,
  error: null,
};
export const storeReducer = (state: State, action: Action) => {
  switch (action.type) {
    case ActionTypes.FETCH_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.FETCH_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        userData: action.payload,
      };
    case ActionTypes.FETCH_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case ActionTypes.UPDATE_USER_STATUS:
      const updatedUserData =  state.userData.map((user: UserDataProps) => {
        if (user.general.user_id === action.payload.userId) {
          return {
            ...user,
            general: {
              ...user.general,
              user_status: action.payload.newStatus,
            },
          };
        }
        return user;
      });
      localStorage.setItem('appData', JSON.stringify(updatedUserData))
      return {
        ...state,
        loading: false,
        userData: updatedUserData
        
      };
    default:
      return state;
  }
};

export default storeReducer;

