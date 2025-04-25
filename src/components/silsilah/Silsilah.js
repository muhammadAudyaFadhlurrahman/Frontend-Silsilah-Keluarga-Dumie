import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Silsilah.css";
import Family from "./Family.js";

const familyMap = {
  yeppi: { id: 1, name: "Yeppi Sudarja" },
  gunawan: { id: 2, name: "Gunawan Santosa" },
  indra: { id: 3, name: "Indra Komara" },
  budiman: { id: 4, name: "Budiman Supandi" },
  yupi: { id: 5, name: "Yupi Indrawati" },
  agus: { id: 6, name: "Agus Arifin" },
  meilinda: { id: 7, name: "Meilinda Nursyanti" },
};

function Silsilah() {
  const [selectedFamily, setSelectedFamily] = useState("yeppi");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const renderContent = () => {
    const selected = familyMap[selectedFamily];
    return <Family keluargaId={selected.id} namaKeluarga={selected.name} />;
  };

  return (
    <div className="silsilah-container d-flex">
      {/* Toggle Button for Mobile */}
      <button className="toggle-button d-md-none" onClick={toggleSidebar}>
        ☰
      </button>

      {/* Sidebar */}
      <div className={`sidebar text-white p-4 ${sidebarOpen ? "open" : ""}`}>
        <h4 className="mb-4 mt-5">DUMIE</h4>
        <ul className="nav flex-column">
          <li className="nav-item mb-2">
            <Link to="/" className="nav-link text-white">
              🏠Home
            </Link>
          </li>
          {Object.entries(familyMap).map(([key, { name }]) => (
            <li className="nav-item mb-2" key={key}>
              <button
                onClick={() => {
                  setSelectedFamily(key);
                  setSidebarOpen(false); // Tutup sidebar setelah klik
                }}
                className="nav-link text-white bg-transparent border-0 text-start w-100">
                👨‍👩‍👧 Keluarga {name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Konten utama */}
      <div className="content flex-grow-1">{renderContent()}</div>
    </div>
  );
}

export default Silsilah;
