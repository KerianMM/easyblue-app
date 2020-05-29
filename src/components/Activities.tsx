import React from "react";
import {Grid, Paper} from "@material-ui/core";
import {ActivityInterface} from "@/models/Activity";
import {CircularProgress} from "@/easyblue-app/node_modules/@material-ui/core";

interface Props {
    activities: ActivityInterface[] | null | undefined;
}

const Activities: React.FC<Props> = ({activities}) => {
    return (
        <Grid>
            <Paper className="p-m">
                <span>Mes dernières activités</span><br/>
                <div>
                    {
                        activities === null || typeof activities === "undefined"
                            ? <CircularProgress className="m-auto"/>
                            : activities.slice(0, 5).map((activity, i) => (
                                <div className="activity" key={i}>
                                    <p>{activity?.date}</p>
                                    <p>Vous avez demandé la {activity?.action} de votre
                                        assurance {activity?.subject}.</p>
                                </div>
                            ))
                    }
                </div>
            </Paper>
        </Grid>
    )
};

export default Activities;