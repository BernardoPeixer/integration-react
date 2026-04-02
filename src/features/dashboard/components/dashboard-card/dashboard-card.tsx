import styles from './dashboard-card.module.css'
import * as React from "react";

type DashboardCardProp = {
    children: React.ReactNode
}

export function DashboardCard({children}: DashboardCardProp) {
    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}