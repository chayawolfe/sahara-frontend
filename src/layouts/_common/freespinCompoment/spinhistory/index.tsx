import { useState, useCallback, useEffect } from 'react';
// @mui

import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import Box from '@mui/material/Box';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
// utils
import { fTimestamp } from 'src/utils/format-time';

// components
import Scrollbar from 'src/components/scrollbar';
import {
    useTable,
    getComparator,
    emptyRows,
    TableNoData,
    TableEmptyRows,
    TableHeadCustom,
    TablePaginationCustom
} from 'src/components/table';
// apis
import { get_free_bonus } from 'src/api/game';
// types
import { IInvoice, IInvoiceTableFilters, IInvoiceTableFilterValue } from 'src/types/invoice';
//
import TableRow from './table-row';
import TableToolbar from './table-toolbar';
import InvoiceTableFiltersResult from './table-filters-result';

// ----------------------------------------------------------------------

const TABLE_HEAD = [
    { id: 'id', label: 'ID' },
    { id: 'value', label: 'Value' },
    { id: 'dueDate', label: 'Date/Time' }
];

const defaultFilters: IInvoiceTableFilters = {
    name: '',
    service: [],
    status: 'all',
    startDate: null,
    endDate: null
};

// ----------------------------------------------------------------------

export default function GameHistory() {
    const table = useTable({ defaultRowsPerPage: 25, defaultOrderBy: 'dueDate' });

    const [tableData, setTableData] = useState<any>([]);

    const [filters, setFilters] = useState(defaultFilters);

    const dateError =
        filters.startDate && filters.endDate ? filters.startDate.getTime() > filters.endDate.getTime() : false;

    const dataFiltered = applyFilter({
        inputData: tableData,
        comparator: getComparator(table.order, table.orderBy),
        filters,
        dateError
    });

    const denseHeight = table.dense ? 56 : 76;

    const canReset =
        !!filters.name ||
        !!filters.service.length ||
        filters.status !== 'all' ||
        (!!filters.startDate && !!filters.endDate);

    const notFound = (!dataFiltered.length && canReset) || !dataFiltered.length;

    const handleFilters = useCallback(
        (name: string, value: IInvoiceTableFilterValue) => {
            console.log(name, 'name', value, 'value');
            table.onResetPage();
            setFilters((prevState) => ({
                ...prevState,
                [name]: value
            }));
        },
        [table]
    );

    const handleResetFilters = useCallback(() => {
        setFilters(defaultFilters);
    }, []);

    useEffect(() => {
        (async () => {
            const result = await get_free_bonus();
            console.log(result, '--result.view.history');
            setTableData(result.result);
        })();
    }, []);

    return (
        <Card>
            <TableToolbar
                filters={filters}
                onFilters={handleFilters}
                //
                dateError={dateError}
            />

            {canReset && (
                <InvoiceTableFiltersResult
                    filters={filters}
                    onFilters={handleFilters}
                    //
                    onResetFilters={handleResetFilters}
                    //
                    results={dataFiltered.length}
                    sx={{ p: 2.5, pt: 0 }}
                />
            )}

            <Box sx={{ px: 2.5, borderRadius: 1, position: 'relative' }}>
                <TableContainer sx={{ position: 'relative', overflow: 'hidden', borderRadius: 1 }}>
                    <Scrollbar>
                        <Table size={table.dense ? 'small' : 'medium'}>
                            <TableHeadCustom
                                order={table.order}
                                orderBy={table.orderBy}
                                headLabel={TABLE_HEAD}
                                rowCount={tableData.length}
                                numSelected={table.selected.length}
                                onSort={table.onSort}
                            />

                            <TableBody sx={{ bgcolor: 'background.default' }}>
                                {dataFiltered
                                    .slice(
                                        table.page * table.rowsPerPage,
                                        table.page * table.rowsPerPage + table.rowsPerPage
                                    )
                                    .map((row: any) => (
                                        <TableRow key={row._id} row={row} />
                                    ))}

                                <TableEmptyRows
                                    height={denseHeight}
                                    emptyRows={emptyRows(table.page, table.rowsPerPage, tableData.length)}
                                />

                                <TableNoData notFound={notFound} />
                            </TableBody>
                        </Table>
                    </Scrollbar>
                </TableContainer>
            </Box>

            <TablePaginationCustom
                count={dataFiltered.length}
                page={table.page}
                rowsPerPage={table.rowsPerPage}
                onPageChange={table.onChangePage}
                onRowsPerPageChange={table.onChangeRowsPerPage}
                //
                // dense={table.dense}
                // onChangeDense={table.onChangeDense}
            />
        </Card>
    );
}

// ----------------------------------------------------------------------

function applyFilter({
    inputData,
    comparator,
    filters,
    dateError
}: {
    inputData: IInvoice[];
    comparator: (a: any, b: any) => number;
    filters: IInvoiceTableFilters;
    dateError: boolean;
}) {
    const { name, startDate, endDate } = filters;

    const stabilizedThis = inputData.map((el, index) => [el, index] as const);

    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });

    inputData = stabilizedThis.map((el) => el[0]);

    if (name) {
        inputData = inputData.filter(
            (invoice: any) =>
                invoice.from_id &&
                (invoice.from_id.username.toLowerCase().indexOf(name.toLowerCase()) !== -1 ||
                    invoice.to_id.username.toLowerCase().indexOf(name.toLowerCase()) !== -1)
        );
    }

    // if (status !== 'all') {
    //     inputData = inputData.filter((invoice) => invoice.status === status);
    // }

    // if (service.length) {
    //     inputData = inputData.filter((invoice) =>
    //         invoice.items.some((filterItem) => service.includes(filterItem.service))
    //     );
    // }
    if (!dateError) {
        if (startDate && endDate) {
            inputData = inputData.filter(
                (invoice: any) =>
                    fTimestamp(invoice.createdAt) >= fTimestamp(startDate) &&
                    fTimestamp(invoice.createdAt) <= fTimestamp(endDate)
            );
        }
    }

    return inputData;
}
