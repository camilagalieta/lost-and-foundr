import { Container, Row } from "react-bootstrap";
import { NavbarWidget } from "../widgets/navbar";
import { ItemCard } from "../widgets/item-card";

export function LostView(props) {
  return (
    <Container className="items-section" id="lost">
      <h2>Items Perdidos</h2>
      <Row style={{ gap: "25px" }}>
        {[0, 1, 2, 3, 4, 5].map((item) => (
          <ItemCard {...item} />
        ))}
      </Row>
    </Container>
  );
}
