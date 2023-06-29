import "../css/Home.css";
import "../css/Dashboard.css";
import Navbar from "../components/NavBar";
import SideBar from "../components/Sidebar";
import { ToastContainer, toast } from "react-toastify";
import React, { useEffect } from "react";
import 'react-toastify/dist/ReactToastify.css';

//      CHARTJS
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
  );
  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Ventas y Pedidos",
      },
    },
  };
  
  const labels = ["January", "February", "March", "April", "May", "June", "July"];
  
  
  export const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: labels.map(() => faker.datatype.number({ min: -10, max: 1000 })),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 255, 132, 0.9)",
      },
      // {
        //   label: "Dataset 2",
        //   data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
        //   borderColor: "rgb(53, 162, 235)",
        //   backgroundColor: "rgba(53, 162, 235, 0.5)",
        // },
      ],
    };
    //        CHARTJS
    
function Dashboard() {
  
  useEffect(() => {
    toast("🪄 Bienvenid@ a Admin Martei!!");
  }, []);

  return (
    <main className="p-0">
      {/* Sidebar */}
      <section className="row">
        <Navbar />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="dark"
        progressBar
      />
      </section>
      <section className="d-flex">
        <SideBar />
        {/* Content Area */}
        <div id="contentArea" className="py-3">
          {" "}
          <div id="glanceableInfo" className="row p-3">
            <div className="col-md-3 my-2">
              <div id="flujoCapital" className="container">
                <i className="fas fa-wallet px-2"></i>
                <small className="mx-3">Flujo de Capital</small>
                <dd>Uy$ 28.030</dd>
              </div>
            </div>
            <div className="col-md-3 my-2">
              <div id="pedidos" className="container">
                <i className="fas fa-clipboard-list px-2"></i>
                <small className="mx-3">Pedidos</small>
                <div className="text-center">
                  {" "}
                  <span className="mx-2">20</span>/
                  <span className="mx-2">50</span>
                </div>
              </div>
            </div>
            <div className="col-md-3 my-2">
              {" "}
              <div id="mensajes" className="container">
                <i className="far fa-envelope px-2"></i>
                <small className="mx-3">Mensajes</small>
                <div className="text-center">
                  {" "}
                  <span className="mx-2">2</span>/
                  <span className="mx-2">25</span>
                </div>
              </div>{" "}
            </div>
            <div className="col-md-3 my-2">
              {" "}
              <div id="notificaciones" className="container">
                <i className="fas fa-exclamation px-2"></i>{" "}
                <small className="mx-3">Notificaciones</small>
                <div className="text-center">
                  {" "}
                  <span className="fw-bold mx-2">5</span>
                </div>
              </div>{" "}
            </div>
          </div>
          <div id="chart" className="container">
            <h2 className="text-center">Seguimiento de Ingresos</h2>
            <Line options={options} data={data} />{" "}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Dashboard;
