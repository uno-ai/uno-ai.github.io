import React from "react";
import Header from "src/components/Header";

const PageLayout = ({ children }: { children: any }) => {
  return (
    <section className="flex flex-col flex-grow gap-10 w-screen h-screen overflow-auto">
      <Header />

      {children}
    </section>
  );
};

export default PageLayout;
