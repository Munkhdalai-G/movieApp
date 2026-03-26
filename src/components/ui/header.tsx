"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Search, X, ChevronDown, Moon, Sun, Film } from "lucide-react";
import Link from "next/link";
import { Movie } from "@/lib/api/types";
import { getSearch } from "@/lib/api/get-search";
import { SearchBar, SearchBarLoading, SearchBarNoResult } from "./searchBar";
import { GenresDrop } from "./genres";

type Status = "idle" | "loading" | "done";

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isGenreOpen, setIsGenreOpen] = useState(false);

  const [mobileQuery, setMobileQuery] = useState("");
  const [mobileResults, setMobileResults] = useState<Movie[]>([]);
  const [mobileStatus, setMobileStatus] = useState<Status>("idle");

  const [desktopQuery, setDesktopQuery] = useState("");
  const [desktopResults, setDesktopResults] = useState<Movie[]>([]);
  const [desktopStatus, setDesktopStatus] = useState<Status>("idle");

  const debounceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const mobileInputRef = useRef<HTMLInputElement>(null);
  const genreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (genreRef.current && !genreRef.current.contains(e.target as Node)) {
        setIsGenreOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const fetchResults = useCallback(async (query: string, isMobile: boolean) => {
    const setStatus = isMobile ? setMobileStatus : setDesktopStatus;
    const setResults = isMobile ? setMobileResults : setDesktopResults;

    if (!query.trim()) {
      setStatus("idle");
      setResults([]);
      return;
    }

    setStatus("loading");
    try {
      const data = await getSearch(query);
      setResults(data.results.slice(0, 5));
      setStatus("done");
    } catch (err) {
      console.error("Search error:", err);
      setResults([]);
      setStatus("done");
    }
  }, []);

  const handleQueryChange = (value: string, isMobile: boolean) => {
    if (isMobile) setMobileQuery(value);
    else setDesktopQuery(value);

    if (debounceTimer.current) clearTimeout(debounceTimer.current);
    debounceTimer.current = setTimeout(
      () => fetchResults(value, isMobile),
      400,
    );
  };

  const clearMobile = () => {
    setMobileQuery("");
    setMobileResults([]);
    setMobileStatus("idle");
    setIsSearchOpen(false);
  };

  const clearDesktop = () => {
    setDesktopQuery("");
    setDesktopResults([]);
    setDesktopStatus("idle");
  };

  // ✅ onClose clears state and closes the dropdown
  const handleClose = (isMobile: boolean) => {
    if (isMobile) {
      setMobileQuery("");
      setMobileResults([]);
      setMobileStatus("idle");
      setIsSearchOpen(false);
    } else {
      setDesktopQuery("");
      setDesktopResults([]);
      setDesktopStatus("idle");
    }
  };

  const renderDropdown = (isMobile: boolean) => {
    const status = isMobile ? mobileStatus : desktopStatus;
    const results = isMobile ? mobileResults : desktopResults;
    const query = isMobile ? mobileQuery : desktopQuery;

    if (status === "idle") return null;
    if (status === "loading") return <SearchBarLoading />;
    if (results.length === 0) return <SearchBarNoResult />;

    // ✅ Pass onClose here
    return (
      <SearchBar
        movies={results}
        query={query}
        onClose={() => handleClose(isMobile)}
      />
    );
  };

  return (
    <div className="relative ">
      {!isSearchOpen && (
        <div className="flex justify-between h-6 py-5 items-center px-3 lg:py-7">
          <Link href="/">
            <div className="flex text-indigo-700 h-7 items-center font-bold lg:pl-15">
              <Film className="stroke-1 p-0.5 lg:p-0" />
              Movie Z
            </div>
          </Link>

          <div className="flex gap-4">
            <div className="relative hidden lg:flex" ref={genreRef}>
              <button
                onClick={() => setIsGenreOpen((prev) => !prev)}
                className="flex items-center border rounded-lg w-25 h-8.5 justify-center gap-1 font-medium"
              >
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${isGenreOpen ? "rotate-180" : ""}`}
                />
                Genre
              </button>
              {isGenreOpen && (
                <GenresDrop onClose={() => setIsGenreOpen(false)} />
              )}
            </div>

            {/* Desktop search */}
            <div className="relative hidden lg:block">
              <div className="flex items-center border rounded-lg px-2 w-80 bg-white dark:bg-gray-900">
                <Search className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                <input
                  className="p-1.5 w-full outline-none bg-transparent text-sm placeholder-gray-400 dark:text-white"
                  type="text"
                  placeholder=" type to search"
                  value={desktopQuery}
                  onChange={(e) => handleQueryChange(e.target.value, false)}
                />
                {desktopQuery && (
                  <button onClick={clearDesktop}>
                    <X className="w-3.5 h-3.5 text-gray-400 hover:text-gray-600" />
                  </button>
                )}
              </div>
              {renderDropdown(false)}
            </div>
          </div>

          <div className="flex gap-3 items-center lg:pr-15">
            <button
              className="border rounded-md lg:p-1.5 lg:hidden"
              onClick={() => {
                setIsSearchOpen(true);
                setTimeout(() => mobileInputRef.current?.focus(), 50);
              }}
            >
              <Search className="stroke-1 p-1 lg:p-0.5" />
            </button>
            <button
              className="border rounded-md lg:p-1.5"
              onClick={() => setIsDark(!isDark)}
            >
              {isDark ? (
                <Sun className="stroke-1 p-1 lg:p-0.5" />
              ) : (
                <Moon className="stroke-1 p-1 lg:p-0.5" />
              )}
            </button>
          </div>
        </div>
      )}

      {/* Mobile search bar */}
      {isSearchOpen && (
        <div className="relative">
          <div className="flex justify-between h-6 py-5 items-center px-3 gap-7 lg:py-7">
            <div ref={genreRef}>
              <button
                className="border rounded-md lg:p-1.5"
                onClick={() => setIsGenreOpen((prev) => !prev)}
              >
                <ChevronDown
                  className={`stroke-1 p-1 lg:p-0.5 transition-transform duration-200 ${isGenreOpen ? "rotate-180" : ""}`}
                />
              </button>
              {isGenreOpen && <GenresDrop />}
            </div>

            <div className="flex items-center flex-1 gap-1 h-10">
              <Search className="w-3.5 h-3.5 text-gray-400 shrink-0" />
              <input
                ref={mobileInputRef}
                type="search"
                placeholder="Search movies..."
                value={mobileQuery}
                onChange={(e) => handleQueryChange(e.target.value, true)}
                className="w-full text-xs outline-none bg-transparent placeholder-gray-400 dark:text-white"
              />
            </div>

            <button
              className="border rounded-md lg:p-1.5"
              onClick={clearMobile}
            >
              <X className="stroke-1 p-1 lg:p-0.5" />
            </button>
          </div>
          {renderDropdown(true)}
        </div>
      )}
    </div>
  );
}
