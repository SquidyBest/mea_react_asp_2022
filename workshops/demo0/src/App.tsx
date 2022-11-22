import React from "react";

type Props = {};

export default function App({}: Props) {
  let tmp1 = 1234;
  const [tmp2, setTmp2] = React.useState(0);

  return (
    <div>
      <h1>App</h1>
      <span>
        MEA {tmp1}:{tmp2}
      </span>
      <br />
      <button
        onClick={() => {
          tmp1 = tmp1 + 1;
          console.log(`Tmp1: ${tmp1}`);
        }}
      >
        Click1
      </button>

      <button
        onClick={() => {
          setTmp2(tmp2 + 1);
        }}
      >
        Click2
      </button>
    </div>
  );
}
