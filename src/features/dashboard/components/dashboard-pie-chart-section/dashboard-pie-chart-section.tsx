import {DashboardCard} from "../dashboard-card/dashboard-card.tsx";
import styles from "./dashboard-pie-chart-section.module.css";

export function DashboardPieChartSection() {
    return (
        <div className={styles.container}>
            <DashboardCard
                title={"Mix HTTP do período"}
                subtitle={"Distribuição de status"}
            >
                <div></div>
            </DashboardCard>
        </div>
    )
}