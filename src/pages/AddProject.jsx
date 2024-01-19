import { useState } from 'react';
import { Link } from 'react-router-dom';
import { doc, setDoc } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { db, auth } from '/api';

export default function AddProject() {
    const [formData, setFormData] = useState({});
    const [user, loading, error] = useAuthState(auth);

    const handleFormChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }
    const addProject = async (e) => {
        e.preventDefault();
        const str = formData.projectName.trim().toLowerCase().split(' ').join('-');
        await setDoc(doc(db, 'projects', str), {
            projectName: formData.projectName,
            projectImg: formData.projectImg,
            technology: formData.technology,
            githubLink: formData.githubLink,
            liveLink: formData.liveLink,
            description: formData.description
        });
        setFormData({});
        alert('Project Added');
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
            <div className='add-project-container'>
                <h2>Add Project</h2>
                <form onSubmit={addProject}>
                    <input onChange={handleFormChange} value={formData.name} type="text" name="projectName" placeholder="Project Name" required />
                    <input onChange={handleFormChange} value={formData.name} type="text" name="projectImg" placeholder="Project Image Link" required />
                    <input onChange={handleFormChange} value={formData.name} type="text" name="technology" placeholder="Technology Used" required />
                    <input onChange={handleFormChange} value={formData.name} type="text" name="githubLink" placeholder="Github Link" />
                    <input onChange={handleFormChange} value={formData.name} type="text" name="liveLink" placeholder="Live Link" />
                    <textarea onChange={handleFormChange} value={formData.name} type="text" name="description" placeholder="Description" required />
                    <button type="submit">Add Project</button>
                </form>
                <Link to="/add-certificate">Add Certificate</Link>
                <Link to="/admin">Admin Page</Link>
            </div>
        );
    }

    return (
        <div className='error'>
            <p>Please sign in to add a project</p>
            <Link to="/admin">Sign In</Link>
        </div>
    );
}