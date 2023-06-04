import Sidebar from "./Dashboard/Sidebar";
import CenterDash from "./Dashboard/CenterDash";
import SubDash from "./Dashboard/SubDash";
const Dashboard = () => {
  return (
    <main className=" flex">
      <Sidebar />
      <CenterDash />
      <SubDash />
    </main>
  );
};

export default Dashboard;
