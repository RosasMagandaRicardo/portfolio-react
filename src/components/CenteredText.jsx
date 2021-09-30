import React from "react";
import { Grid, Typography } from "@material-ui/core";

const CenteredText = () => {
  return (
    <Grid
      container
      className="container-text"
      direction="column"
      justifyContent="space-around"
      alignItems="center"
      spacing={3}
    >
      <Grid item xs={8}>
        <Typography align="center" variant="body1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
          incidunt culpa voluptatibus eveniet inventore molestias maiores esse
          assumenda explicabo eaque officia debitis sed aut, commodi nulla!
          Beatae, aperiam soluta! Et molestias dolor accusantium itaque optio
          est a quo quod quibusdam?
        </Typography>
      </Grid>
      <Grid item xs={8}>
        <Typography align="center" variant="body1">
          <b> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi autem
          corrupti temporibus ad architecto excepturi harum praesentium?
          Aspernatur, id soluta!</b>
        </Typography>
      </Grid>
      <Grid item xs={8}>
        <Typography align="center" variant="body1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, dolore
          harum? Laudantium iusto qui voluptatum? Odio tenetur possimus
          blanditiis, perferendis nam dolorum corporis. Libero nihil esse labore
          deleniti? Quis aspernatur consequuntur similique aperiam amet hic, in
          laudantium quo! Eveniet, temporibus.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default CenteredText;
