'use client'

import { Link } from "react-router-dom"

export default function Team() {
    const people = [
        {
            name: 'Kanchan Rai',
            role: 'Program Manager',
            imageUrl:'https://www.mlsc-amity.tech/assets/members/kanchan.jpg',
        },
        {
            name: 'Rajat Rajput',
            role: 'Program Manager',
            imageUrl:'/rajat.png',
        },
        {
            name: 'Shashank Upadhyay',
            role: 'Program Management Team',
            imageUrl:'/shanks.png',
        },
        {
            name: 'Shiven Vasan',
            role: 'Program Management Team',
            imageUrl:'https://www.mlsc-amity.tech/assets/members/shiven.jpg',
        },
    ]
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
            
            <div className="py-24 sm:py-32">
                <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
                    <div className="max-w-xl">
                        <h2 className="text-3xl font-semibold tracking-tight text-pretty sm:text-4xl">
                            Team
                        </h2>
                        <p className="mt-6 text-lg/8">
                            We’re a dynamic team fueled by a passion for AI, dedicated to empowering students to explore, learn, and create groundbreaking solutions together.
                        </p>
                    </div>
                    <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                        {people.map((person) => (
                            <li key={person.name}>
                                <div className="flex items-center gap-x-6">
                                    <img alt="" src={person.imageUrl} className="size-16 rounded-full" />
                                    <div>
                                        <h3 className="text-base/7 font-semibold tracking-tight text-white">{person.name}</h3>
                                        <p className="text-sm/6 font-semibold text-indigo-600">{person.role}</p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
