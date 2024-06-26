import Spinner from 'react-bootstrap/Spinner';
import { Link } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import { db } from '/api';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
        }
    }
});

export default function Projects() {
    return (
        <QueryClientProvider client={queryClient}>
            <ProjectsContent />
        </QueryClientProvider>
    )
}

function ProjectsContent() {
    const { isFetching, isError, data, error } = useQuery({
        queryKey: ['projects'],
        queryFn: () => {
            return getDocs(collection(db, 'projects'))
                .then((snapshot) => snapshot.docs.map(doc => ({...doc.data(), id: doc.id})))
        }
    })

    const projectsEl = data?.map((item) => {
        return (
            <Link to={`${item?.id}`} className="portfolio__item" key={item?.id} style={{"--item-name": `"${item?.projectName}"`}}>
                <img src={item?.projectImg} alt={item?.projectName} className="portfolio__img" />
            </Link>
        )
    })

    if (isFetching) {
        return (
            <section className="my-work" id="projects">
                <h2 className="section__title">Projects</h2>
                <Spinner animation="border" role="status" variant="dark">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </section>
        )
    }

    if (isError) {
        return (
            <section className="my-work" id="projects">
                <h2 className="section__title">Projects</h2>
                <p>{error.message}</p>
            </section>
        )
    }

    return (
        <section className="my-work" id="projects">
            <h2 className="section__title">Projects</h2>
            
            <div className="portfolio">
                {projectsEl}
            </div>
            <Link to="/certificates" className="link-btn">View Certificates</Link>
        </section>
    )
}