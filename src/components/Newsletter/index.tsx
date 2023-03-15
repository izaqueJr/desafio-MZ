import "./global.css";
import Form from "./Form";
import Title from "../Title";

export default function Newsletter() {
  return (
    <section className="newsletter">
      <div className="newsletter__content">
        <div className="newsletter__title">
          <Title type="h4" align="left">
            Recebe Nossa Newsletter
          </Title>
        </div>
        <Form />
      </div>
    </section>
  );
}
