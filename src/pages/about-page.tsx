import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <>
      <h1>About Page</h1>
      <Link to="/" replace={true}>Go to Home Page</Link>
    </>
  );
}

export default AboutPage;
