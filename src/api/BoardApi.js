import axios from "axios";
import { baseUrl } from "./BaseUrl";

//board API -- 날짜순 첫번째 목록
export const findBoardAll = () => {
  const result = axios.get(baseUrl + "board").catch((err) => {
    console.log(err);
  });
  return result;
};

//board API -- 날짜순 첫번째 이후 목록
export const findBoardAllAfter = (page) => {
  const result = axios
    .get(baseUrl + "board/page", {
      params: {
        id: page.id,
        createAt: page.createAt,
      },
    })
    .catch((err) => {
      console.log(err);
    });
  return result;
};

//board API -- 조회순 첫번째 이후 목록
export const findBoardAllAfterView = (page) => {
  const result = axios
    .get(baseUrl + "board/view/page", {
      params: {
        id: page.id,
        viewCount: page.viewCount,
      },
    })
    .catch((err) => {
      console.log(err);
    });
  return result;
};

//board API -- 날짜순 첫번째 목록
export const findkeyword = (keyword) => {
  const result = axios
    .get(baseUrl + "board/keyword", {
      params: {
        keyword: keyword,
      },
    })
    .catch((err) => {
      console.log(err);
    });
  return result;
};

export const findkeywordAfter = (page) => {
  const result = axios
    .get(baseUrl + "board/keyword/page", {
      params: {
        id: page.id,
        createAt: page.createAt,
        keyword: page.keyword,
      },
    })
    .catch((err) => {
      console.log(err);
    });
  return result;
};

export const findBoardDetail = async (boards) => {
  const result = await axios.get(baseUrl + "board/detail", {
    params: {
      id: boards,
    },
  });
  return result;
};

//board category API -- 카테고리 목록 조회
export const findBoardCategory = () => {
  const result = axios.get(baseUrl + "board/category").catch((err) => {
    console.log(err);
  });
  return result;
};
//material API -- 재료 검색 조회
export const findMaterial = (keyword) => {
  const result = axios
    .get(baseUrl + "board/material/search", {
      params: {
        keyword: keyword,
      },
    })
    .catch((err) => {
      console.log(err);
    });

  return result;
};

export const saveBoardOne = (data) => {
  const result = axios.post(baseUrl + "board/create", data.formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Accept: "*/*",
      accessToken: data.token,
    },
  });

  return result;
};
