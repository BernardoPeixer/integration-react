import styles from './dashboard-card-section.module.css'
import {DashboardCard} from "../dashboard-card/dashboard-card.tsx";

type CardContentProps = {
    title: string
    value: string
    subtitle: string
    percentage: string
}

const cardsList: CardContentProps[] = [
    {
        title: "Total requests",
        value: "18.4M",
        subtitle: "vs. período anterior",
        percentage: "+12.4%",
    }, {
        title: "Total requests",
        value: "18.4M",
        subtitle: "vs. período anterior",
        percentage: "+12.4%",
    }, {
        title: "Total requests",
        value: "18.4M",
        subtitle: "vs. período anterior",
        percentage: "+12.4%",
    }, {
        title: "Total requests",
        value: "18.4M",
        subtitle: "vs. período anterior",
        percentage: "+12.4%",
    },
];

export function DashboardCardSection() {
    return (
        <div className={styles.container}>
            {cardsList.map((card) => (
                <DashboardCard>
                    <CardContent
                        title={card.title}
                        value={card.value}
                        subtitle={card.subtitle}
                        percentage={card.percentage}
                    />
                </DashboardCard>
            ))}
        </div>
    )
}

function CardContent(
    {
        title,
        value,
        subtitle,
        percentage,
    }: CardContentProps) {
    return (
        <div className={styles.cardContentContainer}>
            <div className={styles.mainInfo}>
                <h1 className={styles.title}>{title}</h1>
                <h1 className={styles.number}>{value}</h1>
                <h1 className={styles.subtitle}>{subtitle}</h1>
            </div>

            <div className={styles.percentageContainer}>
                <h1 className={styles.percentageText}>{percentage}</h1>
            </div>
        </div>
    )
}
