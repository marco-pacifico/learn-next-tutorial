"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function Search() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleChange(value: string) {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set("search", value);
    } else {
      params.delete("search");
    }
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <label className="flex-1">
      <input
        type="search"
        placeholder="Search"
        className="text-gray-900 w-full"
        onChange={(e) => handleChange(e.target.value)}
        defaultValue={searchParams.get("search")?.toString()}
      />
    </label>
  );
}
