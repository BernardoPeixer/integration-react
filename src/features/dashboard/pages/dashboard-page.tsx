import {DashboardHeaderSection} from "../components/dashboard-header-section/dashboard-header-section.tsx";
import style from './dashboard-page.module.css'
import {DashboardCardSection} from "../components/dashboard-cards-section/dashboard-card-section.tsx";
import {DashboardBarGraphSection} from "../components/dashboard-bar-graph-section/dashboard-bar-graph-section.tsx";
import {DashboardPieChartSection} from "../components/dashboard-pie-chart-section/dashboard-pie-chart-section.tsx";

export function DashboardPage() {

    return (
        <div className={style.container}>
            <DashboardHeaderSection/>
            <DashboardCardSection/>
            <DashboardBarGraphSection/>
            <DashboardPieChartSection/>
        </div>
    )
}