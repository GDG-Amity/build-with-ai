import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Redirect = () => {
    const { to_url } = useParams();
    const navigate = useNavigate();
    const [targetLink, setTargetLink] = useState("/");
    const [loading, setLoading] = useState(true); 

    const urlMapping = {
        team: '/team',
        calendar: 'https://nova-moustache-5c2.notion.site/Objective-186404c2074e80398ad3e79cd9221704',
        resources: 'https://nova-moustache-5c2.notion.site/Build-with-AI-186404c2074e80ccb26bc48b21c9e84a',
        capture_ops: 'https://gdg.community.dev/events/details/google-gdg-on-campus-amity-university-noida-india-presents-capture-ops/',
        linktree:'https://linktr.ee/gdgcamity',
        rajat:'https://linkedin.com/in/rajatrajput2004',
        register:'/register',
        github:'https://github.com/GDG-Amity/build-with-ai'
    };

    useEffect(() => {
        const apiUrl = ``;

        const handleRedirection = async () => {
            try {
                if (to_url && urlMapping[to_url]) {
                    const target = urlMapping[to_url];
                    setTargetLink(target);

                    await axios.post(apiUrl, {
                        status: 'valid',
                        target,
                    });

                    if (target.startsWith('http')) {
                        window.location.href = target;
                    } else {
                        navigate(target, { replace: true });
                    }
                } else {
                   
                    await axios.post(apiUrl, {
                        status: 'invalid',
                    });

                 
                    navigate('/', { replace: true });
                }
            } catch (error) {
                console.error('Error during API call:', error);
            } finally {
                setLoading(false);
            }
        };

        handleRedirection();
    }, [to_url, navigate]);

    return (
        <div>
            <div
                aria-hidden="true"
                className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            >
                <div
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                />
            </div>
            {loading ? (
                <h1 className="text-center text-4xl mt-[400px]">Fetching redirection link.</h1>
            ) : (
                <h1 className="text-center text-4xl mt-[400px]">
                    Redirecting to an external link. Click <Link to={targetLink} className="underline">here</Link> if not redirected within 5 seconds.
                </h1>
            )}
        </div>
    );
};

export default Redirect;
