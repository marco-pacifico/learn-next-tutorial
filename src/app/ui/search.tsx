"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useTransition } from "react";

export default function Search() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const [pending, startTransition] = useTransition();

  function handleChange(value: string) {
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
    });
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
          disabled={pending}
        />
      </label>
      {pending && <div className="absolute top-1/4 right-0 pr-12">Searching...</div>}
    </div>
  );
}
