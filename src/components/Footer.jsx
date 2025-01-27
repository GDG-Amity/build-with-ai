import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="fixed bottom-0 w-full py-2 border-t border-white/10 bg-zinc-900">
            <div className="text-center flex justify-around items-center">
                <Link to="/redirect/rajat">
                    <p className="text-sm text-white/60">
                        Built By <span className="underline">rajatrajput.dev</span>
                    </p>
                </Link>
                <Link to="/redirect/linktree">
                    <p className="text-sm text-white">Join our Community ❤️</p>
                </Link>
            </div>
        </div>
    );
};

export default Footer;
