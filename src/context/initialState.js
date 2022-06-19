import { fetchUser } from "../utils/fetchLocalStorageData";

export const initialState = {
  user: fetchUser(),
  foodItems: null,
};
