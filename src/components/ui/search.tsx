"use client";

import { ChangeEventHandler, useEffect, useState } from "react";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

import { Search } from "lucide-react";
import { searchMovies } from "@/lib/api/search-movies";
import { Movie } from "@/lib/api/types";

export const SearchInput = () => {
  const [searchValue, setSearchValue] = useState("");
  const [movies, setMovies] = useState<Movie[]>([]);

  const onChangeSearchValue: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    if (searchValue === "") {
      setMovies([]);
      return;
    }

    const timer = setTimeout(async () => {
      const data = await searchMovies(searchValue);
      setMovies(data.results);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchValue]);

  return (
    <div className="grid grid-cols-2">
      <InputGroup className="max-w-xs">
        <InputGroupInput
          value={searchValue}
          onChange={onChangeSearchValue}
          placeholder="Search..."
        />
        <InputGroupAddon>
          <Search />
        </InputGroupAddon>
      </InputGroup>

      {movies.map((movie) => (
        <h1 key={movie.id}>{movie.title}</h1>
      ))}
    </div>
  );
};
