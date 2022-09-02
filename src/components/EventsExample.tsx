import React, { FC, useState, useRef } from "react";

const EventsExample: FC = () => {
  const [value, setValue] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(inputRef.current?.value);
    setValue("");
  };

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={changeHandler}
        placeholder="керований"
      />
      <input type="text" placeholder="не керований" ref={inputRef} />
      <button onClick={clickHandler}>button</button>
    </div>
  );
};

export default EventsExample;
