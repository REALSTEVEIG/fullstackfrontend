import { Link } from "react-router-dom"

export default function App() {
    return (
        <div>
            <h1>Welcome to React frontend App</h1>
            <button>
                <Link to="/login">Login</Link>
            </button>
        </div>
    )
}