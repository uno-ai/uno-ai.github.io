import React from "react";
import PageLayout from "src/Layouts/PageLayout";

const Work = () => {
  return (
    <PageLayout>
      <main className="flex flex-col flex-grow gap-20 px-32 mx-10 mb-10 border-x-2 border-black overflow-auto">
        <h4 className="grid py-20 text-8xl tracking-wider font-medium border-b border-black">
          <span>A LITTLE</span>
          <span>ABOUT</span>
          <span>ME</span>
        </h4>

        <section className="flex flex-col flex-grow gap-10">
          <span className="uppercase text-base font-medium">WHO AM I</span>
          <article className="grid">
            <img src="/about-me/who-am-i.png" alt="who am i" />
            <caption className="justify-self-end py-2 uppercase text-xs">
              Behind is the paranomic view of Mexico City from the balcony of
              Chapultepec Castle
            </caption>
          </article>
          <article className="flex items-start gap-40">
            <article className="grid gap-1">
              <h4 className="text-4xl font-medium">Kaixin Huang</h4>
              <span className="text-sm">Frontend Engineer</span>
            </article>
            <article className="grid gap-1 text-2xl">
              <span>
                Graduated from UCSD with BSc in Data Science in June 2021
              </span>
              <span>
                Found passion and motivation for frontend since August 2021
              </span>
              <span>Self-studied frontend in November 2021 for 2 months</span>
              <span>Has been working for Uno.ai since March 2022</span>
            </article>
          </article>
        </section>
      </main>
    </PageLayout>
  );
};

export default Work;
