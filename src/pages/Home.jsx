import { Link, NavLink } from "react-router-dom";

export function Home() {

  return (
    <>
      <nav className="menu">
        <Link to={"quest/0"}>QCM</Link>
        <Link to={"qcmt"}>QCM par thème</Link>
        {/* <Link to={"img/0"}>Images</Link>
        <Link to={"image/0"}>Ombres</Link> */}
        {/* <Link to={"questInt/0"}>Intrus</Link>
        <Link to={"rule/0"}>Rule</Link>
        <Link to={"test/0"}>Test</Link> */}
      </nav>
    </>
  )
}
