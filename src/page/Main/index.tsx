import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Layout } from "../../components/basis";
import { ReceivedMaterialList } from "../../components/template";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
}));

function Main() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Layout />
      <ReceivedMaterialList />
    </div>
  );
}

export default Main;
