import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import { links } from "../../personal-website";

export function Copyright() {
  return (
    <Box sx={{ mt: 5 }}>
      <Typography variant="body2" color="text.secondary" align="center">
        {"Copyright © "}
        <Link color="inherit" href={links.home}>
          Brendan Kelly Kelowna
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </Box>
  );
}
