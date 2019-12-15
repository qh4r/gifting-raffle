import React from "react";

export function Counter() {
  const [remainingTime, setRemainingTime] = React.useState(5000);
  const end = React.useRef(new Date().getTime() + remainingTime);
  React.useEffect(() => {
    const interval = setInterval(() => {
      const newRemainingTime = end.current - new Date().getTime();
      if (newRemainingTime <= 0) {
        clearInterval(interval)
        setRemainingTime(0)
      } else {
        setRemainingTime(newRemainingTime)
      }
    });
    return () => clearInterval(interval)
  }, []);
  return <div>remainingTime</div>
}
