import "./chart.css";
import { 
  LineChart, 
  Line, 
  XAxis, 
  // YAxis, 
  CartesianGrid, 
  Tooltip, 
  // Legend, 
  ResponsiveContainer 
} from 'recharts';

export default function Chart({ title, data, dataKey, grid }) {
    
  return <div className="chart">
      <h3 className="chartTitle">
          { title }
      </h3>
       {/* here aspect means if the width will be 4 unit then height
      will be 1 unit  */}
      <ResponsiveContainer width="100%" aspect={4 / 1}>
            <LineChart data={data}>
                {/* with stroke color can be set */}
                {/* datakey comes from the above data */}
                <XAxis dataKey="name" stroke="#5550bd" />
                {/* <YAxis /> */}
                {/* datakey means which data is being used */}
                <Line type="monotone" dataKey={dataKey} stroke="#5550bd"  />
                <Tooltip />
                {/* strokeDasharray 5 5 creates a dash type grid */}
                {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5"/>}
                {/* Legend shows the property which proprty is actaully is being used */}
                {/* <Legend /> */}
            </LineChart>
      </ResponsiveContainer>
  </div>;
}
