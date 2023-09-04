import { create } from "zustand";

interface ISettingTabState {
    activeTab: number;
    setActiveTab: (activeTab: number) => void;
}

export const useSettingTabStore = create<ISettingTabState>()((set) => ({
    activeTab: 0,
    setActiveTab: (activeTab: number) => set({ activeTab }),
}));