import styles from "./stats.module.scss";
import { AiFillCode, AiFillSmile } from "react-icons/ai";
import { Reveal } from "@/components/utils/Reveal";

export const Stats = () => {
  return (
    <div className={styles.stats}>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillCode size="2.4rem" color="var(--brand)" />
            <span>Use at work</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">Java</span>
            <span className="chip">Spring</span>
            <span className="chip">Kubernetes</span>
            <span className="chip">Docker</span>
            <span className="chip">Hibernate</span>
            <span className="chip">Google Cloud</span>
            <span className="chip">AWS</span>
            <span className="chip">Jenkins</span>
            <span className="chip">Terraform</span>
            <span className="chip">Splunk</span>
            <span className="chip">Grafana</span>
            <span className="chip">JavaScript</span>
            <span className="chip">Gradle</span>
            <span className="chip">Maven</span>
            <span className="chip">Git</span>
            <span className="chip">GitLab</span>
            <span className="chip">Junit/Mockito</span>
            <span className="chip">Test Container</span>
            <span className="chip">Swagger</span>
            <span className="chip">Postgres</span>
            <span className="chip">UFT</span>
            <span className="chip">Jira</span>
            <span className="chip">AsciiDoc</span>
            <span className="chip">Confluence</span>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillSmile size="2.4rem" color="var(--brand)" />
            <span>Use for fun</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">Python</span>
            <span className="chip">React</span>
            <span className="chip">ThreeJs</span>
            <span className="chip">Github</span>
            <span className="chip">Vercel</span>
            <span className="chip">Blender</span>
            <span className="chip">DLT/Blockchain</span>
            <span className="chip">Ethereum</span>
            <span className="chip">Solana</span>
            <span className="chip">Figma</span>
            <span className="chip">Mid Journey</span>
            <span className="chip">Processing</span>
            <span className="chip">AI</span>
            <span className="chip">ChatGPT</span>
            <span className="chip">AutoGPT</span>
            <span className="chip">Dalle2</span>
            <span className="chip">Vqgan+clip</span>            
          </div>
        </div>
      </Reveal>
    </div>
  );
};
