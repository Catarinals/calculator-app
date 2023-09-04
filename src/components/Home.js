import React, { useState } from "react";
import classes from "./Home.module.css";
import Button from "./Button";

export default function Home() {
  const [res, setRes] = useState("");

  const buttons = [
    "C",
    "9",
    "/",
    "8",
    "7",
    "6",
    "*",
    "5",
    "4",
    "3",
    "+",
    "2",
    "1",
    "0",
    "-",
    ".",
    "Del",
    "=",
  ];

  const findValue = () => {
    let result = Function("return " + res)();
    setRes(result.toString());
  };

  const handler = (arg) => {
    if (res === "Infinity") {
      setRes("");
      return;
    }

    if (arg === "C") setRes("");
    else if (arg === "=") findValue();
    else if (arg === "Del") {
      let n = res.length;
      if (n > 0) setRes(res.slice(0, n - 1));
    } else setRes(res.concat(arg));
  };

  return (
    <div className={classes.home}>
      <div className={classes.inner}>
        <div className={classes.result}>
          <div className={classes.resbox}>{res}</div>
        </div>
        <div className={classes.btns}>
          {buttons.map((element, index) => {
            return <Button value={element} key={index} handler={handler} />;
          })}
        </div>
      </div>
    </div>
  );
}
