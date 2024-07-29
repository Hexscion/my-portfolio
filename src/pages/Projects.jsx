import Spinner from 'react-bootstrap/Spinner';
import { Link } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import { db } from '/api';
import { useEffect, useState } from 'react';
import asset_01 from '/src/assets/asset_01.svg';
import asset_02 from '/src/assets/asset_02.svg';
import asset_03 from '/src/assets/asset_03.svg';
import asset_04 from '/src/assets/asset_04.svg';

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
    const [projectsEl, setProjectsEl] = useState([]);

    useEffect(() => {
        if (data) {
            data.forEach(item => {
                const img = new Image();
                img.src = item.projectImg;
            });

            setProjectsEl(() => {
                return data.map((item, index) => {
                    return (
                        <Link to={`${item?.id}`} className="portfolio__item" key={item?.id} style={{"--item-name": `"${item?.projectName}"`, "--item-delay": `${(index+1) * 100}ms`}}>
                            <img src={item?.projectImg} alt={item?.projectName} className="portfolio__img" />
                        </Link>
                    )
                })
            });
        }
    }, [data]);

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

    if (data && projectsEl) {
        return (
            <section className="my-work" id="projects">
                <h2 className="section__title">Projects</h2>
                <div className="portfolio">
                    {projectsEl}
                </div>
                <Link to="/certificates" className="link-btn">View Certificates</Link>
                <div className='asset' style={{width: '128px', height: '128px', top: '6rem', left: '1rem'}}>
                    <img src={asset_01} alt="Asset 01" className='asset-image' />
                </div>
                <div className='asset' style={{width: '64px', height: '64px', top: '14rem', left: '6rem'}}>
                    <img src={asset_01} alt="Asset 01" className='asset-image up-down-custom-animation' />
                </div>
                <div className='asset' style={{width: '32px', height: '32px', top: '14rem', left: '2rem'}}>
                    <img src={asset_01} alt="Asset 01" className='asset-image left-right-custom-animation' />
                </div>
                <div className='asset' style={{width: '128px', height: '128px', bottom: '2rem', right: '3rem'}}>
                    <img src={asset_03} alt="Asset 03" className='asset-image rotate-clockwise-custom-animation' />
                </div>
                <div className='asset' style={{width: '128px', height: '128px', top: '20rem', right: '1rem'}}>
                    <img src={asset_02} alt="Asset 02" className='asset-image' />
                </div>
                <div className='asset' style={{width: '128px', height: '128px', top: '20rem', right: '1rem'}}>
                    <img src={asset_02} alt="Asset 02" className='asset-image' style={{width: '90%', height: '90%'}}/>
                </div>
                <div className='asset' style={{width: '128px', height: '128px', top: '20rem', right: '1rem'}}>
                    <img src={asset_02} alt="Asset 02" className='asset-image' style={{width: '80%', height: '80%'}} />
                </div>
                <div className='asset' style={{width: '128px', height: '128px', bottom: '20rem', left: '1rem'}}>
                    <img src={asset_04} alt="Asset 04" className='asset-image' />
                </div>
                <div className='asset' style={{width: '128px', height: '128px', bottom: '20rem', left: '1rem'}}>
                    <img src={asset_04} alt="Asset 04" className='asset-image' style={{width: '60%', height: '60%'}} />
                </div>
            </section>
        )
    }

    return (
        <section className="my-work" id="projects">
            <h2 className="section__title">Projects</h2>
            <Spinner animation="border" role="status" variant="dark">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </section>
    )
}