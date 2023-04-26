import React from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";
import AlignMenu from "../Menu/AlignMenu";
import Pie from "../PieChart";
import BoxVacancy from "../Box/BoxVacancy";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

class Vacancy extends React.Component {
  render() {
    const data = [
      { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
      { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
      { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
      { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
      { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
      { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
      { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
    ];

    return (
      <div
        className="Vacancy"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <AlignMenu
          bottom="44px"
          buttonText="Home"
          links="/Homepage"
          buttonText1="Edit"
          links1="/EditAccount"
          buttonText2="Staffing"
          links2="/"
          buttonText3="Calendar"
          links3="/"
          buttonText4="Employee"
          links4="/"
          buttonText5="Vacancy"
          links5="/"
          buttonText6="Mail"
          links6="/"
        />

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "flex-start",
            marginTop: "10px",
            marginLeft: '20%'
          }}
        >
          <div>
            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="pv" fill="#8884d8" />
              <Bar dataKey="uv" fill="#82ca9d" />
            </BarChart>
            <div style={{ marginTop: '40%' }}>
              <Pie />
            </div>
          </div>
          <div style={{ marginLeft: '20%', width: '600vw', height: '40vw'}}>
            <BoxVacancy
              width="90%"
              height="25%"
              style={{ alignSelf: "flex-start", marginRight: "10px" }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Vacancy;

  
  