'use client'

import { Link } from "react-router-dom"

export default function Hero() {

    return (
        <div className="bg-zinc-900">
            <div className="relative isolate px-6 lg:px-8">
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
                <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                    <div className="mb-8 sm:flex sm:justify-center text-center">
                        <div className="relative rounded-full px-3 py-1 text-sm/6 text-white ring-1 ring-white/10 hover:ring-gray-900/20">
                            Announcing our upcoming offline event <strong>Capture Ops</strong>.{' '}
                            <Link to="/redirect/capture_ops" className="font-semibold text-indigo-600">
                                <span aria-hidden="true" className="absolute inset-0" />
                                Register Now <span aria-hidden="true">&rarr;</span>
                            </Link>
                        </div>
                    </div>
                    <div className="text-center">
                        <h1 className="text-3xl font-semibold tracking-tight text-balance pb-5 text-white sm:text-3xl">
                            Google Developer Groups On Campus Amity University Presents
                        </h1>
                        <h1 className="shineText text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
                            Build with AI
                        </h1>
                        <p className="mt-8 text-lg font-medium text-pretty text-white sm:text-xl/8">
                            A three-week-long free Artificial Intelligence Cohort where you will learn about Artificial Intelligence and how to develop projects.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <Link
                                to="/redirect/register"
                                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Register
                            </Link>
                            <Link to="/redirect/calendar" className="text-sm/6 font-semibold text-white">
                                See Timeline <span aria-hidden="true">→</span>
                            </Link>
                        </div>
                        <p className="mt-10 text-sm font-medium text-pretty text-white">
                        *This cohort is also open to students who are not enrolled at Amity University.                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
