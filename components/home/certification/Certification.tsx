import { SectionHeader } from "@/components/utils/SectionHeader";
import { CertificationItem } from "./CertificationItem";

export const Certification = () => {
  return (
    <section className="section-wrapper" id="certification">
      <SectionHeader title="Certifications" dir="l" />
      {certification.map((item) => (
        <CertificationItem key={item.certificateName} {...item} />
      ))}
    </section>
  );
};

const certification = [
  {
    certificateName: "Google Cloud Certified Professional Cloud Architect",
    issuer: "Google"
  },
  {
    certificateName: "Google Cloud Associate Cloud Engineer",
    issuer: "Google"
  },
  {
    certificateName: "Certified Blockchain Solution Architect (CBSA)",
    issuer: "Blockchain Training Alliance",
  }
];
