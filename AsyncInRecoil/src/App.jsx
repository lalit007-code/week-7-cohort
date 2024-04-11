import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import "./App.css";
import { notification, totalNotification } from "./atom";

function App() {
  return (
    <>
      <RecoilRoot>
        <MainApp />
      </RecoilRoot>
    </>
  );
}

function MainApp() {
  const [networkCount, setNetworkCount] = useRecoilState(notification);
  const totalNotificationCount = useRecoilValue(totalNotification);

  return (
    <div>
      <button>Home</button>
      <button>
        network(
        {networkCount.network >= 100 ? "99+" : networkCount.network})
      </button>
      <button>
        jobs(
        {networkCount.jobs >= 100 ? "99+" : networkCount.jobs})
      </button>
      <button>
        Notification(
        {networkCount.notifications > 100 ? "99+" : networkCount.notifications})
      </button>
      <button>
        messaging(
        {networkCount.messaging > 100 ? "99+" : networkCount.messaging})
      </button>
    </div>
  );
}
export default App;
