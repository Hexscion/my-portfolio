import { useState } from 'react';
import { useSignInWithEmailAndPassword, useSignOut, useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { auth } from '/api';

export default function Admin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
    const [signOut] = useSignOut(auth);

    if (error) {
        return (
            <div>
                <p className='status-message'>Error: {error.message}</p>
            </div>
        );
    }

    if (loading) {
        return <p className='status-message'>Loading...</p>;
    }

    if (user) {
        return (
            <div className='admin-page'>
                <h3>Signed In User: <span className='admin-email'>{user.email}</span></h3>
                <Link to="/add-project">Add Project</Link>
                <Link to="/add-certificate">Add Certificate</Link>
                <button onClick={async() => await signOut()}>Sign Out</button>
            </div>
        );
    }

    return (
        <div className='admin-container'>
            <div className='admin-form'>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                <button onClick={() => signInWithEmailAndPassword(email, password)}>Sign In</button>
            </div>
        </div>
    )
}