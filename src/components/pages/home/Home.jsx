import Chart from "../../chart/Chart";
import FeaturedInfo from "../../featuredInfo/FeaturedInfo";
import "./home.css"

export default function Home() {
  return <div className="home">
      <FeaturedInfo />
      <Chart />
  </div>;
}
