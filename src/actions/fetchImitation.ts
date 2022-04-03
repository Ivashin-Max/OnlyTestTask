import { FormData } from "../types/form";
import validAuth from "../static/auth.json";
import { useNavigate } from "react-router-dom";

const delay = () => {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
}

export const isValidAuth = (data: FormData) => {

  if (data.login === validAuth.login && data.password === validAuth.password) return true
  return false;

}

export const fetch = (data: FormData) => delay()
  .then(() => {
    const accessAllowed = isValidAuth(data);
    if (accessAllowed) return true
    else return false
  })