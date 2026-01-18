import { Button } from "primereact/button";

type PaginationBarProps = {
  offset: number;
  total: number;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};

export default function PaginationBar({
  offset,
  total,
  currentPage,
  setCurrentPage,
}: PaginationBarProps) {
  const groupSize = 5;

  const startPage = Math.floor((currentPage - 1) / groupSize) * groupSize + 1;

  const totalPages = Math.ceil(total / 12);

  return (
    <div
      style={{
        marginTop: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 10,
        padding: "6px 4px",
      }}
    >
      <div style={{ fontSize: 14, color: "#555" }}>
        Showing {offset + 1} to {offset + 12 > total ? total : offset + 12} of{" "}
        {total} entries
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
        <Button
          label="Previous"
          size="small"
          outlined
          style={{ padding: "3px 6px", fontSize: 15 }}
          onFocus={(e) => e.currentTarget.blur()}
          onClick={() => {
            if (currentPage === 1) return;
            setCurrentPage((prev) => prev - 1);
          }}
        />

        {Array.from({ length: 5 }, (_, i) => startPage + i).map((pageNum) => (
          <Button
            key={pageNum}
            label={String(pageNum)}
            size="small"
            outlined={currentPage !== pageNum}
            style={{ minWidth: "2rem", padding: "3px 6px", fontSize: 15 }}
            onFocus={(e) => e.currentTarget.blur()}
            onClick={() => setCurrentPage(pageNum)}
          />
        ))}

        <Button
          label="Next"
          size="small"
          outlined
          style={{ padding: "3px 6px", fontSize: 15 }}
          onFocus={(e) => e.currentTarget.blur()}
          onClick={() => {
            if (currentPage === totalPages) return;
            setCurrentPage((prev) => prev + 1);
          }}
        />
      </div>
    </div>
  );
}
