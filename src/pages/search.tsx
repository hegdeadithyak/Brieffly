import React, { useState, useEffect, useRef } from 'react';
import "src/app/globals.css";
import { Search } from 'lucide-react';
import { gsap } from 'gsap';
import { useRouter } from 'next/router';


const AnimatedSearchPage: React.FC = () => {
    const [query, setQuery] = useState('');
    const titleRef = useRef(null);
    const formRef = useRef(null);
    
    const router = useRouter();
    

    useEffect(() => {
        gsap.from(titleRef.current, {
            duration: 1.5,
            y: -100,
            opacity: 0,
            ease: "power4.out"
        });

        gsap.from(formRef.current, {
            duration: 1.5,
            width: 0,
            opacity: 0,
            ease: "power4.inOut",
            delay: 0.5
        });
    }, []);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        router.push("/card",{
            query : query
        })
        gsap.to(formRef.current, {
            duration: 0.3,
            scale: 1.1,
            yoyo: true,
            repeat: 1,
            ease: "power2.inOut"
        });
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black">
            <div className="w-full max-w-2xl px-4">
                <h1 ref={titleRef} className="text-4xl font-bold text-center mb-8 text-white">Revision Search</h1>
                <form ref={formRef} onSubmit={handleSubmit} className="relative">
                    <div className="relative">
                        <input
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="What do you want to revise briefly?"
                            className="w-full p-4 pr-12 text-xl border-2 border-gray-300 rounded-full focus:outline-none focus:border-white transition-all duration-300 shadow-md hover:shadow-lg"
                        />
                        <button
                            type="submit"
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors duration-300"
                        >
                            <Search size={24} />
                        </button>
                    </div>
                    <button
                        className="mt-8 w-full p-4 text-xl text-white bg-blue-500 rounded-full hover:bg-blue-600 transition-colors duration-300"
                        onClick={handleSubmit}
                    >
                        Search
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AnimatedSearchPage;