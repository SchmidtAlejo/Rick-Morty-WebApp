import React from "react";
import { ButtonToolbar, ButtonGroup, Button } from "react-bootstrap";

export default function PageSelector({ page, maxPage, updatePage }) {
  const menor2 = page - 2;
  const menor1 = page - 1;
  const mayor1 = page + 1;
  const mayor2 = page + 2;

  const renderButton = (num) => {
    if (num > 0 && num <= maxPage) {
      if (num === page) {
        return <Button onClick={() => updatePage(num)}>{num}</Button>;
      } else {
        return (
          <Button variant="outline-primary" onClick={() => updatePage(num)}>
            {num}
          </Button>
        );
      }
    }
  };

  const renderMinButton = () => {
    if (page - 3 >= 1 && page > 3) {
      return (
        <Button variant="outline-primary" onClick={() => updatePage(1)}>
          1
        </Button>
      );
    }
  };

  const renderMaxButton = () => {
    if (page + 3 <= maxPage && page < (maxPage-3)) {
      return (
        <Button variant="outline-primary" onClick={() => updatePage(maxPage)}>
            {maxPage}
        </Button>
      );
    }
  };

  return (
    <ButtonToolbar aria-label="Toolbar with button groups">
      <ButtonGroup className="me-2" aria-label="First group">
        {renderMinButton()}
      </ButtonGroup>
      <ButtonGroup className="me-2" aria-label="First group">
        {renderButton(menor2)} {renderButton(menor1)} {renderButton(page)}
        {renderButton(mayor1)} {renderButton(mayor2)}
      </ButtonGroup>
      <ButtonGroup className="me-2" aria-label="First group">
        {renderMaxButton()}
      </ButtonGroup>
    </ButtonToolbar>
  );
}
