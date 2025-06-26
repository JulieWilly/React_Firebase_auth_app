import { useSelector } from "react-redux"


const Dashboard = () => {
  const auth = useSelector(state => state.count.user);
  return (
    <div>
      <span>User Details.</span>
      <h1>{auth.name}</h1>
      <h1>{auth.email}</h1>
      <img src={auth.photoURL} alt="" />
    </div>
  );
}

export default Dashboard