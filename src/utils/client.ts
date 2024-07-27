import axios from "axios";
import Swal from "sweetalert2";
const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});
client.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        html:
          error?.response?.status < 500 && error?.response?.status >= 400
            ? error?.response?.data?.error?.message
            : "Something went wrong!",
      });
      return Promise.reject(error);
    }
  }
);
export default client;
