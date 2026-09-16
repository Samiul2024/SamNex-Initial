import React, { useEffect, useState } from "react";

const Founder = () => {
    const [isImageOpen, setIsImageOpen] = useState(false);

    // Close fullscreen image with Escape key
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                setIsImageOpen(false);
            }
        };

        if (isImageOpen) {
            document.addEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "hidden";
        }

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "auto";
        };
    }, [isImageOpen]);

    return (
        <>
            <section className="min-h-screen bg-gray-50 px-4 py-16">
                <div className="mx-auto max-w-6xl">

                    {/* Page Header */}
                    <div className="mb-12 text-center">
                        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
                            Leadership
                        </p>

                        <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
                            Meet Our Founder
                        </h1>

                        <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-blue-600" />
                    </div>

                    {/* Main Profile */}
                    <div className="overflow-hidden rounded-3xl bg-white shadow-xl">
                        <div className="grid items-center md:grid-cols-2">

                            {/* Image */}
                            <div className="flex justify-center bg-gradient-to-br from-blue-600 to-indigo-700 p-8 md:p-12">
                                <button
                                    type="button"
                                    onClick={() => setIsImageOpen(true)}
                                    className="group relative cursor-zoom-in focus:outline-none"
                                    aria-label="View founder image fullscreen"
                                >
                                    <div className="absolute -inset-1 rounded-2xl bg-white/30 blur transition duration-500 group-hover:bg-white/50" />

                                    <img
                                        src="https://res.cloudinary.com/dejhl0l7a/image/upload/v1783242831/portfolio_image_b7c0wf.jpg"
                                        alt="MD. Samiulla Hossen"
                                        className="relative h-72 w-72 rounded-2xl border-4 border-white object-cover shadow-2xl transition duration-500 group-hover:scale-105 md:h-96 md:w-96"
                                    />

                                    {/* Zoom indicator */}
                                    <div className="absolute bottom-4 right-4 rounded-full bg-black/60 px-4 py-2 text-sm font-medium text-white opacity-0 backdrop-blur-sm transition duration-300 group-hover:opacity-100">
                                        Click to enlarge
                                    </div>
                                </button>
                            </div>

                            {/* Information */}
                            <div className="p-8 md:p-12">

                                <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                                    Founder & Managing Director
                                </span>

                                <h2 className="mt-5 text-3xl font-bold text-gray-900 md:text-4xl">
                                    MD. Samiulla Hossen
                                </h2>

                                <p className="mt-6 leading-8 text-gray-600">
                                    MD. Samiulla Hossen is the founder and managing director of
                                    Samnex. With a passion for technology, innovation, and
                                    entrepreneurship, he leads the organization with a focus on
                                    creating meaningful and reliable solutions.
                                </p>

                                <p className="mt-4 leading-8 text-gray-600">
                                    His vision is to build a forward-thinking organization that
                                    combines innovation, quality, and integrity to create
                                    long-term value for customers and the community.
                                </p>

                                {/* Vision */}
                                <div className="mt-8 rounded-2xl border-l-4 border-blue-600 bg-gray-50 p-5">
                                    <h3 className="text-lg font-bold text-gray-900">
                                        Vision
                                    </h3>

                                    <p className="mt-2 leading-7 text-gray-600">
                                        Building innovative solutions through technology,
                                        dedication, and integrity.
                                    </p>
                                </div>

                                {/* Contact Information */}
                                <div className="mt-8 border-t border-gray-200 pt-7">
                                    <h3 className="text-xl font-bold text-gray-900">
                                        Contact
                                    </h3>

                                    <div className="mt-5 space-y-4">

                                        {/* Email */}
                                        <a
                                            href="mailto:mdsamiullahossen@gmail.com"
                                            className="group flex items-center gap-4 rounded-xl p-3 transition hover:bg-blue-50"
                                        >
                                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                                                ✉
                                            </div>

                                            <div>
                                                <p className="text-sm text-gray-500">Email</p>
                                                <p className="font-medium text-gray-800 group-hover:text-blue-600">
                                                    mdsamiullahossen@gmail.com
                                                </p>
                                            </div>
                                        </a>

                                        {/* Phone */}
                                        <a
                                            href="tel:+8801766768546"
                                            className="group flex items-center gap-4 rounded-xl p-3 transition hover:bg-green-50"
                                        >
                                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                                                ☎
                                            </div>

                                            <div>
                                                <p className="text-sm text-gray-500">Phone</p>
                                                <p className="font-medium text-gray-800 group-hover:text-green-600">
                                                    +8801766768546
                                                </p>
                                            </div>
                                        </a>

                                        {/* Location */}
                                        <div className="flex items-center gap-4 rounded-xl p-3">
                                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600">
                                                📍
                                            </div>

                                            <div>
                                                <p className="text-sm text-gray-500">Location</p>
                                                <p className="font-medium text-gray-800">
                                                    Khulna,
                                                    Bangladesh
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Social Links */}
                                <div className="mt-7 flex flex-wrap gap-3">

                                    {/* <a
                                        href="https://www.facebook.com/mdsamiullahossen20/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
                                    >
                                        Facebook
                                    </a> */}

                                    <a
                                        href="https://www.linkedin.com/in/md-samiulla-hossen/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="rounded-lg bg-gray-900 px-5 py-3 font-semibold text-white transition hover:bg-gray-800"
                                    >
                                        LinkedIn
                                    </a>

                                    <a
                                        href="mailto:mdsamiullahossen@gmail.com"
                                        className="rounded-lg border-2 border-gray-200 px-5 py-3 font-semibold text-gray-700 transition hover:border-blue-600 hover:text-blue-600"
                                    >
                                        Email Me
                                    </a>

                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Values */}
                    <div className="mt-16 grid gap-6 md:grid-cols-3">

                        <div className="rounded-2xl bg-white p-7 text-center shadow-md transition hover:-translate-y-1 hover:shadow-xl">
                            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-2xl">
                                💡
                            </div>

                            <h3 className="mt-5 text-xl font-bold text-gray-900">
                                Innovation
                            </h3>

                            <p className="mt-3 leading-7 text-gray-600">
                                Encouraging new ideas and modern approaches to solve
                                real-world problems.
                            </p>
                        </div>

                        <div className="rounded-2xl bg-white p-7 text-center shadow-md transition hover:-translate-y-1 hover:shadow-xl">
                            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-2xl">
                                🎯
                            </div>

                            <h3 className="mt-5 text-xl font-bold text-gray-900">
                                Excellence
                            </h3>

                            <p className="mt-3 leading-7 text-gray-600">
                                Continuously improving our work and maintaining high
                                standards.
                            </p>
                        </div>

                        <div className="rounded-2xl bg-white p-7 text-center shadow-md transition hover:-translate-y-1 hover:shadow-xl">
                            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-purple-100 text-2xl">
                                🤝
                            </div>

                            <h3 className="mt-5 text-xl font-bold text-gray-900">
                                Integrity
                            </h3>

                            <p className="mt-3 leading-7 text-gray-600">
                                Building lasting relationships through trust,
                                transparency, and responsibility.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* Fullscreen Image Modal */}
            {isImageOpen && (
                <div
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 p-4"
                    onClick={() => setIsImageOpen(false)}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Fullscreen founder image"
                >
                    {/* Close Button */}
                    <button
                        type="button"
                        onClick={() => setIsImageOpen(false)}
                        className="absolute right-5 top-5 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-3xl text-white backdrop-blur-sm transition hover:bg-white/20"
                        aria-label="Close fullscreen image"
                    >
                        &times;
                    </button>

                    {/* Fullscreen Image */}
                    <img
                        src="https://res.cloudinary.com/dejhl0l7a/image/upload/v1783242831/portfolio_image_b7c0wf.jpg"
                        alt="MD. Samiulla Hossen"
                        onClick={(event) => event.stopPropagation()}
                        className="max-h-[95vh] max-w-[95vw] rounded-lg object-contain shadow-2xl"
                    />
                </div>
            )}
        </>
    );
};

export default Founder;
