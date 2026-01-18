import { useEffect, useState } from "react";
import type { ArtworkRow } from "./types/artworks";
import { fetchArtworksPage } from "./api/artworksApi";
import ArtworksTable from "./components/ArtworksTable";
import PaginationBar from "./components/PaginationBar";

export default function App() {
  const [selectedRows, setSelectedRows] = useState<ArtworkRow[]>([]);
  const [artworkRow, setArtworkRow] = useState<ArtworkRow[]>([]);

  const [currentPage, setCurrentPage] = useState<number>(1);

  const [total, setTotal] = useState(0);
  const [offset, setOffset] = useState(0);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchArtData = async () => {
      try {
        setLoading(true);

        const resData = await fetchArtworksPage(currentPage);

        setTotal(resData.pagination.total);
        setOffset(resData.pagination.offset);
        setArtworkRow(resData.data);
      } finally {
        setLoading(false);
      }
    };

    fetchArtData();
  }, [currentPage]);

  return (
    <div>
      <div style={{ marginBottom: 12, display: "flex", gap: 10 }}>
        <div style={{ fontSize: 14, color: "#555", marginTop: 6 }}>
          selected: {selectedRows.length}
        </div>
      </div>

      <ArtworksTable
        artworkRow={artworkRow}
        selectedRows={selectedRows}
        setSelectedRows={setSelectedRows}
        loading={loading}
      />

      <PaginationBar
        offset={offset}
        total={total}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
