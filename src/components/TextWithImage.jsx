import { Grid, Typography } from "@material-ui/core";
import React from "react";
import logo from "../logo.svg";
import PropTypes from "prop-types";

const TextToTheRight = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-around"
      alignItems="center"
      className="cont-TextWithImage"
    >
      <Grid item xs={6}>
        <img src={logo} alt="Imagen ejemplo" />
      </Grid>
      <Grid item xs={4}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={3}
        >
          <Grid item xs>
            <Typography variant="h6">PERSONAL SHOPPER</Typography>
          </Grid>
          <Grid item xs>
            <Typography variant="body1">
              <b>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
                cumque.
              </b>
            </Typography>
          </Grid>
          <Grid item xs>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
              optio voluptas ex magni explicabo consequuntur doloremque placeat
              corrupti sapiente unde! Dolorum cum rerum, consequatur dolores
              voluptas quod! Deserunt, soluta excepturi.
            </Typography>
          </Grid>
          <Grid item xs>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              esse quae tempora architecto laudantium eius at labore debitis
              excepturi explicabo.
            </Typography>
          </Grid>
          <Grid item xs>
            <Typography variant="body1">
              <i>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
                facere.
              </i>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

const TextToTheLeft = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-around"
      alignItems="center"
      className="cont-TextWithImage"
    >
      <Grid item xs={4}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={3}
        >
          <Grid item xs>
            <Typography variant="h6">PERSONAL SHOPPER</Typography>
          </Grid>
          <Grid item xs>
            <Typography variant="body1">
              <b>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
                cumque.
              </b>
            </Typography>
          </Grid>
          <Grid item xs>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
              optio voluptas ex magni explicabo consequuntur doloremque placeat
              corrupti sapiente unde! Dolorum cum rerum, consequatur dolores
              voluptas quod! Deserunt, soluta excepturi.
            </Typography>
          </Grid>
          <Grid item xs>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              esse quae tempora architecto laudantium eius at labore debitis
              excepturi explicabo.
            </Typography>
          </Grid>
          <Grid item xs>
            <Typography variant="body1">
              <i>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
                facere.
              </i>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={6}>
        <img src={logo} alt="Imagen ejemplo" />
      </Grid>
    </Grid>
  );
};

const TextWithImage = ({ textToTheRight }) => {
  return textToTheRight ? <TextToTheRight /> : <TextToTheLeft />;
};

TextWithImage.propTypes = {
  textToTheRight: PropTypes.bool,
};

export default TextWithImage;
