import Spinner from 'react-bootstrap/Spinner';
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
        queryKey: ['questions'],
        queryFn: () => {
            return getDocs(collection(db, 'projects'))
                .then((snapshot) => snapshot.docs.map(doc => ({...doc.data(), id: doc.id})))
        }
    })

    const projectsEl = data?.map((item) => {
        return (
            <a href={`projects/${item?.id}`} className="portfolio__item">
                <img src={item?.projectImg} alt={item?.projectName} className="portfolio__img" />
            </a>
        )
    })

    if (isFetching) {
        return (
            <section className="my-work" id="projects">
                <h2 className="section__title section__title--work">My projects</h2>
                <p className="section__subtitle section__subtitle--work">A selection of my range of work</p>
                <Spinner animation="border" role="status" variant="light">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </section>
        )
    }

    if (isError) {
        return (
            <section className="my-work" id="projects">
                <h2 className="section__title section__title--work">My projects</h2>
                <p className="section__subtitle section__subtitle--work">A selection of my range of work</p>
                <p>{error.message}</p>
            </section>
        )
    }

    return (
        <section className="my-work" id="projects">
            <h2 className="section__title section__title--work">My projects</h2>
            <p className="section__subtitle section__subtitle--work">A selection of my range of work</p>
            
            <div className="portfolio">
                {projectsEl}
                {projectsEl}
                {projectsEl}
                {projectsEl}
                {projectsEl}
                {projectsEl}
            </div>
        </section>
    )
}