import { filter } from 'lodash';
import { useEffect, useState } from 'react';
import {
  Card,
  Table,
  Stack,
  Button,
  Checkbox,
  TableRow,
  TableBody,
  TableCell,
  Container,
  Typography,
  TableContainer,
  TablePagination,
} from '@mui/material';
import Page from '../components/Page';
import Scrollbar from '../components/Scrollbar';
import Iconify from '../components/Iconify';
import SearchNotFound from '../components/SearchNotFound';
import { ListHead, ListToolbar, MoreMenu } from '../sections/@dashboard/user';
import CustomizableModal from '../components/CustomizableModal';
import LotteryForm from '../components/forms/LotteryForm';
import axios from 'axios';

const TABLE_HEAD = [
  { id: 'id', label: 'ID da Loteria', alignRight: false },
  { id: 'name', label: 'Nome da Loteria', alignRight: false },
  { id: 'phone', label: 'Telefone', alignRight: false },
  { id: 'city', label: 'Cidade', alignRight: false },
  { id: 'zoneCount', label: 'Quantidade de Zonas', alignRight: false },
  { id: 'gamesCount', label: 'Quantidade de Jogos', alignRight: false },
  { id: 'walletsCount', label: 'Quantidade de Carteiras', alignRight: false },
  { id: 'ticketsCount', label: 'Quantidade de Bilhetes', alignRight: false },
  { id: 'shopsCount', label: 'Quantidade de Lojas', alignRight: false },
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function applySortFilter(array, comparator, query) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  if (query) {
    return filter(array, (lottery) => lottery.id.indexOf(query.id()) !== -1);
  }
  return stabilizedThis.map((el) => el[0]);
}

export default function Lottery() {
  const [lotteries, setLotteries] = useState([]);
  const [page, setPage] = useState(0);
  const [order, setOrder] = useState('asc');
  const [selected, setSelected] = useState([]);
  const [orderBy, setOrderBy] = useState('name');
  const [filterName, setFilterName] = useState('');
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = lotteries.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleFilterByName = (event) => {
    setFilterName(event.target.value);
  };

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - lotteries.length) : 0;
  const filteredLotteries = applySortFilter(lotteries, getComparator(order, orderBy), filterName);
  const isGameNotFound = filteredLotteries.length === 0;
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    getLotteries();
  };

  async function getLotteries() {
    try {
      const response = await axios.get('/lotteries');
      setLotteries(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getLotteries();
  }, []);

  return (
    <Page title="Lotéricas">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Lotéricas
          </Typography>
          <Button variant="contained" onClick={handleClickOpen} startIcon={<Iconify icon="eva:plus-fill" />}>
            Nova Lotérica
          </Button>
        </Stack>

        <Card>
          <ListToolbar placeholder="Buscar Lotérica" numSelected={selected.length} filterName={filterName} onFilterName={handleFilterByName} />

          <Scrollbar>
            <TableContainer sx={{ minWidth: 800 }}>
              <Table>
                <ListHead
                  order={order}
                  orderBy={orderBy}
                  headLabel={TABLE_HEAD}
                  rowCount={lotteries.length}
                  numSelected={selected.length}
                  onRequestSort={handleRequestSort}
                  onSelectAllClick={handleSelectAllClick}
                />
                <TableBody>
                  {filteredLotteries.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                    const { id, name, phone, city, zoneCount, gamesCount, walletsCount, ticketsCount, shopsCount } = row;
                    const isItemSelected = selected.indexOf(id) !== -1;

                    return (
                      <TableRow
                        hover
                        key={id}
                        tabIndex={-1}
                        role="checkbox"
                        selected={isItemSelected}
                        aria-checked={isItemSelected}
                      >
                        <TableCell padding="checkbox">
                          <Checkbox checked={isItemSelected} onChange={(event) => handleClick(event, id)} />
                        </TableCell>
                        <TableCell align="left">{id}</TableCell>
                        <TableCell align="left">{name}</TableCell>
                        <TableCell align="left">{phone}</TableCell>
                        <TableCell align="left">{city}</TableCell>
                        <TableCell align="left">{zoneCount}</TableCell>
                        <TableCell align="left">{gamesCount}</TableCell>
                        <TableCell align="left">{walletsCount}</TableCell>
                        <TableCell align="left">{ticketsCount}</TableCell>
                        <TableCell align="left">{shopsCount}</TableCell>
                        <TableCell align="right">
                          <MoreMenu />
                        </TableCell>
                      </TableRow>
                    );
                  })}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>

                {isGameNotFound && (
                  <TableBody>
                    <TableRow>
                      <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                        <SearchNotFound searchQuery={filterName} />
                      </TableCell>
                    </TableRow>
                  </TableBody>
                )}
              </Table>
            </TableContainer>
          </Scrollbar>

          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={lotteries.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Card>
      </Container>
      <CustomizableModal open={open} handleClose={handleClose} title="Nova Lotérica" >
        <LotteryForm handleClose={handleClose} />
      </CustomizableModal>
    </Page>
  );
}
