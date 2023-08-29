import { userActions } from "../actions";

const initState = {
  listUsers: [],
  totalUser: 0,
  profile: {}
};

const UserReducer = (state = initState, action) => {
  switch (action.type) {
    case userActions.GET_LIST_USER:
      return {
        ...state,
        loading: true,
      };
    case userActions.GET_LIST_USER_SUCCESS:
      return {
        ...state,
        listUsers: action?.payload?.results,
        totalUser: action?.payload?.total,
        loading: false,
      };
    case userActions.GET_ME_SUCCESS:
      return {
        ...state,
        profile: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default UserReducer;
