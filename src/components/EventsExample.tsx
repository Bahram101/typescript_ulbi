import React, { useState, FC, useRef } from "react";

const EventsExample: FC = () => {
  const [value, setValue] = useState<string>("");
  const [isDrag, setIsDrag] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null)

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    console.log(value)
  };
  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(value);
    console.log(inputRef.current?.value);
  };
  const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
    console.log("Drag");
  };
  const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(true);
  };
  const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(false);
  };
  const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(false);
    console.log("Drop");
    // e.dataTransfer.files.item(1)
  };

  return (
    <div>
      <input value={value} onChange={changeHandler} type="text" placeholder="Controlled" />
      <input ref={inputRef} type="text" placeholder="Uncontrolled" />
      <button onClick={clickHandler}>Change</button>
      <div
        onDrag={dragHandler}
        draggable
        style={{ width: 200, height: 200, background: "red" }}
      ></div>
      <div
        onDragOver={dragWithPreventHandler}
        onDragLeave={leaveHandler}
        onDrop={dropHandler}
        style={{
          width: 200,
          height: 200,
          background: isDrag ? "blue" : "red",
          marginTop: 15,
        }}
      ></div>
    </div>
  );
};

export default EventsExample;
