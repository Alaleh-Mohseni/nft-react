import { Container } from "reactstrap";
import "./style.css";


const CommonSection = ({ title }) => {
  return (
    <section className="common-section">
      <Container className="text-center">
        <h2>{title}</h2>
      </Container>
    </section>
  );
};

export default CommonSection;
