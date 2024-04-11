import { atom, selector } from "recoil";
import axios from "axios";

export const notification = atom({
  key: "notification",
  default: selector({
    key: "notificationAtomSelector",
    get: async () => {
      const res = await axios.get(
        "https://sum-server.100xdevs.com/notifications"
      );
      return res.data;
    },
  }),
});

export const totalNotification = selector({
  key: "totalNotification",
  get: ({ get }) => {
    const allNotification = get(notification);
    return (
      allNotification.network +
      allNotification.jobs +
      allNotification.messaging +
      allNotification.notifications
    );
  },
});
