import { IFormValues } from "../types/form";
import validAuth from "../static/auth.json";

const delay = () => new Promise(resolve => setTimeout(resolve, 2000));

const isValidAuth = (data: IFormValues) => {
  if (data.login === validAuth.login && data.password === validAuth.password) return true
  return false;
}

export const imitateFetch = async (data: IFormValues) => {
  await delay();
  const response = {
    status: isValidAuth(data),
    data: data
  }
  return response
}



