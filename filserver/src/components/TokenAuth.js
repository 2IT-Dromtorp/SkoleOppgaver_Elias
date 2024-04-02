import { useContext, useEffect } from "react";
import { NowContext } from "../context";
import { useNavigate } from "react-router-dom";

const Token = () => {
  const { socket } = useContext(NowContext);
  const navi = useNavigate();

  useEffect(() => {
    if (!socket) return;
    socket.on("2step", (data) => {
      if (data.code === "sigma") {
        navi("/mainpage");
      } else {
        navi("/signin");
      }
    });
  });
  return (
    <div>
      <h1>Scan NFC taggen din 8==D</h1>
    </div>
  );
};

export default Token;
