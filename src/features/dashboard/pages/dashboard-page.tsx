import {DashboardHeaderSection} from "../components/dashboard-header-section/dashboard-header-section.tsx";
import style from './dashboard-page.module.css'
import {DashboardCardSection} from "../components/dashboard-cards-section/dashboard-card-section.tsx";

export function DashboardPage() {

    return (
        <div className={style.container}>
        <DashboardHeaderSection/>
            <DashboardCardSection/>
        </div>
    )
}