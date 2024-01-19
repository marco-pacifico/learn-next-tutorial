"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useTransition, useState } from "react";

export default function Search() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [pending, startTransition] = useTransition();
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout>();
  // const isSearching = timeoutId || pending;

  function handleChange(value: string) {
    clearTimeout(timeoutId);
    let id = setTimeout(() => {
      startTransition(() => {
        const params = new URLSearchParams(searchParams);
        if (value) {
          params.set("search", value);
          params.set("page", "1");
        } else {
          params.delete("search");
          params.delete("page");
        }
        replace(`${pathname}?${params.toString()}`);
        // setTimeoutId(undefined);
      });
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
          // disabled={pending}
        />
      </label>
      {pending && (
        <div className="absolute top-1/4 right-0 pr-12"><span className="text-gray-900">Searching...</span></div>
      )}
    </div>
  );
}
