import { configureStore } from "@reduxjs/toolkit";

import dataReducer from "./slicers";

export default configureStore({
  reducer: {
    data: dataReducer,
  },
});
