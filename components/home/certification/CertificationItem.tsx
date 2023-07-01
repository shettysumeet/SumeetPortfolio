import { Reveal } from "@/components/utils/Reveal";
import styles from "./certification.module.scss";

interface Props {
  certificateName: string;
  issuer: string;
}

export const CertificationItem = ({
  certificateName,
  issuer
}: Props) => {
  return (
    <div className={styles.certification}>
      <div className={styles.heading}>
        <Reveal>
          <span className={styles.certificateName}>{certificateName}</span>
        </Reveal>
      </div>

      <div className={styles.heading}>
        <Reveal>
          <span className={styles.issuer}>{issuer}</span>
        </Reveal>
      </div>
    </div>
  );
};
