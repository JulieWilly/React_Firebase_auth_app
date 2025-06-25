import { useSelector } from "react-redux"


const Dashboard = () => {
  const auth = useSelector(state => state.count.user);
  return (
    <div>
      <h1>{auth}</h1>
      Dashboard</div>
  )
}

export default Dashboard