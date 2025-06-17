import { Link } from "react-router-dom"
export default function Header() {
  return (
    <div className="">
        <h1>My Header</h1>
        <ul>
            <li>
                <Link to="/Home">Home</Link>
            </li>
            <li>
                <Link to="/Login">Login</Link>
            </li>
        </ul>
    </div>
  )
}
