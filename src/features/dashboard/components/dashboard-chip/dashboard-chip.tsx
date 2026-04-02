import styles from './dashboard-chip.module.css'

type DashboardChipProp = {
    title: string
    infoText: string
}

export function DashboardChip({title, infoText} : DashboardChipProp) {
    return(
        <div className={styles.container}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.info}>
                <h1 className={styles.h1}>{infoText}</h1>
            </div>
        </div>
    )
}