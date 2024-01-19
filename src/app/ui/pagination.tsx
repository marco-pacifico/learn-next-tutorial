"use client";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useTransition, useState } from "react";

export default function Pagination({ totalPages }: { totalPages: number }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const currentPage = Number(searchParams.get("page")) || 1;
  const [pending, startTransition] = useTransition();

  function updateUrl(page: number | string) {
    startTransition(() => {
      const params = new URLSearchParams(searchParams);
      params.set("page", page.toString());
      replace(`${pathname}?${params.toString()}`);
    });
  }

  // If there are no invoices, don't show pagination
  if (totalPages === 0) return null;

  return (
    <div className="flex my-4 mr-4">
      <p className="flex-1">
        {pending ? "Loading..." : `Page ${currentPage} of ${totalPages}`}
      </p>
      <div className="flex gap-4">
        {/* Previous Button: Only show if past page 1 */}
        {currentPage > 1 && (
          <button
            onClick={() => updateUrl(currentPage - 1)}
            disabled={pending}
            className="disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Previous
          </button>
        )}
        {/* Next Button: Only show if there's more than one page */}
        {totalPages > 1 && (
          <button
            onClick={() => updateUrl(currentPage + 1)}
            disabled={currentPage === totalPages || pending}
            className="disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}
