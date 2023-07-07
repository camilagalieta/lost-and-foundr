import Card from "react-bootstrap/Card";
import b from "../assets/backpack.webp";

export function ItemCard(props) {
  return (
    <Card
      className="item-card p-0"
      style={{ width: "18rem" }}
      onClick={() => {
        window.location.href = `/details/${props.id}`;
      }}
    >
      <Card.Img variant="top" src={b} />
      <Card.Body>
        <Card.Text className="c-blue m-0">
          <small>{props.location ?? "-"}</small>
        </Card.Text>
        <Card.Title className="c-blue">
          {props.itemName ?? "Nome do item"}
        </Card.Title>
        <Card.Text
          className="text-description m-0 p-0"
          style={{ fontSize: "14px" }}
        >
          <br />
          {props.description ?? "-"}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
