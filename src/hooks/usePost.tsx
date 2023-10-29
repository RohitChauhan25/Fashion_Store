import { useMutation } from "react-query";
import reqres from "../service/axiosInstance";

interface IParams {
  url: string;
  payload?: any;
  token?: string;
}
const post = async ({ url, payload }: IParams) => {
  //   const authToken = localStorage.getItem("_token");

  //   const { data } = await reqres.post(url, payload, {
  //     headers: { token: authToken },
  //   });

  const { data } = await reqres.post(url, payload);
  return data;
};
const usePost = () => useMutation(post);
export default usePost;
