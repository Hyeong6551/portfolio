import { Link } from 'react-router-dom';

export default function Header(){
    return(
        <nav className="navbar navbar-expand-sm navbar-dark" style={{background:"black", fontWeight:"bold"}}>
        <div className="container-fluid">
            <ul className="navbar-nav">
            <li className="nav-item">
                <Link className="nav-link active" to="/">REACT TEST</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="#">Link</Link>
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