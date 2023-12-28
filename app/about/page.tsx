import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import Link from "next/link";

export default async function ProjectsPage() {
  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            About me
          </h2>
          <p className="mt-4 text-zinc-400">
            I am a very open minded Full Stack Developer, who like to try out
            new things and walk up to date. Currently I am working in Gradfify
            and OnCourse as a Full Stack Developer. Checkout my works at my
            github -
            <Link href="https://github.com/Bilguun1324">
              <u>Bilguun1324</u>
            </Link>
          </p>
          <p className="mt-4 leading-8 duration-150 text-zinc-300">
            Front End Skills: React, Next JS (TypeScript), React Native,
            Material UI, Tailwind
            <br />
            Back End Skills: Firebase, MongoDB, GraphQL, Node JS, Express JS,
            AWS Serverless
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />
        <div className="grid grid-cols-1 gap-8 mx-auto lg:mx-0 md:grid-cols-2">
          <div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 ">
            <Card>
              <article className="relative w-full h-full p-4 md:p-8">
                <h2
                  id="featured-post"
                  className="text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                >
                  <Link href="https://odi.openmesh.network/">
                    <u>OpenMesh Hackathon</u>
                  </Link>
                </h2>
                <div className="flex items-center justify-between gap-2">
                  <div className="text-xs text-zinc-400 mt-4 font-bold">
                    Guest Speaker, Dec 15, 2023 - Dec 22, 2023
                  </div>
                </div>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  <li>
                    Personally invited to present Scrum and Agile methodologies
                    and their applications within digital transformation at the
                    world's largest hackathon.
                  </li>
                  <li>
                    Educated and provided insights of the MECE framework and
                    Agile philosophies to individual participants and groups at
                    a privately hosted conference – Tank Stream Labs.
                  </li>
                </p>
              </article>
            </Card>
            <Card>
              <article className="relative w-full h-full p-4 md:p-8">
                <h2
                  id="featured-post"
                  className="text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                >
                  <Link href="https://www.pinecone.academy/">
                    <u>Pinecone Academy</u>
                  </Link>
                </h2>

                <div className="flex items-center justify-between gap-2">
                  <div className="text-xs text-zinc-400 mt-4 font-bold">
                    Full Stack Developer, June 1, 2022 - Oct 1, 2022
                  </div>
                </div>

                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  <li>
                    Co-created the front-end infrastructure for nestacademy.mn
                    and increased loading speed using Next JS and Vercel.
                  </li>
                  <li>
                    Educated entry-level students on the fundamentals of HTML,
                    CSS and JavaScript, achieving an 95% satisfaction rating
                    from students.
                  </li>
                  <li>
                    Modelled the back-end infrastructure for medical-track-app’s
                    using MongoDB and GraphQL which greatly optimised loading
                    speeds and application features.
                  </li>
                </p>
              </article>
            </Card>
            <Card>
              <article className="relative w-full h-full p-4 md:p-8">
                <h2
                  id="featured-post"
                  className="text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                >
                  <Link href="https://www.npmjs.com/package/fastt">
                    <u>Fastprojecting</u>
                  </Link>
                </h2>

                <div className="flex items-center justify-between gap-2">
                  <div className="text-xs text-zinc-400 mt-4 font-bold">
                    Full Stack Developer, June 1, 2022 - Oct 1, 2022
                  </div>
                </div>

                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  Implemented development accelerating library – A system which
                  automated project initialisation and reuse of already created
                  modules.
                </p>
              </article>
            </Card>
          </div>
          <div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 ">
            <Card>
              <article className="relative w-full h-full p-4 md:p-8">
                <h2
                  id="featured-post"
                  className="text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                >
                  <Link href="https://www.pinecone.academy/">
                    <u>Pinecone Academy</u>
                  </Link>
                </h2>
                <div className="flex items-center justify-between gap-2">
                  <div className="text-xs text-zinc-400 mt-4 font-bold">
                    Website Developer Student, June 1, 2019 - June 1, 2022
                  </div>
                </div>

                <p className="leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  <li>
                    Engaged as a full stack developer in a voluntary capacity
                    for the development of a web platform dedicated to
                    facilitating volunteer activities. Employed a pure React
                    framework in conjunction with Firebase as the core
                    technologies utilized for this project -
                    <Link
                      href="https://volu-test.web.app/trailer"
                      target="_blank"
                    >
                      <u>Volu</u>
                    </Link>
                  </li>
                  <li>
                    Employed a tech stack comprising Material-UI (MUI), React,
                    MongoDB, and GraphQL to design and implement the system
                    effectively. This involvement was part of the Chandmani
                    project.
                  </li>
                  <li>
                    Actively contributed as a mobile developer for the Nest
                    Academy's application, utilizing React Native as the primary
                    framework.
                  </li>
                </p>
              </article>
            </Card>
            <Card>
              <article className="relative w-full h-full p-4 md:p-8">
                <h2
                  id="featured-post"
                  className="text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                >
                  <Link href="https://erxes.io/">
                    <u>Erxes INC</u>
                  </Link>
                </h2>
                <div className="flex items-center justify-between gap-2">
                  <div className="text-xs text-zinc-400 mt-4 font-bold">
                    Front End Developer, June 15, 2021 - Oct 1, 2021
                  </div>
                </div>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  <li>
                    Developed a user-facing web with React to optimise the UX/UI
                    for end-users.
                  </li>
                  <li>
                    On-boarded newly recruited developers in “erxes” by creating
                    and presenting an introduction guide.
                  </li>
                </p>
              </article>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
