"use client";
import { useEffect, useRef, useState } from "react";
import { Icon } from "./icons";
type Theme = "light" | "dark" | "system";
const key = "ks-theme";
function valid(value: unknown): Theme {
  return value === "light" || value === "dark" ? value : "system";
}
function apply(theme: Theme) {
  const dark =
    theme === "dark" ||
    (theme === "system" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);
  document.documentElement.dataset.theme = dark ? "dark" : "light";
  document.documentElement.style.colorScheme = dark ? "dark" : "light";
}
export function ThemeSwitch() {
  const [theme, setTheme] = useState<Theme>("system");
  const current = useRef<Theme>("system");
  useEffect(() => {
    let saved: Theme = "system";
    try {
      saved = valid(localStorage.getItem(key));
    } catch {}
    current.current = saved;
    setTheme(saved);
    apply(saved);
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onMedia = () => {
      if (current.current === "system") apply("system");
    };
    const onStorage = (e: StorageEvent) => {
      if (e.key === key || e.key === null) {
        const next = valid(e.newValue);
        current.current = next;
        setTheme(next);
        apply(next);
      }
    };
    media.addEventListener("change", onMedia);
    window.addEventListener("storage", onStorage);
    return () => {
      media.removeEventListener("change", onMedia);
      window.removeEventListener("storage", onStorage);
    };
  }, []);
  function choose(next: Theme) {
    current.current = next;
    setTheme(next);
    apply(next);
    try {
      localStorage.setItem(key, next);
    } catch {}
  }
  return (
    <div className="theme-switch" role="group" aria-label="Color theme">
      {(["light", "dark", "system"] as const).map((t) => (
        <button
          key={t}
          type="button"
          aria-label={`${t[0].toUpperCase() + t.slice(1)} theme`}
          aria-pressed={theme === t}
          title={`${t[0].toUpperCase() + t.slice(1)} theme`}
          onClick={() => choose(t)}
        >
          <Icon
            name={t === "light" ? "sun" : t === "dark" ? "moon" : "monitor"}
          />
        </button>
      ))}
    </div>
  );
}
