import { useAtom } from "jotai";

import { Switch } from "~/components/ui/switch";
import { darkModeAtom } from "~/components/islands/state/dark-mode";
import { useMemo } from "react";

export const DarkModeSwitch = () => {
  const [darkMode, setDarkMode] = useAtom(darkModeAtom);

  useMemo(() => {
    if (darkMode) {
      document.documentElement.dataset.theme = "dark";
    } else {
      document.documentElement.dataset.theme = "light";
    }
  }, [darkMode]);

  return (
    <Switch
      aria-label="Toggle dark mode"
      checked={darkMode}
      onCheckedChange={() => {
        document.documentElement.dataset.theme = darkMode ? "light" : "dark";
        setDarkMode(!darkMode);
      }}
      className="data-[state=unchecked]:bg-midnight "
    />
  );
};
