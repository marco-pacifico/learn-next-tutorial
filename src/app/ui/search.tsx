"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function Search() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout>();

  function handleChange(value: string) {
    clearTimeout(timeoutId);
    let id = setTimeout(() => {
      const params = new URLSearchParams(searchParams);
      if (value) {
        params.set("search", value);
        params.set("page", "1");
      } else {
        params.delete("search");
        params.delete("page");
      }
      replace(`${pathname}?${params.toString()}`);
      setTimeoutId(undefined);
    }, 500);
    setTimeoutId(id);
  }

  return (
    <div className="flex-1 relative">
      <label>
        <input
          type="search"
          placeholder="Search"
          className="text-gray-900 w-full disabled:opacity-40"
          onChange={(e) => handleChange(e.target.value)}
          defaultValue={searchParams.get("search")?.toString()}
        />
      </label>
    </div>
  );
}
