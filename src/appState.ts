import create from "zustand";

export interface AppState {
  isSidebarHidden: boolean;
  toggleSidebar: () => void;
  setIsSideBarHidden: (val: boolean) => void;
}

const appStore = create<AppState>()((set) => ({
  isSidebarHidden: false,
  toggleSidebar: () =>
    set((state) => ({ isSidebarHidden: !state.isSidebarHidden })),
  setIsSideBarHidden: (val) => set({ isSidebarHidden: val }),
}));

export default appStore;
