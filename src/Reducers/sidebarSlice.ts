import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type SbState = {
    selecionado: number;
};

const initialState: SbState = {
    selecionado: 0,
};

const sBarSlice = createSlice({
    name: "assBar",
    initialState,
    reducers: {
        setSelecionado: (state, action: PayloadAction<number>) => {
            state.selecionado = action.payload;
        },
    },
});

export const { setSelecionado } = sBarSlice.actions;
export default sBarSlice.reducer;