import { Company } from "../../types/company";
import { CheckCircle2 } from "lucide-react";
import styles from "./CompanyCard.module.css";

interface CompanyCardProps {
    company: Company;
    isSelected?: boolean;
    onClick: () => void;
}

export default function CompanyCard({ company, isSelected, onClick }: CompanyCardProps) {
    return (
        <div
            className={`${styles.card} ${isSelected ? styles.selected : ""}`}
            onClick={onClick}
        >
            <div className={styles.header}>
                <div className={styles.logoContainer} style={{ backgroundImage: `url(${company.logoUrl})`, backgroundSize: 'cover' }}></div>
                <div className={styles.titleInfo}>
                    <div className={styles.titleRow}>
                        <h3>{company.name}</h3>
                        {isSelected && <CheckCircle2 size={16} className={styles.checkIcon} />}
                    </div>
                    <p className={styles.description}>{company.description}</p>
                </div>
            </div>

            <div className={styles.tagsContainer}>
                {company.category.map((tag, i) => (
                    <span key={i} className={styles.tag}>{tag}</span>
                ))}
            </div>
        </div>
    );
}
