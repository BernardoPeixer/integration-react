import styles from './dashboard-card.module.css'
import * as React from "react";

type DashboardCardProp = {
    title?: string
    subtitle?: string
    children: React.ReactNode
    headerRightContent?: React.ReactNode
}

export function DashboardCard({title, subtitle, children, headerRightContent}: DashboardCardProp) {
    return (
        <div className={styles.container}>
            {
                (subtitle || title) && (
                    <CardHeader
                        title={title}
                        subtitle={subtitle}
                        rightContent={headerRightContent}
                    />
                )
            }

            {children}
        </div>
    )
}

type CardHeaderProps = {
    title?: string
    subtitle?: string
    rightContent?: React.ReactNode
}

export function CardHeader({
                               title,
                               subtitle,
                               rightContent,
                           }: CardHeaderProps) {
    return (
        <div className={styles.headerContainer}>
            <div>
                {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
                {title && <h1 className={styles.title}>{title}</h1>}
            </div>

            {rightContent}
        </div>
    )
}