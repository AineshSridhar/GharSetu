import React from "react";
import {useHistory} from "react-router-dom";

const Login = () => {
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[error, setError] = useState('');
    
    const history = useHistory();

    const handleSubmit = async(e) => {
        e.preventDefault();
    }

    try{
        const response = await fetch("http://localhost:5000/api/login", {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json',
            },
            body: JSON.stringify({email, password});
        });
        const data = await response.json();

        if (response.ok){
            localStorage.setItem('token', data.token)
            history.push('/dashboard');
        } else {
            setError(data.message || "Invalid email or password");
        }
    } catch (error){
        setError('Something went wrong, please try again later');
        console.error(error);
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-6">Login</h2>
        
        <form onSubmit={handleSubmit}>
            <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-semibold mb-2">Email</label>
            <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            </div>
            
            <div className="mb-6">
            <label htmlFor="password" className="block text-lg font-semibold mb-2">Password</label>
            <input
                type="password"
                id="password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            </div>
            
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
            
            <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
            Login
            </button>
            
            <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
                Don't have an account?{' '}
                <a href="/register" className="text-blue-600 hover:underline">
                Register here
                </a>
            </p>
            </div>
        </form>
        </div>
    </div>
    );
};
export default Login;