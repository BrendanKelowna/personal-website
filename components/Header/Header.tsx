import {
  alpha,
  AppBar,
  Button,
  ButtonGroup,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import { Box } from "@mui/system";
import Inline from "../Inline/Inline";
import Logo from "../Logo/Logo";

//* Types
export type HeaderProps = {};

//* Definitions

//* Styling

//* Helpers

export default function Header({ ...props }: HeaderProps) {
  //* Context
  const theme = useTheme();

  //* State

  //* Effects

  //* Handlers

  //* Renders
  return (
    <AppBar
      sx={{
        backgroundColor: alpha(theme.palette.primary.main, 0.8),
        position: { xs: "initial", sm: "sticky" },
      }}
    >
      <Toolbar
        sx={{
          flexDirection: { xs: "column", sm: "row" },
          pt: { xs: 1, sm: 0 },
          pb: { xs: 1, sm: 0 },
        }}
      >
        <Inline sx={{ alignItems: "center" }}>
          <Logo height={45} />
          <Typography variant="h6" color="inherit" noWrap>
            Brendan Kelly
          </Typography>
          <Logo height={45} transform="scale(-1 1)" />
        </Inline>
        <Box sx={{ flexGrow: 1 }} height={10} />
        <ButtonGroup>
          <Button color="inherit" href="https://github.com/BrendanKelowna">
            Git Hub
          </Button>
          <Button
            color="inherit"
            href="https://www.linkedin.com/in/brendan-kelly-kelowna"
          >
            Linked In
          </Button>
          <Button
            color="inherit"
            href="mailto:Brendan.Kelly.Kelowna@outlook.com"
          >
            Email Me
          </Button>
        </ButtonGroup>
      </Toolbar>
    </AppBar>
  );
}
