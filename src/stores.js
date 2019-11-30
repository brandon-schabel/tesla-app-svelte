import { writable } from "svelte/store";

const createTheme = () => {
  const theme = writable({
    mode: "dark"
  });
  const { subscribe, set, update } = theme;

  const toggleTheme = themeVal => {

    if (themeVal.mode === "dark") {
      set({
        ...themeVal,
        mode: "light"
      });
    } else {
      set({ ...themeVal, mode: "dark" });
    }
  };

  return {
    subscribe,
    toggleTheme: themeVal => toggleTheme(themeVal)
  };
};

export const theme = createTheme();
