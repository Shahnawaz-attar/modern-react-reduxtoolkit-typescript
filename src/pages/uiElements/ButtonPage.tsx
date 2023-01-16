import React, { useState } from "react";
import Buttons from "../../components/uiComponents/Buttons";

const ButtonPage: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClick = () => setIsOpen(!isOpen);

  return (
    <>
      <Buttons color={"primary"} type={"outline"} onClick={onClick}>
        Toggle
      </Buttons>
      {isOpen && <p>Some content</p>}

      <Buttons color={"danger"} rounded type={"outline"}>
        delete
      </Buttons>

      <Buttons color={"secondary"} rounded type={"outline"}>
        Seriously!
      </Buttons>
    </>
  );
};

export default ButtonPage;
