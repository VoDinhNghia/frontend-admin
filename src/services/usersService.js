import axios from "axios";
import { URL_STUDENT_SERVER, userRoles } from "../constants/constant";
import { setAuthHeader } from "./authService";

export const createUser = async (payload) => {
  const res = await axios.post(`${URL_STUDENT_SERVER}/api/users`, payload, {
    headers: setAuthHeader(),
  });
  return res;
};

export const getMeInfo = async () => {
  const res = await axios.get(`${URL_STUDENT_SERVER}/api/auth/me`, {
    headers: setAuthHeader(),
  });
  return res;
};

export const updateInfo = async (id, payload) => {
  const res = await axios.put(
    `${URL_STUDENT_SERVER}/api/users/${id}`,
    payload,
    {
      headers: setAuthHeader(),
    }
  );
  return res;
};

export const updateProfile = async (id, payload) => {
  const res = await axios.put(
    `${URL_STUDENT_SERVER}/api/users/profile/${id}`,
    payload,
    {
      headers: setAuthHeader(),
    }
  );
  return res;
};

export const getListUserAdmin = async () => {
  const res = await axios.get(`${URL_STUDENT_SERVER}/api/users`, {
    params: {
      role: userRoles.ADMIN
    },
    headers: setAuthHeader(),
  });
  return res;
}