import React from "react";
import {Grid, Paper} from "@material-ui/core";
import {ActivityInterface} from "../models/Activity";

interface Props {
    activities: ActivityInterface[];
}

const Activities: React.FC<Props> = ({activities}) => {
    const lastActivities: ActivityInterface[] = activities.slice(0, 5);

    return (
        <>
            <Grid id="activities">
                <Paper>
                    <p>Mes dernières activités</p>
                    <div id="activitys">
                        {lastActivities.map((activity) => (
                            <div className="activity">
                                <p>{activity?.date}</p>
                                <p>{activity?.action}</p>
                            </div>
                        ))}
                    </div>
                </Paper>
            </Grid>
        </>
    )
};

export default Activities;