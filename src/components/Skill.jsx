import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";

export default function Skill({ skill: { name, logoUrl } }) {
  const variant = "dark";

  const [className, setClassName] = useState("");

  useEffect(() => {
    setClassName("load");
  }, [className]);

  return (
    <Card
      bg={variant.toLowerCase()}
      style={{ width: "18rem" }}
      className={"mb-2 fade-in " + className}
    >
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <img alt={name} src={logoUrl} />
      </Card.Body>
    </Card>
  );
}
