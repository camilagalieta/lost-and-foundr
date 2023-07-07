import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export function NavbarWidget() {
  const items = [
    {
      content: "Perdidos",
      link: "/lost",
    },
    {
      content: "Recuperados",
      link: "/recovered",
    },
  ];
  return (
    <Navbar
      expand="lg"
      fixed="top"
      style={{
        background: "#FFF",
        padding: "20px 0",
        boxShadow: "0px 5px 10px var(--shadow)",
      }}
    >
      <Container fluid>
        <Navbar.Brand href="/">Achados & Perdidos</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            style={{ marginLeft: "auto", gap: "16px", maxHeight: "100px" }}
            navbarScroll
          >
            {items.map((item) => (
              <Nav.Link href={item.link}>{item.content}</Nav.Link>
            ))}

            <a href="/register">
              <Button variant="success" className="custom-btn-primary">
                Registrar
              </Button>
            </a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
