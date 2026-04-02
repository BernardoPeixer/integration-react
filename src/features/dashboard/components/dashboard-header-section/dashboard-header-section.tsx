import styles from './dashboard-header-section.module.css'
import {DashboardChip} from "../dashboard-chip/dashboard-chip.tsx";

export function DashboardHeaderSection() {
    return (
        <div className={styles.container}>
            <p className={styles.subtitle}>Visão operacional em tempo real</p>
            <h1 className={styles.title}>Dashboard integradores</h1>

            <div className={styles.chips}>
                <DashboardChip
                    title={"Período"}
                    infoText={"Últimas 24 horas"}
                />
                <DashboardChip
                    title={"Integradores"}
                    infoText={"60 ativos"}
                />
            </div>
        </div>
    )
}