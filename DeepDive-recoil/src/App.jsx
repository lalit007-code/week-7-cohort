import "./App.css";
import { RecoilRoot, useRecoilValue } from "recoil";
import {
  jobsAtom,
  messagingAtom,
  networkAtom,
  notificationsAtom,
  totalNotificationSelector,
} from "./atom";

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
  const networkNotification = useRecoilValue(networkAtom);
  const jobNotificationCount = useRecoilValue(jobsAtom);
  const messagingNotificationCount = useRecoilValue(messagingAtom);
  const notificationCount = useRecoilValue(notificationsAtom);

  return (
    <div>
      <button>Home</button>

      <button>
        network({networkNotification >= 100 ? "99+" : networkNotification})
      </button>
      <button>
        jobs({jobNotificationCount >= 100 ? "99+" : jobNotificationCount})
      </button>
      <button>
        Notification({notificationCount > 100 ? "99+" : notificationCount})
      </button>
      <button>
        messaging(
        {messagingNotificationCount > 100 ? "99+" : messagingNotificationCount})
      </button>

      <Button></Button>
    </div>
  );
}

function Button() {
  const totalNotification = useRecoilValue(totalNotificationSelector);
  return <>me({totalNotification})</>;
}

export default App;
