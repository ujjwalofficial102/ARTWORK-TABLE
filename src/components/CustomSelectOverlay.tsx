import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { OverlayPanel } from "primereact/overlaypanel";
import { useRef, useState } from "react";
import type { ArtworkRow } from "../types/artworks";

type CustomSelectOverlayProps = {
  artworkRow: ArtworkRow[];
  setSelectedRows: React.Dispatch<React.SetStateAction<ArtworkRow[]>>;
};

export default function CustomSelectOverlay({
  artworkRow,
  setSelectedRows,
}: CustomSelectOverlayProps) {
  const [selectCount, setSelectCount] = useState<string>("");

  const overlayRef = useRef<OverlayPanel>(null);

  const handleCustomSelect = () => {
    const n = parseInt(selectCount);

    const toSelect = artworkRow.slice(0, Math.min(n, artworkRow.length));
    setSelectedRows(toSelect);

    overlayRef.current?.hide();
    setSelectCount("");
  };

  return (
    <>
      <OverlayPanel ref={overlayRef}>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <span style={{ fontSize: 14 }}>
            select first n rows (current page)
          </span>

          <InputText
            type="number"
            min={0}
            value={selectCount}
            onChange={(e) => setSelectCount(e.target.value)}
            placeholder="e.g. 3"
          />

          <Button label="select" onClick={handleCustomSelect} size="small" />
        </div>
      </OverlayPanel>

      <Button
        icon="pi pi-chevron-down"
        text
        rounded
        size="small"
        style={{ padding: 0 }}
        onClick={(e) => overlayRef.current?.toggle(e)}
        onFocus={(e) => e.currentTarget.blur()}
      />
    </>
  );
}
