import "../css/Home.css";
import "../css/Dashboard.css";
import Navbar from "../components/NavBar";
import SideBar from "../components/Sidebar";

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
  return (
    <main className="p-0">
      {/* Sidebar */}
      <section className="row bg-light opacity-75 ">
        <Navbar />
      </section>
      <section className="row p-0">
        <SideBar />
        {/* Content Area */}
        <div id="contentArea" className="col-md-10 col-sm-9">
          {" "}
          <div id="glanceableInfo" className="row">
            <div className="col-md-3 my-2">
              <div className="container">
                <i className="fas fa-wallet px-2"></i>
                <small className="mx-3">Flujo de Capital</small>
                <dd>Uy$ 28.030</dd>
              </div>
            </div>
            <div className="col-md-3 my-2">
              <div className="container">
                <i className="fas fa-clipboard-list px-2"></i>
                <small className="mx-3">Pedidos</small>
                <div className="text-center">
                  {" "}
                  <span className="text-danger mx-2">20</span>/
                  <span className="text-success mx-2">50</span>
                </div>
              </div>
            </div>
            <div className="col-md-3 my-2">
              {" "}
              <div className="container">
                <i className="far fa-envelope px-2"></i>
                <small className="mx-3">Mensajes</small>
                <div className="text-center">
                  {" "}
                  <span className="text-danger mx-2">2</span>/
                  <span className="text-success mx-2">25</span>
                </div>
              </div>{" "}
            </div>
            <div className="col-md-3 my-2">
              {" "}
              <div className="container">
                <i className="fas fa-exclamation px-2"></i>{" "}
                <small className="mx-3">Notificaciones</small>
                <div className="text-center">
                  {" "}
                  <span className="text-success mx-2">5</span>
                </div>
              </div>{" "}
            </div>
          </div>
          <div id="chart" className="container-fluid">
            <h2>Aca va un chart.js ¡Cuando pueda implementarlo! 😠</h2>
            <Line options={options} data={data} />{" "}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Dashboard;
