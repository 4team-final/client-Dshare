//BoardAction.js
import * as BoardApi from "../../api/BoardApi";
import { createPromiseThunk } from "../../api/AsyncUtil";

//액션 타입

//게시물 전체 목록 첫번째 목록 조회
export const BOARDLIST_GET = "BOARDLIST_GET";
export const BOARDLIST_GET_SUCCESS = "BOARDLIST_GET_SUCCESS";
export const BOARDLIST_GET_ERROR = "BOARDLIST_GET_ERROR";
//게시물 전체 목록 첫번째 이후 목록 조회
export const BOARDLIST_AFTER_GET = "BOARDLIST_AFTER_GET";
export const BOARDLIST_AFTER_GET_SUCCESS = "BOARDLIST_AFTER_GET_SUCCESS";
export const BOARDLIST_AFTER_GET_ERROR = "BOARDLIST_AFTER_GET_ERROR";
//게시물 저장 카테고리 목록 조회
export const CATEGORYLIST_GET = "CATEGORYLIST_GET";
export const CATEGORYLIST_GET_SUCCESS = "CATEGORYLIST_GET_SUCCESS";
export const CATEGORYLIST_GET_ERROR = "CATEGORYLIST_GET_ERROR";

//게시물 상세 목록 조회
export const BOARDDETAIL_GET = "BOARDDETAIL_GET";
export const BOARDDETAIL_GET_SUCCESS = "BOARDDETAIL_GET_SUCCESS";
export const BOARDDETAIL_GET_ERROR = "BOARDDETAIL_GET_ERROR";

//키워드로 비슷한 재료 상위 5개 조회
export const MATERIALLIST_GET = "MATERIALLIST_GET";
export const MATERIALLIST_GET_SUCCESS = "MATERIALLIST_GET_SUCCESS";
export const MATERIALLIST_GET_ERROR = "MATERIALLIST_GET_ERROR";
// 게시물 저장(등록)
export const BOARD_POST = "BOARD_POST";
export const BOARD_POST_SUCCESS = "BOARD_POST_SUCCESS";
export const BOARD_POST_ERROR = "BOARD_POST_ERROR";

export const KEWORDBOARDLIST_GET = "KEWORDBOARDLIST_GET";
export const KEWORDBOARDLIST_GET_SUCCESS = "KEWORDBOARDLIST_GET_SUCCESS";
export const KEWORDBOARDLIST_GET_ERROR = "KEWORDBOARDLIST_GET_ERROR";

export const KEWORDBOARDLIST_AFTER_GET = "KEWORDBOARDLIST_AFTER_GET";
export const KEWORDBOARDLIST_AFTER_SUCCESS = "KEWORDBOARDLIST_AFTER_SUCCESS";
export const KEWORDBOARDLIST_AFTER_ERROR = "KEWORDBOARDLIST_AFTER_ERROR";

export const BOARDLISTVIEW_AFTER_GET = "BOARDLISTVIEW_AFTER_GET";
export const BOARDLISTVIEW_AFTER_GET_SUCCESS =
  "BOARDLISTVIEW_AFTER_GET_SUCCESS";
export const BOARDLISTVIEW_AFTER_GET_ERROR = "BOARDLISTVIEW_AFTER_GET_ERROR";

export const boardList = createPromiseThunk(
  BOARDLIST_GET,
  BoardApi.findBoardAll
);
export const boardListAfter = createPromiseThunk(
  BOARDLIST_AFTER_GET,
  BoardApi.findBoardAllAfter
);

export const categoryList = createPromiseThunk(
  CATEGORYLIST_GET,
  BoardApi.findBoardCategory
);
export const searchMaterialList = createPromiseThunk(
  MATERIALLIST_GET,
  BoardApi.findMaterial
);

export const boardDetail = createPromiseThunk(
  BOARDDETAIL_GET,
  BoardApi.findBoardDetail
);
export const boardSaveOne = createPromiseThunk(
  BOARD_POST,
  BoardApi.saveBoardOne
);
export const kewordBoardList = createPromiseThunk(
  KEWORDBOARDLIST_GET,
  BoardApi.findkeyword
);

export const kewordBoardListAfter = createPromiseThunk(
  KEWORDBOARDLIST_AFTER_GET,
  BoardApi.findkeywordAfter
);

export const boardListAfterView = createPromiseThunk(
  BOARDLISTVIEW_AFTER_GET,
  BoardApi.findBoardAllAfterView
);
