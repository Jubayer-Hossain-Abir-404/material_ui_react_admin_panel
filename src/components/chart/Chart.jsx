import "./chart.css";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Chart() {
    const data = [
        {
          name: 'Page A',
          "Active User": 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          "Active User": 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          "Active User": 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          "Active User": 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          "Active User": 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          "Active User": 2390,
          pv: 3800,
          amt: 2500,
        },
        {
        //   page G contains inverted comma becasue of the space
          name: 'Page G',
        //   as active user contains a space thats why there is inverted comma 
          "Active User": 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
  return <div className="chart">
      <h3 className="chartTitle">
          User Analytics
      </h3>
       {/* here aspect means if the width will be 4 unit then height
      will be 1 unit  */}
      <ResponsiveContainer width="100%" aspect={4 / 1}>
            <LineChart data={data}>
                {/* with stroke color can be set */}
                {/* datakey comes from the above data */}
                <XAxis dataKey="name" stroke="#5550bd" />
                {/* <YAxis /> */}
                <Line type="monotone" dataKey="Active User" stroke="#5550bd"  />
                <Tooltip />
                <CartesianGrid stroke="#e0dfdf"/>
            </LineChart>
      </ResponsiveContainer>
  </div>;
}
