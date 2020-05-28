import React from "react";
import {UserInterface} from "../models/User";

interface Props {
    user: UserInterface | undefined;
}

const DashboardTitle: React.FC<Props> = ({user}) => {
    return (
        <>
            <div id="dashboard-title">
                <p>Bienvenue sur votre espace personnel {typeof user !== "undefined" && user.firstname.length ? user.firstname : ''} !</p>
                <span>Retrouvez ci-dessous la liste des contrats auquels vous avez souscris.</span>
            </div>
        </>
    )
};

export default DashboardTitle;