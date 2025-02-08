'use client';

import { useState } from "react";
import { useRouter } from 'next/navigation';

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setError(null);
        
        try {
            const response = await fetch(`https://api.malicc.store/api/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: username,  // Or 'name' if your API expects username
                    password: password
                }),
                credentials: 'include'  // Keep this for cookies
            });

            if (!response.ok) {
                const errorData = await response.json();
                setError(errorData.message || 'Invalid credentials');
                return;
            }

            router.push('/dashboard');
        } catch (error) {
            setError('Something went wrong. Please try again.\n' + error);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-black-100">
            <div className="w-full max-w-md p-6 bg-slate-800 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold text-center text-white">Login</h1>
                {error && <p className="mt-4 text-sm text-red-500">{error}</p>}
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-white">
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            className="w-full px-3 py-2 mt-1 border rounded shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter your username"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-white">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full px-3 py-2 mt-1 border rounded shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter your password"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 font-medium text-white bg-blue-500 rounded hover:bg-blue-600"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}