import { useEffect, useState } from 'react';
import axios from 'axios';
import { faker } from '@faker-js/faker';
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
import Page from '../components/Page';
import Iconify from '../components/Iconify';
import {
  AppTasks,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppTrafficBySite,
  AppWidgetSummary,
  AppCurrentSubject,
  AppConversionRates,
} from '../sections/@dashboard/app';

export default function DashboardApp() {
  const theme = useTheme();
  const [zones, setZones] = useState([]);
  const [users, setUsers] = useState([]);
  const [statements, setStatements] = useState([]);

  async function getZones() {
    const response = await axios.get('/zones');
    setZones(response.data);
  }

  async function getUsers() {
    const response = await axios.get('/users');
    setUsers(response.data);
  }

  async function getStatements() {
    const response = await axios.get('/statements');
    setStatements(response.data);
  }

  function getAll() {
    getZones();
    getUsers();
    getStatements();
  }

  useEffect(() => {
    getAll();
  }, []);

  return (
    <Page title="Dashboard">
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Bem-vindo ao Dashboard do GameManage
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Zonas ativas" total={zones.length} color="success" icon={'emojione-monotone:flag-for-brazil'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Usuários Cadastrados" total={users.length} color="info" icon={'carbon:user-avatar-filled-alt'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Atestados de vitória" total={statements.length} color="warning" icon={'healthicons:i-certificate-paper-outline'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Dívida com o Markin" total={40000} color="error" icon={'emojione-monotone:money-with-wings'} />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppWebsiteVisits
              title="Modalidades mais utilizadas"
              subheader="No ultimo ano"
              chartLabels={[
                '01/01/2022',
                '02/01/2022',
                '03/01/2022',
                '04/01/2022',
                '05/01/2022',
                '06/01/2022',
                '07/01/2022',
                '08/01/2022',
                '09/01/2022',
                '10/01/2022',
                '11/01/2022',
              ]}
              chartData={[
                {
                  name: 'Odds',
                  type: 'column',
                  fill: 'solid',
                  data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                },
                {
                  name: 'Mega Sena',
                  type: 'area',
                  fill: 'gradient',
                  data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                },
                {
                  name: 'Raspadinha',
                  type: 'line',
                  fill: 'solid',
                  data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits
              title="Tópicos mais acessados"
              chartData={[
                { label: 'Corrida de cavalo', value: 4344 },
                { label: 'Odds', value: 5435 },
                { label: 'Raspadinha', value: 1443 },
                { label: 'Mega-sena', value: 4443 },
              ]}
              chartColors={[
                theme.palette.primary.main,
                theme.palette.chart.blue[0],
                theme.palette.chart.violet[0],
                theme.palette.chart.yellow[0],
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppConversionRates
              title="Taxa de conversão por Região"
              subheader="(+43%) que o ano passado"
              chartData={[
                { label: 'Sul', value: 580 },
                { label: 'Norte', value: 690 },
                { label: 'Centro-Oeste', value: 1100 },
                { label: 'Nordeste', value: 1200 },
                { label: 'Sudeste', value: 1380 },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentSubject
              title="Região com maior taxa de conversão"
              chartLabels={['Espírito Santo', 'São Paulo', 'Rio de Janeiro', 'Minas Gerais']}
              chartData={[
                { name: 'Corrida de Cavalo', data: [80, 50, 30, 40] },
                { name: 'Odds', data: [80, 30, 40, 80] },
                { name: 'Mega-Sena', data: [44, 76, 78, 13] },
                { name: 'Raspadinha', data: [15, 20, 30, 13] },
              ]}
              chartColors={[...Array(4)].map(() => theme.palette.text.secondary)}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppOrderTimeline
              title="Clientes em potencial"
              list={[...Array(5)].map((_, index) => ({
                id: faker.datatype.uuid(),
                title: [
                  'Chile',
                  'Argentina',
                  'Venezuela',
                  'Colômbia',
                  'Peru',
                ][index],
                type: `order${index + 1}`,
                time: faker.date.past(),
              }))}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppTrafficBySite
              title="Tráfego por site"
              list={[
                {
                  name: 'FaceBook',
                  value: 323234,
                  icon: <Iconify icon={'eva:facebook-fill'} color="#1877F2" width={32} height={32} />,
                },
                {
                  name: 'Google',
                  value: 341212,
                  icon: <Iconify icon={'eva:google-fill'} color="#DF3E30" width={32} height={32} />,
                },
                {
                  name: 'Linkedin',
                  value: 411213,
                  icon: <Iconify icon={'eva:linkedin-fill'} color="#006097" width={32} height={32} />,
                },
                {
                  name: 'Twitter',
                  value: 443232,
                  icon: <Iconify icon={'eva:twitter-fill'} color="#1C9CEA" width={32} height={32} />,
                },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppTasks
              title="Tarefas"
              list={[
                { id: '1', label: 'Demonstrar To-do Tasks' },
                { id: '2', label: 'Fechar negócio fora do país' },
                { id: '3', label: 'To-Do Component' },
                { id: '4', label: 'Fazer Oferta ao Desenvolvedor' },
                { id: '5', label: 'Pagar um Lanche Pro desenvolvedor' },
              ]}
            />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
