import styles from './dashboard-card-section.module.css'
import {DashboardCard} from "../dashboard-card/dashboard-card.tsx";

export function DashboardCardSection() {
    return (
        <div className={styles.container}>
            <DashboardCard>
                <CardContent/>
            </DashboardCard>
            <DashboardCard>
                <CardContent/>
            </DashboardCard>
        </div>
    )
}

function CardContent() {
    return (
        <div className={styles.container}>
            <div className={styles.mainInfo}>
                <h1 className={styles.title}>Total requests</h1>
                <h1 className={styles.number}>18.4M</h1>
                <h1 className={styles.subtitle}>vs. período anterior</h1>
            </div>

            <div className={styles.percentageContainer}>
                <h1 className={styles.percentageText}>+12.8%</h1>
            </div>
        </div>
    )
}
