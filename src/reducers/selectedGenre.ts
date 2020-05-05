import Types from "../constants/general";
import * as ITF from "../interfaces/general";

const initialState: ITF.Genre = {} as ITF.Genre

const selectedGenre = (state = initialState, action: any) => {
  switch (action.type) {
    case Types.GET_GENRE_BY_ID:
      return action.payload;

    default:
      return state;
  }
}

export default selectedGenre;