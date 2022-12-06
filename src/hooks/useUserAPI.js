import {Navigate} from "react-router-dom";
import {useAxios} from "./useAxios";

export const useUserAPI = () => {
  const handleAxios = useAxios();

  //handle user login
  const userLogin = (data) => {
    return handleAxios({ method: "post", uri: "users/login", data });
    // return axios.post(`${process.env.REACT_APP_SERVER_URL}/users/login`, data)
  };

  //handle registration
  const createUser = (data) => {
    return handleAxios({ method: "post", uri: "users", data });
  };

  //read profile
  const readProfile = () => {
    handleAxios({ method: "get", uri: "users/me" })
      .then((res) => console.log(res))
      .catch((e) => console.log(e.message));
  };

  //read profile as public
  const readProfileAsPublic = (id) => {
    return handleAxios({ method: "get", uri: `users/${id}` });
  };

  //logout user
  const userLogout = () => {
    handleAxios({ method: "post", uri: "users/logout", data: {} })
      .then(() => {
        <Navigate to="/login" />;
      })
      .catch(() => (e) => console.log(e.message));
  };

  return {
    userLogin,
    createUser,
    readProfile,
    readProfileAsPublic,
    userLogout,
  };
};
