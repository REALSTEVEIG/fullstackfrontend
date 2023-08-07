import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

export default function AllPosts() {
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();

    const fetchPosts = async () => {
        try {
            const token = await localStorage.getItem('token');

            console.log("Token from local storage:", token)
            
            const response = await axios.get("https://fullstackbackend.azurewebsites.net/api/v1/posts", {
                headers: {
                Authorization: `Bearer ${token}`,
                },
            });

            console.log("API response:", response.data);

            

            setPosts(response.data.posts);
        } catch (err) {
            console.error(err);
            navigate('/login');
        }
    };

    const handleLogout = () => {
        // Clear token from local storage
        localStorage.removeItem('token');
        // Redirect to login page after logout
        navigate('/login');
    };

    return (
        <div>
            <h1>All Posts</h1>
            <button onClick={fetchPosts}>Fetch Posts</button>
            {Array.isArray(posts) && posts.length > 0 ? (
                <ul>
                    {posts.map((post) => (
                        <li key={post._id}>
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Click on the button above to fetch all posts.</p>
            )}
    
            <button onClick={handleLogout}>
                <Link to="/">Logout</Link>
            </button>
        </div>
    );    
}
