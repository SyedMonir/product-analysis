import { Col, Container, Row } from 'react-bootstrap';
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import './Dashboard.css';

const Dashboard = () => {
  const data = [
    {
      month: 'Mar',
      investment: 100000,
      sell: 241,
      revenue: 10401,
    },
    {
      month: 'Apr',
      investment: 200000,
      sell: 423,
      revenue: 24500,
    },
    {
      month: 'May',
      investment: 500000,
      sell: 726,
      revenue: 67010,
    },
    {
      month: 'Jun',
      investment: 500000,
      sell: 529,
      revenue: 40405,
    },
    {
      month: 'Jul',
      investment: 600000,
      sell: 601,
      revenue: 50900,
    },
    {
      month: 'Aug',
      investment: 700000,
      sell: 670,
      revenue: 61000,
    },
  ];

  return (
    <Container className="dashboard mt-5">
      <Row>
        <Col>
          <h4 className="text-center my-3">Month Wise Sell</h4>
          <LineChart width={400} height={300} data={data} className="mx-auto">
            <Line type="monotone" dataKey="sell" stroke="#8884d8" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
          </LineChart>
        </Col>
        {/* Another chart */}
        <Col>
          <h4 className="text-center my-3">Investment vs Revenue</h4>
          <AreaChart
            width={400}
            height={300}
            data={data}
            className="mx-auto"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="investment"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
            <Area
              type="monotone"
              dataKey="revenue"
              stackId="1"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </AreaChart>
        </Col>
      </Row>
      {/* Another Row */}
      <Row className="mt-5">
        <Col>
          <h4 className="text-center my-3">Investment vs Revenue</h4>
          <BarChart
            width={400}
            height={300}
            data={data}
            className="mx-auto"
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="investment" stackId="a" fill="#8884d8" />
            <Bar dataKey="revenue" stackId="a" fill="#82ca9d" />
          </BarChart>
        </Col>
        {/* Another chart */}
        <Col>
          <h4 className="text-center my-3">Investment vs Revenue</h4>
          <PieChart width={400} height={400} className="mx-auto">
            <Pie
              data={data}
              dataKey="investment"
              cx="50%"
              cy="50%"
              outerRadius={60}
              fill="#8884d8"
            />
            <Pie
              data={data}
              dataKey="revenue"
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={90}
              fill="#82ca9d"
              label
            />
          </PieChart>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
