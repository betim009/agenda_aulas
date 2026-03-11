import * as React from "react";
import Button from "@mui/material/Button";
import ListSubheader from "@mui/material/ListSubheader";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/material/styles";

const StyledListHeader = Object.assign(
  styled(ListSubheader)({
    backgroundImage: "var(--Paper-overlay)",
  }),
  {
    // IMPORTANT: The base ListSubheader component sets `muiSkipListHighlight = true`
    // by default, but wrapping it with `styled(ListSubheader)` does not preserve
    // that static field. We re-declare it here so the menu list continues to skip
    // highlighting this non-focusable subheader when navigating with the keyboard.
    muiSkipListHighlight: true,
  },
);

export default function DropDown() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mesSelecionado, setMesSelecionado] = React.useState("abril");
  const open = Boolean(anchorEl);
  const meses = [
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro",
  ];

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (mes) => {
    if (mes) {
      setMesSelecionado(mes);
    }
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "grouped-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        variant="contained"
      >
        Mes: {mesSelecionado}
      </Button>
      <Menu
        id="grouped-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={() => handleClose()}
        slotProps={{
          list: {
            "aria-labelledby": "basic-button",
            sx: {
              py: 0,
            },
          },
        }}
      >
        <StyledListHeader>Escolha um mês</StyledListHeader>
        {meses.map((mes) => (
          <MenuItem key={mes} onClick={() => handleClose(mes)}>
            {mes}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
