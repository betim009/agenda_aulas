import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import "./App.css";
import DropDown from "./components/dropDown";
import { marco } from "./data/marco";

const ordemDias = [
  "domingo",
  "segunda-feira",
  "terca-feira",
  "quarta-feira",
  "quinta-feira",
  "sexta-feira",
  "sabado",
];

const capitalize = (texto) => texto.charAt(0).toUpperCase() + texto.slice(1);

function App() {
  const mes = marco;

  const diasOrdenados = [
    mes.semana_1,
    mes.semana_2,
    mes.semana_3,
    mes.semana_4,
    mes.semana_5,
  ].flatMap((semana) => {
    const mapaDias = Object.fromEntries(semana.map((dia) => [dia.dia, dia]));
    return ordemDias.map((nomeDia) => mapaDias[nomeDia]).filter(Boolean);
  });

  return (
    <Container maxWidth={false} sx={{ px: { xs: 0, sm: 1, md: 2 } }}>
      <Stack spacing={2}>
        <Box>
          <Typography variant="h4" component="h1" sx={{ fontWeight: 700 }}>
            {mes.title}
          </Typography>
          <Box sx={{ mt: 1 }}>
            <DropDown />
          </Box>
        </Box>

        <Grid container columns={{ xs: 1, sm: 2, md: 3, lg: 7 }} spacing={2}>
          {diasOrdenados.map((dia) => (
            <Grid key={`${dia.data}-${dia.dia}`} size={1}>
              <Paper
                elevation={0}
                sx={{
                  height: "100%",
                  border: "1px solid",
                  borderColor: "divider",
                  borderRadius: 2,
                  p: 2,
                }}
              >
                <Stack spacing={1}>
                  <Box>
                    <Typography
                      variant="overline"
                      color="text.secondary"
                      sx={{ lineHeight: 1.2 }}
                    >
                      {capitalize(dia.dia)}
                    </Typography>
                    <Typography
                      variant="h6"
                      component="h2"
                      sx={{ fontSize: "1rem", fontWeight: 600 }}
                    >
                      {dia.data}
                    </Typography>
                  </Box>

                  {dia.horarios.length > 0 ? (
                    <List dense disablePadding>
                      {dia.horarios.map((slot, indexSlot) => (
                        <ListItem
                          key={`${dia.data}-${slot.horario}-${indexSlot}`}
                          disablePadding
                          sx={{
                            py: 0.25,
                            px: 0.75,
                            borderRadius: 1,
                            bgcolor:
                              slot.aluno === "Livre"
                                ? "success.main"
                                : "transparent",
                            color:
                              slot.aluno === "Livre"
                                ? "success.contrastText"
                                : "inherit",
                          }}
                        >
                          <ListItemText
                            primary={`${slot.horario} - ${slot.aluno}`}
                          />
                        </ListItem>
                      ))}
                    </List>
                  ) : (
                    <Typography variant="body2" color="text.secondary">
                      Sem horarios
                    </Typography>
                  )}
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Container>
  );
}

export default App;
