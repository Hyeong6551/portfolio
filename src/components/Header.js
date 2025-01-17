import { Link } from 'react-router-dom';
import '../css/components.css';

export default function Header(){
    return(
        <nav className="navbar navbar-expand-sm navbar-dark">
        <div className="container-fluid">
            <ul className="navbar-nav">
            <li className="nav-item">
                <Link className="nav-link active" to="/">Main</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/board/list">List</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="#">Link</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link disabled" to="#">Disabled</Link>
            </li>
            </ul>
        </div>
        </nav>
    )
}