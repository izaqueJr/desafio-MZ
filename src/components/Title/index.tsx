import React from "react";
import "./global.css";

interface Title {
  children: React.ReactNode;
  type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  align?: "left" | "center" | "right";
}

const Title = (props: Title) => {
  const { children, type, align = "center" } = props;

  const Tag = type;
  return (
    <Tag className={`title title__${type}`} style={{ textAlign: align }}>
      {children}
    </Tag>
  );
};

export default Title;
