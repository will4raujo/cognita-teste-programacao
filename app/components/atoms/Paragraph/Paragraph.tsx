import React from "react";
import "./Paragraph.css";

interface ParagraphProps {
  children: React.ReactNode;
}

const Paragraph = ({ children }: ParagraphProps) => {
  return <p className="paragraph">{children}</p>;
};

export default Paragraph;