import "./global.css";
import Form from "./Form";
import Title from "../Title";

export default function Newsletter() {
  return (
    <section className="newsletter">
      <div className="newsletter-content">
        <Title type="h4" align="left">
          Recebe Nossa Newsletter
        </Title>
        <Form />
      </div>
    </section>
  );
}
