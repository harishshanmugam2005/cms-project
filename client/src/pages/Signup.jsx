import React,{ useState} from 'react';

function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Password:', password);
        alert('Sign up successful!');
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md border-2 border-blue-200 rounded-lg">
                <h2 className=" font- text-4xl font-bold mb-6 text-center text-blue-700">Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-purple-700 font-semibold mb-2">Name:</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="w-full px-3 py-2 border border-purple-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 bg-purple-50"
                        />
                    </div>
                    <br />
                    <div>
                        <label className="block text-pink-700 font-semibold mb-2">Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-3 py-2 border border-pink-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 bg-pink-50"
                        />
                    </div>
                    <br />
                    <div>
                        <label className="block text-blue-700 font-semibold mb-2">Password:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full px-3 py-2 border border-blue-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 bg-blue-50"
                        />
                    </div>
                    <br />
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white py-2 px-4 rounded hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 transition-colors font-semibold shadow"
                    >
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
}

export default SignUp;
