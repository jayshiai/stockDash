import CenterDash from "./Dashboard/CenterDash";
import SubDash from "./Dashboard/SubDash";
const Dashboard = () => {
  return (
    <main className="z-10 mb-[1vh] mr-3  flex rounded-3xl bg-[#d9d9d9]">
      <CenterDash />
      <SubDash />
    </main>
  );
};

export default Dashboard;
