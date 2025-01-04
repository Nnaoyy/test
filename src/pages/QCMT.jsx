import { Link } from "react-router-dom";
import { themes } from '../data/data2024'



export function QCMT() {
  console.log(themes);
  let test = [];

  {
    themes.map((theme) => (
      test.push(theme)
    ))
  }

  test[5] = "???"
  console.log(themes);
  return (
    <>

      <div id="theme">
        {themes.map((theme, key) => (
          <Link key={key} to={"/qcmt/" + theme + "/0"}>{test[key]}</Link>
        ))}
      </div>
    </>
  )
}