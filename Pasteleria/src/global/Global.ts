import { create } from "zustand";

type AlertState = {
    open: boolean;
    setOpen: (value: boolean) => void;
}

type SessionState = {
    sessionStatus: boolean;
    setSession: (value: boolean) => void;
}

export const openAlert = create<AlertState>()((set) => ({
    open: false,
    setOpen: (value) => set({ open: value })
}))

export const session = create<SessionState>()((set) => ({
    sessionStatus: false,
    setSession: (value) => set({ sessionStatus: value })
}))