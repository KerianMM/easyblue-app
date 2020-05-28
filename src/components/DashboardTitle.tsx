import React from "react";
import {UserInterface} from "../models/User";

interface Props {
    user: UserInterface;
}

const DashboardTitle: React.FC<Props> = ({user}) => {
    return (
        <>
            <div id="dashboard-title">
                <p>Bienvenue sur votre espace personnel {user.firstname.length ? user.firstname : ''} !</p>
                <span>Retrouvez ci-dessous la liste des contrats auquels vous avez souscris.</span>
            </div>
        </>
    )
};

export default DashboardTitle;