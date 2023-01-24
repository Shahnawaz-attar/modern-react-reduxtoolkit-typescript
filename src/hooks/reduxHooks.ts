import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../store";

export const useAppDispatch = () =>
  useDispatch<ThunkDispatch<{}, {}, AnyAction>>();
export const useAppSelector = useSelector<RootState>;
