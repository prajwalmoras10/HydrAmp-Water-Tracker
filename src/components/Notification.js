import React, { useEffect } from "react";

const NotificationComponent = () => {
  useEffect(() => {
    if ("Notification" in window) {
      Notification.requestPermission()
        .then((permission) => {
          console.log("Notification permission:", permission);
        })
        .catch((err) => console.error("Notification Error:", err));
    } else {
      console.warn("Notifications are not supported in this browser.");
    }
  }, []);

  const sendReminder = () => {
    if (!("Notification" in window)) {
      alert("This browser does not support desktop notifications.");
      return;
    }
    if (Notification.permission === "granted") {
      new Notification("Hydration Reminder 💧", {
        body: "Time to drink water!",
      });
    } else {
      alert("Please enable notifications in your browser settings.");
    }
  };

  return <button onClick={sendReminder}>🔔 Enable Notifications</button>;
};

export default NotificationComponent;
