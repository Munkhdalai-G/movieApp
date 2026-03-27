"use client";

import { ChevronsLeft, ChevronsRight } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { PaginationProps } from "@/lib/api/types";

export default function PaginationCopy({
  currentPage,
  totalPages,
  pages,
  paramKey,
  paramValue,
}: PaginationProps & { paramKey?: string; paramValue?: string }) {
  const base = paramKey && paramValue
    ? `?${paramKey}=${encodeURIComponent(paramValue)}&`
    : "?";

  return (
    <Pagination className="lg:py-4">
      <PaginationContent>
        <PaginationItem>
          <PaginationLink href={`${base}page=1`}>
            <ChevronsLeft />
          </PaginationLink>
        </PaginationItem>

        <PaginationItem>
          <PaginationPrevious
            href={`${base}page=${currentPage > 1 ? currentPage - 1 : 1}`}
          />
        </PaginationItem>

        {pages.map((p) => (
          <PaginationItem key={p}>
            <PaginationLink href={`${base}page=${p}`} isActive={p === currentPage}>
              {p}
            </PaginationLink>
          </PaginationItem>
        ))}

        <PaginationItem>
          <PaginationNext
            href={`${base}page=${currentPage < totalPages ? currentPage + 1 : totalPages}`}
          />
        </PaginationItem>

        <PaginationItem>
          <PaginationLink href={`${base}page=${totalPages ?? 1}`}>
            <ChevronsRight />
          </PaginationLink>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}