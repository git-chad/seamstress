"use client";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { Switch } from "@nextui-org/react";
import { MoonIcon } from "../../../public/icons/moonIcon";
import { SunIcon } from "../../../public/icons/sunIcon";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleToggle = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <Switch
      defaultSelected={theme === 'dark'}
      size="lg"
      color="secondary"
      startContent={<SunIcon />}
      endContent={<MoonIcon />}
      onChange={handleToggle}
      className="m-4"
    >
    </Switch>
  );
};

export default ThemeToggle;
