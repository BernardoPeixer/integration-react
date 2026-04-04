import {DashboardCard} from "../dashboard-card/dashboard-card.tsx";
import styles from "./dashboard-bar-graph-section.module.css";
import * as React from "react";

export function DashboardBarGraphSection() {
    return (
        <div className={styles.container}>
            <DashboardCard
                title={"Comportamento temporal"}
                subtitle={"Requests, erros e latência"}
                headerRightContent={
                    <HeaderRightContent/>
                }>
                <div></div>
            </DashboardCard>
        </div>
    )
}

export function HeaderRightContent() {
    return (
        <div className={styles.legendRow}>
            <LegendContainer
                label="Requests"
                bgColor="rgba(37, 99, 235, 0.16)"
                borderColor="rgba(37, 99, 235, 0.37)"
                textColor="rgba(147, 197, 253, 0.95)"
            />

            <LegendContainer
                label="Erros"
                bgColor="rgba(220, 38, 38, 0.16)"
                borderColor="rgba(220, 38, 38, 0.37)"
                textColor="rgba(252, 165, 165, 0.95)"
            />

            <LegendContainer
                label="Latência"
                bgColor="rgba(139, 92, 246, 0.16)"
                borderColor="rgba(139, 92, 246, 0.37)"
                textColor="rgba(196, 181, 253, 0.93)"
            />
        </div>
    )
}

type LegendContainerProps = {
    label: string
    bgColor: string
    borderColor: string
    textColor: string
}

export function LegendContainer({
                                    label,
                                    bgColor,
                                    borderColor,
                                    textColor,
                                }: LegendContainerProps) {
    return (
        <div
            className={styles.graphHeaderLegendContainer}
            style={
                {
                    "--bg-color": bgColor,
                    "--border-color": borderColor,
                    "--text-color": textColor,
                } as React.CSSProperties
            }
        >
            <h3 className={styles.graphHeaderLegend}>{label}</h3>
        </div>
    )
}