import axios from "axios";

export const useAxios = () => {
    const handleAxios = ({ method, url, data }) => {
        var payload = {
            method,
            url: `${process.env.REACT_APP_SERVER_URL}/${url}`,
            data
        }
        return axios(payload)
    }
    return handleAxios;
}