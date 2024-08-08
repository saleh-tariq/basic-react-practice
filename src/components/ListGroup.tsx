import { MouseEvent, useState } from "react";

function ListGroup() {
  const items = ["spaghetti", "soup", "hamburger", "potato"];

  const [selectedIdx, setSelectedIdx] = useState(-1);

  //   const handClick = (event: MouseEvent) => {
  //     console.log(event);
  //   };

  return (
    <>
      <h1>My List</h1>
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
