"use client";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Pagination({ totalPages }: { totalPages: number }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const currentPage = Number(searchParams.get("page")) || 1;

  function updateUrl(page: number | string) {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    replace(`${pathname}?${params.toString()}`);
  }

  // If there is only one page, don't show pagination
  let message;
  if (totalPages === 1) {
    message = "Page 1 of 1";
  } else if (totalPages === 0) {
    message = "No results";
  } else {
    message = `Page ${currentPage} of ${totalPages}`;
  }

  return (
    <div className="flex my-4 mr-4">
      <p className="flex-1">{message}</p>
      <div className="flex gap-4">
        {currentPage > 1 && (
          <button onClick={() => updateUrl(currentPage - 1)}>Previous</button>
        )}

        {totalPages > 1 && (
          <button
            onClick={() => updateUrl(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}
