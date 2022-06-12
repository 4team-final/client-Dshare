//UserReducer.js
import { reducerUtils, handleAsyncActions } from "../../api/AsyncUtil";
import {
  SIGNUPFORM_INSERT,
  USERINFORMATION_GET,
  USERINFORMATION_GET_SUCCESS,
  USERINFORMATION_GET_ERROR,
  USERMATERIAL_GET,
  USERMATERIAL_GET_SUCCESS,
  USERMATERIAL_GET_ERROR,
  REFRIGERATOR_GET,
  REFRIGERATOR_GET_SUCCESS,
  REFRIGERATOR_GET_ERROR,
  BOARD_RANK_CHECK,
  BOARD_RANK_CHECK_SUCCESS,
  BOARD_RANK_CHECK_ERROR,
  VOTE_BOARD_RANK,
  VOTE_BOARD_RANK_SUCCESS,
  VOTE_BOARD_RANK_ERROR,
  DID_VOTE_CHECK,
  DID_VOTE_CHECK_SUCCESS,
  DID_VOTE_CHECK_ERROR,
} from "../actions/UserAction";

const initialState = {
  userInformation: reducerUtils.initial(),
  userMaterialList: reducerUtils.initial(),
  userRefrigeratorList: reducerUtils.initial(),
  voteBoardRankList: reducerUtils.initial(),
  voteboardrank: reducerUtils.initial(),
  didvotecheck: reducerUtils.initial(),
};
export default function UserReducer(state = initialState, action) {
  switch (action.type) {
    case SIGNUPFORM_INSERT:
      return state;
    case USERINFORMATION_GET:
    case USERINFORMATION_GET_SUCCESS:
    case USERINFORMATION_GET_ERROR:
      return handleAsyncActions(USERINFORMATION_GET, "userInformation")(
        state,
        action
      );
    case USERMATERIAL_GET:
    case USERMATERIAL_GET_SUCCESS:
    case USERMATERIAL_GET_ERROR:
      return handleAsyncActions(USERMATERIAL_GET, "userMaterialList")(
        state,
        action
      );
    case REFRIGERATOR_GET:
    case REFRIGERATOR_GET_SUCCESS:
    case REFRIGERATOR_GET_ERROR:
      return handleAsyncActions(REFRIGERATOR_GET, "userRefrigeratorList")(
        state,
        action
      );
    case BOARD_RANK_CHECK:
    case BOARD_RANK_CHECK_SUCCESS:
    case BOARD_RANK_CHECK_ERROR:
      return handleAsyncActions(BOARD_RANK_CHECK, "voteBoardRankList")(
        state,
        action
      );
    case VOTE_BOARD_RANK:
    case VOTE_BOARD_RANK_SUCCESS:
    case VOTE_BOARD_RANK_ERROR:
      return handleAsyncActions(VOTE_BOARD_RANK, "voteboardrank")(
        state,
        action
      );
    case DID_VOTE_CHECK:
    case DID_VOTE_CHECK_SUCCESS:
    case DID_VOTE_CHECK_ERROR:
      return handleAsyncActions(DID_VOTE_CHECK, "didvotecheck")(state, action);
    default:
      return state;
  }
}
