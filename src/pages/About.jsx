import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import coffeeImage from "./images/coffee.jpg";
import teaImage from "./images/tea.jpg";
import snackImage from "./images/snack.jpg";

const About = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Container className="py-5">
      <h1 className="text-center text-white mb-5">Our Menu</h1>

      {/* Coffee Section */}
      <Card className="card mb-4">
        <Card.Img variant="top" src={coffeeImage} alt="Coffee" loading="lazy" />
        <Card.Body>
          <Card.Title>Coffee Selection</Card.Title>
          <Card.Text>
            Indulge in the rich and aromatic flavors of our specialty coffee. From bold
            espresso shots to creamy lattes, we have the perfect brew for every coffee lover.
          </Card.Text>
          <Button variant="primary" onClick={() => scrollToSection("coffee")}>
            Explore Coffee
          </Button>
        </Card.Body>
      </Card>

      {/* Tea Section */}
      <Card className="card mb-4">
        <Card.Img variant="top" src={teaImage} alt="Tea" loading="lazy" />
        <Card.Body>
          <Card.Title>Tea Delights</Card.Title>
          <Card.Text>
            Sip on our exquisite selection of teas, from soothing herbal blends to classic
            black teas. Each cup is crafted to perfection for a delightful tea experience.
          </Card.Text>
          <Button variant="primary" onClick={() => scrollToSection("tea")}>
            Discover Tea
          </Button>
        </Card.Body>
      </Card>

      {/* Snacks Section */}
      <Card className="card mb-4">
        <Card.Img variant="top" src={snackImage} alt="Snacks" loading="lazy" />
        <Card.Body>
          <Card.Title>Delicious Snacks</Card.Title>
          <Card.Text>
            Complement your beverage with our mouthwatering snacks. From savory bites to
            sweet treats, our snacks are the perfect accompaniment to your drink of choice.
          </Card.Text>
          <Button variant="primary" onClick={() => scrollToSection("snacks")}>
            View Snacks
          </Button>
        </Card.Body>
      </Card>

      {/* Coffee Menu */}
      <section id="coffee" className="mb-5 text-center">
        <h2 className="mb-4">Coffee Selection</h2>
        <div className="text-center mt-4">
          <Button variant="primary">View Full Coffee Menu</Button>
        </div>
      </section>

      {/* Tea Menu */}
      <section id="tea" className="mb-5 text-center">
        <h2 className="mb-4">Tea Delights</h2>
        <div className="text-center mt-4">
          <Button variant="primary">View Full Tea Menu</Button>
        </div>
      </section>

      {/* Snacks Menu */}
      <section id="snacks" className="mb-5 text-center">
        <h2 className="mb-4">Delicious Snacks</h2>
        <div className="text-center mt-4">
          <Button variant="primary">View Full Snacks Menu</Button>
        </div>
      </section>
    </Container>
  );
};

export default About;
