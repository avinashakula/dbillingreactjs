import { ChangeEvent, MouseEvent, useState } from "react";
function ListGroup() {
  const [inputValue, setInputValue] = useState("abc");
  const [position, setPosition] = useState(1);

  const items = ["Avinash", "Swapna", "Ashritha"];
  // const handleClick = (event: MouseEvent) => {
  const handleClick = (event: MouseEvent<HTMLLIElement>, index:any) => {
    console.log(event.currentTarget.textContent);
    setPosition(index);
  };

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  return (
    <>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={index}
            className={position==index ? 'list-group-item active' : 'list-group-item'}
            onClick={(event) => {
              handleClick(event, index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
      {inputValue}
      <input
        type="text"
        placeholder="Enter Name"
        onChange={(event) => {
          handleInput(event);
        }}
        value={inputValue}
      />
    </>
  );
}

export default ListGroup;
