import React from "react";
import { Box } from "@mui/material";

const FlexBox = ({ direction, justify, align, children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: direction ? direction : "row",
        justifyContent: justify ? justify : "center",
        alignItems: align ? align : "center",
      }}
    >
      {children}
    </Box>
  );
};

export default FlexBox;
