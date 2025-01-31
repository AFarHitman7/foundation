import TaskInfo from "@/modules/TaskInfo/TaskInfo";
import Landingpage from "../modules/LandingPage/landing";
import LevelInfo from "../modules/LevelInfo/levelInfo";
import WallOfFame from "@/modules/WallOfFame/WallOfFame";
import BadgeCollection from "@/modules/BadgeCollection/BadgeCollection";
export default function Home() {
  return (
    <main>
      <Landingpage />
      <LevelInfo />
      <TaskInfo />
      <WallOfFame />
      <BadgeCollection />
    </main>
  );
}
