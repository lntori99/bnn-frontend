"use client";

import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UiState {
  mobileMenuOpen: boolean;
  selectedSector: string | null;
}

const initialState: UiState = { mobileMenuOpen: false, selectedSector: null };

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setMobileMenu(state, action: PayloadAction<boolean>) {
      state.mobileMenuOpen = action.payload;
    },
    selectSector(state, action: PayloadAction<string | null>) {
      state.selectedSector = action.payload;
    },
  },
});

export const { setMobileMenu, selectSector } = uiSlice.actions;

export const makeStore = () =>
  configureStore({ reducer: { ui: uiSlice.reducer } });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
