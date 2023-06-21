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
            I completed Nest Academy's rigorous coding bootcamp, progressing
            through all four levels in just three years. The program provided a
            solid foundation in technical and interpersonal skills for software
            engineering (Full Stack).
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />
        <div className="grid grid-cols-1 gap-8 mx-auto lg:mx-0 md:grid-cols-2">
          <div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 ">
            <Card>
              <article className="relative w-full h-full p-4 md:p-8">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-xs text-zinc-100">
                    June 15, 2022 - Oct 1, 2022
                  </div>
                </div>

                <h2
                  id="featured-post"
                  className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                >
                  Pinecone
                </h2>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  I have worked in Pinecone LLC company as an internship
                  software engineer plus assistant teacher. In there I have
                  participated in many projects and successfully made some of it
                  to the production level. (handy.mn, medicine application,
                  etc..) After 4 months of internship I was offered a job but I
                  couldn't be available due to high school.
                </p>
              </article>
            </Card>
            <Card>
              <article className="relative w-full h-full p-4 md:p-8">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-xs text-zinc-100">
                    June 15, 2021 - Oct 1, 2021
                  </div>
                </div>

                <h2
                  id="featured-post"
                  className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                >
                  Erxes
                </h2>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  Served as a front-end developer in the erxes.io project, a web
                  development endeavor focused on delivering an interactive and
                  user-friendly platform. Employed the React framework
                  exclusively, adhering to best practices and utilizing
                  cutting-edge techniques to enhance the user experience.
                  Actively contributed to the development of the erxes
                  documentation web, ensuring the accessibility and
                  comprehensibility of project-related information.
				  After 4 months of internship I was offered a job but I
                  couldn't be available due to high school.
                </p>
              </article>
            </Card>
          </div>
          <div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 ">
            <Card>
              <article className="relative w-full h-full p-4 md:p-8">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-xs text-zinc-100">June 1, 2019 - June 1, 2022</div>
                </div>

                <h2
                  id="featured-post"
                  className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                >
                  Nest Academy
                </h2>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  Engaged as a full stack developer in a voluntary capacity for
                  the development of a web platform dedicated to facilitating
                  volunteer activities. Employed a pure React framework in
                  conjunction with Firebase as the core technologies utilized
                  for this project.
                  <Link
                    href="https://volu-test.web.app/trailer"
                    target="_blank"
                  >
                    (<u>Volu</u>)
                  </Link>
                  <br /> Employed a tech stack comprising Material-UI (MUI),
                  React, MongoDB, and GraphQL to design and implement the system
                  effectively. This involvement was part of the Chandmani
                  project. Actively contributed as a mobile developer for the
                  Nest Academy's application, utilizing React Native as the
                  primary framework.
                </p>
              </article>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
