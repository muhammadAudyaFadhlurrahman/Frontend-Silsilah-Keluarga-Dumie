import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Family.css";

function Family({ keluargaId, namaKeluarga }) {
  const [familyMembers, setFamilyMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/familymember`)
      .then((response) => {
        const selectedFamily = response.data.filter((member) => member.keluarga_id === keluargaId);
        setFamilyMembers(selectedFamily);
        setLoading(false);
      })
      .catch((error) => {
        setError("Failed to load data");
        setLoading(false);
      });
  }, [keluargaId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const ayahIbu = familyMembers.filter((member) => member.statusKeluarga === "Ayah" || member.statusKeluarga === "Ibu");
  const anak = familyMembers.filter((member) => member.statusKeluarga === "Anak");
  const menantu = familyMembers.filter((member) => member.statusKeluarga === "Menantu");
  const cucu = familyMembers.filter((member) => member.statusKeluarga === "Cucu");

  return (
    <div className="content">
      <section className={`family-section ${namaKeluarga.toLowerCase()}`}>
        <h3 className="family-title mb-4">Keluarga {namaKeluarga}</h3>
        <div className="container">
          <div className="col mb-4">
            {[
              { title: "Ayah & Ibu", data: ayahIbu },
              { title: "Anak", data: anak },
              { title: "Menantu", data: menantu },
              { title: "Cucu", data: cucu },
            ].map((group, index) => (
              <div className={`member-group d-flex flex-wrap gap-3 align-items-stretch card-container ${group.title.toLowerCase().replace(/\s/g, "-")}`} key={index}>
                {group.data.map((member) => (
                  <div className="card text-start" key={member.id}>
                    <img src={member.url || "https://via.placeholder.com/150"} className="card-img-top family-card" alt={member.namaLengkap} />
                    <div className="card-body">
                      <h5 className="card-title">{member.namaLengkap}</h5>
                      <p className="card-text">{member.tempatTanggalLahir}</p>
                      <p className="card-text">{member.jenisKelamin}</p>
                      <p className="card-text">{member.statusKeluarga}</p>
                      {member.apakahMasihHidup?.toLowerCase() !== "hidup" && member.tanggalWafat && <p className="card-text">Meninggal pada: {member.tanggalWafat}</p>}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Family;
