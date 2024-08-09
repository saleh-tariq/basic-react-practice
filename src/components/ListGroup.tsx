import { MouseEvent, useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIdx, setSelectedIdx] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      {!items.length && <p>no items found</p>}
      <ul className="list-group">
        {items.map((e, i) => (
          <li
            className={
              selectedIdx === i ? "list-group-item active" : "list-group-item"
            }
            key={e}
            onClick={() => {
              setSelectedIdx(i);
              onSelectItem(e);
            }}
          >
            {`${i + 1}.) ${e}`}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
