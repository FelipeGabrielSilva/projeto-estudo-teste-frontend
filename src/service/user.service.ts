import { User } from "../interface/user.interface";
import { API } from "./api.service";

const createUser = async (userData: User) => {
  try {
    const res = await API.post("user/register", userData);

    return res.data;
  } catch (error) {}
};

export { createUser };
