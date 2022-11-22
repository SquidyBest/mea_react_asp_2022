import React from "react";

type Props = {
  title: string;
  onClick: () => void;
};

export default function Header(props: Props) {
  return (
    <div>
      Header: {props.title} :
      <button onClick={() => props.onClick()}>Click Me</button>
    </div>
  );
}
