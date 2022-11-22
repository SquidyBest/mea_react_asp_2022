import React from "react";

type Props = {
  title: string;
};

export default function Header(props: Props) {
  return <div>Header: {props.title}</div>;
}
