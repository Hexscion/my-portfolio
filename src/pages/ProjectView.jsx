import Spinner from 'react-bootstrap/Spinner';
import parse from 'html-react-parser';
import { Link, useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import { db } from '/api';
import { IoMdArrowBack } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import Error from './Error';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
        }
    }
});

export default function ProjectView() {
    return (
        <QueryClientProvider client={queryClient}>
            <ProjectViewContent />
        </QueryClientProvider>
    )
}

function ProjectViewContent() {
    const { id } = useParams();
    const { isFetching, isError, data, error } = useQuery({
        queryKey: ['projects'],
        queryFn: () => {
            return getDoc(doc(db, 'projects', id))
                .then((snapshot) => ({...snapshot.data(), id: snapshot.id}))
        }
    })

    const projectsEl = data?.projectName 
            ?
            <>
                <Link to="/projects" className="back-link"><IoMdArrowBack size='24px' />Back to projects</Link>
                <section className="portfolio-intro">
                    <h1 className="section__title--portfolio">
                        {data?.projectName} <strong>{data?.projectType}</strong>
                    </h1>
                    <p className="section__subtitle section__subtitle--portfolio">{data?.technology}</p>
                    <img src={data?.projectImg} alt={data?.projectName} className="project__img" />
                </section>
                
                
                <section className="portfolio-item-individual">
                    <div >
                        {data?.githubLink !== '' && <Link target="_blank" className="external-link" to={data?.githubLink}><FaGithub /> GitHub Repo</Link>}
                        {data?.liveLink !== '' && <Link target="_blank" className="external-link" to={data?.liveLink}><FaEye /> Live version</Link>}
                    </div>
                    <p>{parse(data?.description || '')}</p>
                </section>
            </>
            :
            <Error />

    if (isFetching) {
        return (
            <section className="portfolio-item-individual">
                <Spinner animation="border" role="status" variant="dark">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </section>
        )
    }

    if (isError) {
        return (
            <section className="portfolio-item-individual">
                <p>{error.message}</p>
            </section>
        )
    }

    return (
        <>
            {projectsEl}
        </>
    )
}