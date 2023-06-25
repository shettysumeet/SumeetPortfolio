import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Solana NFT Drop",
    imgSrc: "/project-imgs/SolanaNFT.png",
    code: "https://www.github.com",
    projectLink: "https://first-solana-nft-project-bgwlrw0yq-shettysumeet.vercel.app/",
    tech: ["React", "Nextjs", "Sytled Components", "SolanaSDK"],
    description:
      "A NFT minting website to sell generative art",
    modalContent: (
      <>
        <p>
         Worked on this project during the peak NFT season of 2021 bull market.
        </p>
        <p>
          The tech stack is based on React, Nextjs with the custom Styled components,
          connected to Solana blockchain for minting NFTs using Metaplex & Arweave.
        </p>
      </>
    ),
  },
  {
    title: "Personal Portfolio",
    imgSrc: "/project-imgs/PersonalPortfolio.png",
    code: "https://www.github.com",
    projectLink: "https://www.github.com",
    tech: ["React", "Nextjs", "Sytled Components"],
    description:
      "A self personal portfolio",
    modalContent: (
      <>
        <p>
         Personal Portfolio page.
        </p>
        <p>
          The tech stack is based on React & Nextjs with the custom Styled components.
        </p>
      </>
    ),
  }
];
