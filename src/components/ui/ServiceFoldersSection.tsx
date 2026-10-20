import GlassFolder from "./glass-folder-cards"
import type { FolderArt, FolderFile } from "./glass-folder-cards"
import { serviceFolders } from "../../data/service-folders"
import type { ServiceFolder } from "../../data/service-folders"

const folderArtMap: Record<string, FolderArt> = {
  plumbing: "glacier",
  electrician: "ember",
  emergency: "dusk",
  hvac: "verdant",
}

const FOLDER_WIDTH = 340

function toFiles(folder: ServiceFolder): FolderFile[] {
  return folder.items.map((item, idx) => ({
    name: item.title,
    meta: item.desc,
    art: idx === 0 ? ("ember" as const) : undefined,
  }))
}

// Two folders per row (the files fan out upwards, hence the large vertical gap).
const rows: ServiceFolder[][] = []
for (let i = 0; i < serviceFolders.length; i += 2) {
  rows.push(serviceFolders.slice(i, i + 2))
}

export default function ServiceFoldersSection() {
  return (
    <section id="services" style={{ width: "100%", padding: "60px 24px", overflow: "visible", scrollMarginTop: "24px" }}>
      <div style={{ textAlign: "center", maxWidth: "1200px", margin: "0 auto 60px" }}>
        <h2 style={{ fontSize: "36px", fontWeight: "700", color: "#151514", marginBottom: "12px" }}>
          Core Operational Workflows
        </h2>
        <p style={{ fontSize: "16px", color: "rgba(21, 21, 20, 0.65)" }}>
          Explore our structured dispatch, triage, and back-office procedures.
        </p>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "140px",
          width: "100%",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} style={{ display: "flex", justifyContent: "center", gap: "80px", width: "100%", flexWrap: "wrap" }}>
            {row.map((folder, colIndex) => (
              <div key={folder.id} style={{ width: FOLDER_WIDTH, display: "flex", justifyContent: "center" }}>
                <GlassFolder
                  width={FOLDER_WIDTH}
                  label={folder.title}
                  meta={folder.subtitle}
                  tone="light"
                  art={folderArtMap[folder.id] ?? "aurora"}
                  seed={10 + rowIndex * 2 + colIndex}
                  files={toFiles(folder)}
                  // "add" let visitors append a fake "New Workflow / Just added description"
                  // card to the public page. This is a read-only marketing section.
                  action="none"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}
