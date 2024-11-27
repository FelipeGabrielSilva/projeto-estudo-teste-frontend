import { API } from "./api.service";

export const upload = async () => {
  try {
    const res = API.post("photo/upload");

    return res;
  } catch (error) {
    alert(error);
  }
};
