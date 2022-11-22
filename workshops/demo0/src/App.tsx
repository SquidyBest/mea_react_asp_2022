import React from "react";

type Props = {};

export default function App({}: Props) {
  const tmp1 = 1234;

  return (
    <div>
      <h1>App</h1>
      <span>MEA {tmp1}</span>
      <br />
      <button onClick={() => alert("Hey")}>Click</button>
    </div>
  );
}
