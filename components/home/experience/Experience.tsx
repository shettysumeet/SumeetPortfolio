import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "Generali",
    position: "Senior Java Developer / Technical Architect",
    time: "Jan 2023 - Present",
    location: "Trieste, Italy",
    description:
      "Design & develop aggregator microservices for online comparision of issurance offers, services for marketing teams, batch operations",
    tech: [
      "Java",
      "Spring Boot",
      "Spring WebFlux",
      "Spring Batch",
      "Swagger",
      "JavaScript",
      "Kubernetes",
      "Docker",
      "Kinesis",
      "AWS",
      "Google Cloud",
      "API Gateway",
      "Splunk",
      "Grafana",
      "Git",
      "Jenkins",
      "Jira",
      "Confluence",
      "PostgreSQL",
      "Liquibase",
      "Junit",
      "Mockito",
      "WireMock",
      "Test Containers",
      "MockServer"
    ],
  },
  {
    title: "Intesa Sanpaolo",
    position: "Senior Java Developer / Technical Architect",
    time: "Oct 2013 - Dec 2022",
    location: "Milan, Italy",
    description:
      "Trade Finance product customization & rollout to 20 foreign branches. Test Automation.",
    tech: [
      "Java",
      "JavaScript",
      "Spring Boot",
      "Spring Batch",
      "Hibernate",
      "Eximbills Enterprise",
      "Jazz",
      "Weblogic",
      "JBoss",
      "Google Cloud",
      "Microservices",
      "Kubernetes",
      "UFT",
      "ALM",
      "Oracle",
      "Erwin",
      "Birt"
    ],
  },
  {
    title: "ING Direct France",
    position: "Senior Java Developer",
    time: "July 2012 - Sep 2013",
    location: "Paris, France",
    description:
      "Complete redesign of legacy code base to develop Restful web services using Spring.",
    tech: [
      "Java",
      "J2EE",
      "Spring",
      "JAX-RS",
      "JAX-WS",
      "Apache CXF",
      "Hibernate",
      "Oracle"
    ],
  },
  {
    title: "ABN AMRO",
    position: "Java Developer",
    time: "Jan 2009 - June 2012",
    location: "Mumbai, India/ Amsterdam, Netherlands",
    description:
      "Responsible for the maintenance and addition of new features to existing credit & risk management applications, part of the team that built a security layer for the internet banking application.",
    tech: [
      "Java",
      "Hibernate",
      "Javascript",
      "Weblogic",
      "IBM mq",
      "Oracle",
      "SVN",
      "KAM",
      "SEPA Payments"
    ],
  },
  {
    title: "NSDL",
    position: "Java Developer",
    time: "July 2008 - Dec 2008",
    location: "Mumbai, India",
    description:
      "Responsible for the maintenance and addition of new features to an existing application.",
    tech: [
      "Java",
      "JavaScript",
      "Weblogic",
      "Struts",
      "Unix",
      "Eclipse"
    ],
  },
];
