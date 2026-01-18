import {
  DataTable,
  type DataTableSelectionMultipleChangeEvent,
} from "primereact/datatable";
import { Column } from "primereact/column";
import type { ArtworkRow } from "../types/artworks";
import { truncate } from "../utils/text";
import CustomSelectOverlay from "./CustomSelectOverlay";

type ArtworksTableProps = {
  artworkRow: ArtworkRow[];
  selectedRows: ArtworkRow[];
  setSelectedRows: React.Dispatch<React.SetStateAction<ArtworkRow[]>>;
  loading: boolean;
};

export default function ArtworksTable({
  artworkRow,
  selectedRows,
  setSelectedRows,
  loading,
}: ArtworksTableProps) {
  return (
    <DataTable
      value={artworkRow}
      loading={loading}
      loadingIcon="pi pi-spin pi-spinner"
      size="small"
      pt={{
        bodyRow: { style: { height: "32px" } },
      }}
      tableStyle={{ fontSize: "0.75rem" }}
      dataKey="id"
      selectionMode="checkbox"
      selection={selectedRows}
      onSelectionChange={(
        e: DataTableSelectionMultipleChangeEvent<ArtworkRow[]>
      ) => setSelectedRows(e.value)}
    >
      <Column selectionMode="multiple" headerStyle={{ width: "1rem" }} />

      <Column
        headerStyle={{ padding: 0 }}
        header={
          <CustomSelectOverlay
            artworkRow={artworkRow}
            setSelectedRows={setSelectedRows}
          />
        }
      />

      <Column
        field="title"
        header="TITLE"
        body={(row: ArtworkRow) => (
          <span title={row.title ?? ""}>{truncate(row.title, 40)}</span>
        )}
      />

      <Column field="place_of_origin" header="PLACE OF ORIGIN" />

      <Column
        field="artist_display"
        header="ARTIST"
        body={(row: ArtworkRow) => (
          <span title={row.artist_display ?? ""}>
            {truncate(row.artist_display, 30)}
          </span>
        )}
      />

      <Column
        field="inscriptions"
        header="INSCRIPTIONS"
        body={(row: ArtworkRow) =>
          row.inscriptions ? (
            <span title={row.inscriptions ?? ""}>
              {truncate(row.inscriptions, 30)}
            </span>
          ) : (
            "N/A"
          )
        }
      />

      <Column field="date_start" header="START DATE" />
      <Column field="date_end" header="END DATE" />
    </DataTable>
  );
}
