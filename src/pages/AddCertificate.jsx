import { useState } from 'react';
import { Link } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { db, auth } from '/api';

export default function AddCertificate() {
    const [formData, setFormData] = useState({});
    const [user, loading, error] = useAuthState(auth);

    const handleFormChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    const addCertificate = async (e) => {
        e.preventDefault();
        const str = formData.imgName.trim().toLowerCase().split(' ').join('-');
        await setDoc(doc(db, 'certificates', str), {
            imgName: formData.imgName,
            imgUrl: formData.imgUrl
        })
        setFormData({});
        alert('Certificate Added');
    }

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
            <div className='add-certificate-container'>
                <h2>Add Certificate</h2>
                <form onSubmit={addCertificate}>
                    <input onChange={handleFormChange} value={formData.imgName} type="text" name="imgName" placeholder="Certificate Name" required />
                    <input onChange={handleFormChange} value={formData.imgUrl} type="text" name="imgUrl" placeholder="Certificate Image Link" required />
                    <button type="submit">Add Certificate</button>
                </form>
                <Link to="/add-project">Add Project</Link>
                <Link to="/admin">Admin Page</Link>
            </div>
        )
    }

    return (
        <div>
            <p>Please sign in to add a certificate</p>
            <Link to="/admin">Sign In</Link>
        </div>
    )
}