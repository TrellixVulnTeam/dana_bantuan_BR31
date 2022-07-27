import React from "react";
import profile from ".././img/balam.png";
import ".././style/beranda-pengajuan.scss";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { useState } from "react";
import Swal from "sweetalert2";

const NoData = (props) => {
  const navigate = useNavigate();
  const [bantuan, setBantuan] = useState("");

  const searchButtonHandlerDua = (e) => {
    e.preventDefault();
    if(bantuan.length){
      navigate(`/hasilBantuan/${bantuan}`, { state: { kata: { bantuan } } });
    } else{
      return (
        <div>
          {Swal.fire({
            icon: "error",
            text: "NIK masih kosong !",
          })}
        </div>
      );
    }
    
  };

  return (
    <div>
      <div className="header">
        <div className="pertama container">
          <table width="100%">
            <tbody>
              <tr>
                <td>
                  <div className="min-logo">
                  SISTEM PENYALURAN DANA BANTUAN
                  </div>
                </td>
                <td align="right">
                  <img src={profile} style={{ height: "50px" }}></img>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="menu-container" id="menu-container">
        <div className="navigasi container">
          <ul id="menu">
            <Link to="/">
              <li className="active">
                <a>Beranda</a>
              </li>
            </Link>

            <Link to="/alur-pengajuan">
              <li className="active">
                <a>ALUR PERMOHONAN</a>
              </li>
            </Link>

            <Link to="/login">
              <li className="active">
                <a>Login</a>
              </li>
            </Link>
          </ul>
        </div>
      </div>

      <div className="container">
        <div style={{ minHeight: "400px" }}>
          <div style={{ marginTop: "10px" }}></div>
          <ul className="breadcrumb"></ul>
          <h4 style={{color: 'gray'}}>PERKEMBANGAN PENCAIRAN DANA BANTUAN</h4>
          <hr></hr>
          <div className="row-fluid">
            <div className="span5 form-box">
              <div className="form well">
                <br></br>
                <h5>CEK STATUS PENCAIRAN DANA BANTUAN</h5>
                <form id="mahasiswa-login">
                  <label style={{fontSize: 14, fontWeight: 'bold'}}>NOMOR INDUK KEPENDUDUKAN (NIK)</label>
                  <input
                    className="span12"
                    placeholder="NOMOR INDUK KEPENDUDUKAN"
                    type="text"
                    value={bantuan}
                    id="PerkembanganPencairan_NIM"
                    name="PerkembanganPencarian[NIM]"
                    onChange={(event) => {
                      setBantuan(event.target.value);
                    }}
                  />

                  <br></br>

                  <input
                    onClick={searchButtonHandlerDua}
                    className="btn btn-info btn-large btn-block"
                    value="Lihat Perkembangan Pencarian"
                    type="submit"
                    name="yt0"
                  />
                </form>
              </div>
            </div>

            <div className="span7 form-box">
              <div className="result-perkembangan">
                <p className="text-error">Data tidak ditemukan !</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer fixed-bottom">
        <div className="container">
          <div align="center">
            <small>Sistem Penyaluran Dana Santunan Kematian &copy; 2022</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoData;