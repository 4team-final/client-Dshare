import axios from "axios";
import { baseUrl } from "./BaseUrl";

export const getToken = async (data) => {
  const resultLogin = await axios
    .post(`${baseUrl}login`, data)
    .then((promiseData) => promiseData.data)
    .then((resolve) => resolve.result)
    .catch();
  return resultLogin;
};

//signupFrom API - 회원가입
export const insertSignupForm = (data) => {
  const result = axios.post(baseUrl + "signupInsert", data);
  return result;
};

//user information API - 프로필 조회
export const selectUserInformation = async (token) => {
  const result = axios
    .get(baseUrl + "profile", {
      headers: {
        accessToken: token,
      },
    })
    .then((res) => res.data)
    .catch();
  return result;
};

//saveUserMaterialOne 회원이 한개의 재료 저장

export const saveUserMaterialOne = (data) => {
  let data_ = {
    material: {
      id: data.material.id,
      keyName: data.material.keyName,
    },
  };
  const result = axios
    .post(baseUrl + "user/material", data_, {
      headers: {
        accessToken: data.token,
      },
    })
    .catch((err) => {
      console.log(err);
    });

  return result;
};

export const findUserMaterialUserId = (token) => {
  const result = axios
    .get(baseUrl + "user/material", {
      headers: {
        accessToken: token,
      },
    })
    .catch((err) => {
      console.log(err);
    });
  return result;
};

//user password change API - 사용자 비밀번호 변경
export const updatePassword = async (data) => {
  const result = axios
    .post(
      baseUrl + "pwChange",
      {
        body: {
          password: data.password,
        },
      },
      {
        headers: {
          accessToken: data.token,
        },
      }
    )
    .then((res) => {
      console.log(res.data);

      if (res.data.result === 0) {
        alert("기존 비밀번호와 동일합니다.");
      } else {
        alert("비밀번호가 변경되었습니다.");
        window.location.href = "/profile";
      }
    });
  return result;
};

export const deleteUserGetMaterialUserId = (data) => {
  const result = axios
    .delete(baseUrl + "user/material", {
      params: {
        materialId: data.materialId,
      },
      headers: {
        accessToken: data.token,
      },
    })
    .catch((err) => {
      console.log(err);
    });
  return result;
};

export const userVoteValid = async (token) => {
  const result = axios
    .get(`${baseUrl}uservote`, {
      headers: {
        accessToken: token,
      },
    })
    .then((res) => res.data)
    .catch();
  return result;
};

export const userVoteAdd = async (board, token) => {
  const result = axios
    .post(
      `${baseUrl}voteadd`,
      {
        body: {
          boardId: board,
        },
      },
      {
        headers: {
          accessToken: token,
        },
      }
    )
    .then((res) => res.data)
    .catch();
  return result;
};

export const searchRefrigeratorList = (data) => {
  const result = axios
    .get(baseUrl + "refrigerator", {
      params: {
        materialId: data.item.materialId,
      },
      headers: {
        accessToken: data.token,
      },
    })
    .catch((err) => {
      console.log(err);
    });
  return result;
};

export const updateUserInfo = async (data) => {
  const result = axios
    .post(
      `${baseUrl}updateinfo`,
      {
        body: {
          data: data.data,
        },
      },
      {
        headers: {
          accessToken: data.token,
        },
      }
    )
    .then(() => {
      alert("수정이 완료되었습니다.");
      window.location.reload();
    })
    .catch(() => {
      alert("수정 실패");
    });

  return result;
};

//메인페이지 이주의 레시피 투표 게시물 조회
export const boardRankSend = async () => {
  const result = axios
    .get(`${baseUrl}boardrank`)
    .then((res) => res.data)
    .catch();
  return result;
};

export const getrankboard = async () => {
  const result = axios
    .get(`${baseUrl}getrankboard`)
    .then((res) => res.data)
    .catch();
  return result;
};
