import React from "react";

interface ListProps<T> {
  items: T[];
  renterItem: (item: T) => React.ReactNode;
}

export default function List<T>(props: ListProps<T>) {
  return <div>{props.items.map(props.renterItem)}</div>;
}
