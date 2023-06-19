import React from "react";
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import AlignMenu from "../Menu/AlignMenu";

class Report extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            employeeNumb: null,
            projectNumb: null
        };
    }

    componentDidMount() {

        axios.get('http://localhost:3001/Report')
        .then((response) => {
            const { employeeCount, projectCount } = response.data;
            console.log(`Le nombre d'employés est ${employeeCount} et le nombre de projets est ${projectCount}`);
            this.setState({ employeeNumb: employeeCount, projectNumb: projectCount });
        })
        .catch((error) => {
            console.log('Erreur :', error);
        });
}

    render() {
        const { employeeNumb, projectNumb } = this.state;
        const data = [
            { name: 'Page A', uv: employeeNumb, pv: projectNumb, amt: 2400 },
            { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
            { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
            { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
            { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
            { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
            { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
        ];

        return (
            <div className="Project">
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

                <div style={{ marginLeft: '20%', marginTop: '15%' }}>
                    <BarChart
                        width={1300}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="pv" fill="#8884d8" />
                        <Bar dataKey="uv" fill="#82ca9d" />
                    </BarChart>
                </div>
            </div>
        );
    }
}

export default Report;
