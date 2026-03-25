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
}: PaginationProps) {
  return (
    <Pagination>
      <PaginationContent>
        {/* Go to first page */}
        <PaginationItem>
          <PaginationLink href={`?page=1`}>
            <ChevronsLeft />
          </PaginationLink>
        </PaginationItem>

        {/* Previous page */}
        <PaginationItem>
          <PaginationPrevious
            href={`?page=${currentPage > 1 ? currentPage - 1 : 1}`}
          />
        </PaginationItem>

        {/* Page numbers */}
        {pages.map((p) => (
          <PaginationItem key={p}>
            <PaginationLink href={`?page=${p}`} isActive={p === currentPage}>
              {p}
            </PaginationLink>
          </PaginationItem>
        ))}

        {/* Next page */}
        <PaginationItem>
          <PaginationNext
            href={`?page=${currentPage < totalPages ? currentPage + 1 : totalPages}`}
          />
        </PaginationItem>

        {/* Go to last page */}
        <PaginationItem>
          <PaginationLink href={`?page=${totalPages ?? 1}`}>
            <ChevronsRight />
          </PaginationLink>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
