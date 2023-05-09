import React from "react";
import { Button } from "react-bootstrap";
import IconText from "../IconText";

const IconButton = ({ onClick, text, icon, labelStyle, ...props }) => {
  return (
    <Button onClick={onClick} className="m-2" {...props}>
      <IconText icon={icon} text={text} left={false} labelStyle={labelStyle} />
    </Button>
  );
};

export default IconButton;
