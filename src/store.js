import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import axios from "axios";

import * as api from "./config";
import { themeReducer } from "./features/theme/theme-slice";

export const store = configureStore({
    reducer: {
        theme: themeReducer,
    },
    devTools: true,
    middleware: (getDefaultMiddlware) => getDefaultMiddlware({
        think: {
            extraArguments: {
                client: axios,
                api,
            },
        },
        serializableCheck: false,
    })
})