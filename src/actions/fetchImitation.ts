import { FormData } from "../types/form";
import validAuth from "../static/auth.json";
import { useNavigate } from "react-router-dom";

const delay = () => new Promise(resolve => setTimeout(resolve, 2000));

export const imitateFetch = async (data: FormData) => {
  await delay();
  const response = {
    status: isValidAuth(data),
    data: data
  }
  return response
}

const isValidAuth = (data: FormData) => {

  if (data.login === validAuth.login && data.password === validAuth.password) return true
  return false;

}

