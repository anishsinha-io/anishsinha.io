import { useAtom } from "jotai";

import { Switch } from "~/components/ui/switch";
import { darkModeAtom } from "~/components/islands/state/dark-mode";
import { useMemo } from "react";
import { FaMoon } from "react-icons/fa6";
import { MdOutlineWbSunny } from "react-icons/md";

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
    <div className="flex relative gap-2">
      {darkMode ? (
        <MdOutlineWbSunny
          size={15}
          className="absolute pointer-events-none left-[0.138rem] top-[0.145rem] text-midnight"
        />
      ) : (
        <FaMoon
          className="absolute top-1 left-5 pointer-events-none text-offwhite"
          size={12}
        />
      )}
      <Switch
        aria-label="Toggle dark mode"
        checked={darkMode}
        onCheckedChange={() => {
          document.documentElement.dataset.theme = darkMode ? "light" : "dark";
          setDarkMode(!darkMode);
        }}
        className="data-[state=unchecked]:bg-midnight "
      />
    </div>
  );
};
