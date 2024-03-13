import Carousel from 'react-bootstrap/Carousel';
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

export default function Certificates() {
    return (
        <QueryClientProvider client={queryClient}>
            <CertificatesContent />
        </QueryClientProvider>
    )
}

function CertificatesContent() {
    const { isFetching, isError, data, error } = useQuery({
        queryKey: ['certificates'],
        queryFn: () => {
            return getDocs(collection(db, 'certificates'))
                .then((snapshot) => snapshot.docs.map(doc => ({...doc.data(), id: doc.id})))
        }
    })

    const certificateEl = data?.map((item) => {
        return (
            <Carousel.Item key={item?.id}>
                <img src={item?.imgUrl} alt={item?.imgName} />
            </Carousel.Item>
        )
    })

    if (isFetching) {
        return (
            <section className="certificates">
                <h2 className="section__title section__title--certificates">Certificates</h2>
                <Spinner animation="border" role="status" variant="dark">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </section>
        )
    }

    if (isError) {
        return (
            <section className="certificates">
                <h2 className="section__title section__title--certificates">Certificates</h2>
                <p>{error.message}</p>
            </section>
        )
    }

    return (
        <section className="certificates">
            <h2 className="section__title section__title--certificates">Certificates</h2>
            <Carousel data-bs-theme="dark">
                {certificateEl}
            </Carousel>
        </section>
    )
}

