import idx from "idx";
import React from "react";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import SortIcon from "@material-ui/icons/Sort";
import styled from "@emotion/styled";
import { Box, Flex } from "theme-ui";
import {
  useTable,
  usePagination,
  useSortBy,
  useFilters,
  useGroupBy,
  useExpanded,
  useRowSelect,
} from "react-table";
import { useItemsQuery, withMonday } from "react-monday";
import { ExpandMore, ExpandLess } from "../common";

import SubRow from "./SubRow";

import {
  DefaultColumnFilter,
  SelectColumnFilter,
  fuzzyTextFilterFn,
} from "./tableFunctions";

const Styles = styled.div`
  padding: 1rem;

  table.parent {
    border-radius: 6px;
    background: #fff;
    border-spacing: 0;
    border: 1px solid gray;
    border-color: solitude;
    width: 100%;
    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }
  }

  table.parent > thead {
      th {
        background: #292f4c;
        color: white;
        :nth-of-type(1) {
          vertical-align: middle;
          width: 5%;
        }
        :nth-of-type(2) {
          width: 50%;
        }
        :nth-of-type(3) {
          width: 50px;
        }
        :nth-of-type(4) {
          width: 100px;
        }
      }
    }

    table.parent > tbody:nth-of-type(1) {
      > td {
        :nth-of-type(1) {
          vertical-align: middle;
          width: 5%;
        }
        :nth-of-type(2) {
          width: 70%;
        }
        :nth-of-type(3) {
          width: 10%;
        }
        :nth-of-type(4) {
          width: 10%;
        }
      }
      > tr {
        :nth-of-type(odd) {
          background: #f2f2f2;
        }
      }
      > th,
      td {
        margin: 0;
        padding: 0.5rem;
        border-bottom: 1px solid #e4e4e4;
        border-right: 1px solid #e4e4e4;

        :last-child {
          border-right: 0;
        }
      }

      td {
        input {
          font-size: 1rem;
          padding: 0;
          margin: 0;
          border: 0;
        }
      }
    }
  }

  .pagination {
    padding: 0.5rem;
  }
`;

function Table({
  columns,
  data,
  updateMyData,
  renderRowSubComponent,
  skipReset,
  ...props
}) {
  const filterTypes = React.useMemo(
    () => ({
      // Add a new fuzzyTextFilterFn filter type.
      fuzzyText: fuzzyTextFilterFn,
      // Or, override the default text filter to use
      // "startWith"
      text: (rows, id, filterValue) => {
        return rows.filter((row) => {
          const rowValue = row.values[id];
          return rowValue !== undefined
            ? String(rowValue)
                .toLowerCase()
                .startsWith(String(filterValue).toLowerCase())
            : true;
        });
      },
    }),
    []
  );

  const defaultColumn = React.useMemo(
    () => ({
      Filter: DefaultColumnFilter,
    }),
    []
  );

  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page, // Instead of using 'rows', we'll use page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    visibleColumns,
    state: {
      pageIndex,
      pageSize,
      sortBy,
      groupBy,
      expanded,
      filters,
      selectedRowIds,
    },
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
      filterTypes,
      updateMyData,
      autoResetPage: !skipReset,
      autoResetSelectedRows: !skipReset,
      disableMultiSort: true,
    },
    useFilters,
    useGroupBy,
    useSortBy,
    useExpanded,
    usePagination,
    useRowSelect,
    (hooks) => {}
  );

  // Render the UI for your table
  return (
    <>
      <table {...getTableProps()} className="parent">
        {/* 
        ------------
        Table Head 
        ------------
        */}
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>
                  <Flex
                    sx={{
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    <div>
                      <Flex
                        {...column.getSortByToggleProps()}
                        sx={{ alignItems: "center" }}
                      >
                        <Box as="span" sx={{ mr: 0 }}>
                          {column.render("Header")}
                        </Box>
                        <Box sx={{ mx: 2, mr: 3 }}>
                          {column.isSorted ? (
                            column.isSortedDesc ? (
                              <ArrowDownwardIcon />
                            ) : (
                              <ArrowUpwardIcon />
                            )
                          ) : (
                            <SortIcon />
                          )}
                        </Box>
                      </Flex>
                    </div>
                    <Box sx={{ ml: 0 }}>
                      {column.canFilter ? column.render("Filter") : null}
                    </Box>
                  </Flex>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        {/* 
        ------------
        Table Body 
        ------------
        */}
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <>
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>
                        {cell.isGrouped ? (
                          <>
                            <span {...row.getToggleRowExpandedProps()}>
                              {row.isExpanded ? "👇" : "👉"}
                            </span>{" "}
                            {cell.render("Cell", { editable: false })} (
                            {row.subRows.length})
                          </>
                        ) : cell.isAggregated ? (
                          cell.render("Aggregated")
                        ) : cell.isPlaceholder ? null : (
                          cell.render("Cell", { editable: true })
                        )}
                      </td>
                    );
                  })}
                </tr>
                {row.isExpanded ? (
                  <tr style={{ padding: 0 }}>
                    <td colSpan={visibleColumns.length} style={{ padding: 0 }}>
                      {renderRowSubComponent({ row })}
                    </td>
                  </tr>
                ) : null}
              </>
            );
          })}
        </tbody>
      </table>
      {/*
        Pagination can be built however you'd like.
        This is just a very basic UI implementation:
      */}
      <Flex sx={{ justifyContent: "space-between" }}>
        <Box sx={{ flex: 1 }}>
          <div className="pagination">
            <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
              {"<<"}
            </button>{" "}
            <button onClick={() => previousPage()} disabled={!canPreviousPage}>
              {"<"}
            </button>{" "}
            <button onClick={() => nextPage()} disabled={!canNextPage}>
              {">"}
            </button>{" "}
            <button
              onClick={() => gotoPage(pageCount - 1)}
              disabled={!canNextPage}
            >
              {">>"}
            </button>{" "}
            <span>
              Page{" "}
              <strong>
                {pageIndex + 1} of {pageOptions.length}
              </strong>{" "}
            </span>
            <span>
              | Go to page:{" "}
              <input
                type="number"
                defaultValue={pageIndex + 1}
                onChange={(e) => {
                  const page = e.target.value ? Number(e.target.value) - 1 : 0;
                  gotoPage(page);
                }}
                style={{ width: "100px" }}
              />
            </span>{" "}
            <select
              value={pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
              }}
            >
              {[10, 20, 30, 40, 50].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  Show {pageSize}
                </option>
              ))}
            </select>
          </div>
        </Box>
        <Box sx={{ alignSelf: "center" }}>{props.footer}</Box>
      </Flex>
    </>
  );
}

function ItemsTable(props) {
  const columns = React.useMemo(
    () => [
      {
        id: "expander",
        Header: ({ getToggleAllRowsExpandedProps, isAllRowsExpanded }) => null,
        Cell: ({ row }) => (
          <span
            {...row.getToggleRowExpandedProps({
              style: {
                paddingLeft: `${row.depth * 2}rem`,
              },
            })}
          >
            {row.isExpanded ? <ExpandLess /> : <ExpandMore />}
          </span>
        ),
      },
      {
        Header: "Task",
        accessor: "name",
        aggregate: "count",
      },
      {
        Header: "Board",
        accessor: "board.name",
        Filter: SelectColumnFilter,
        aggregate: "count",
      },
      {
        Header: "Group",
        accessor: "group.title",
        Filter: SelectColumnFilter,
        aggregate: "count",
      },
      {
        Header: "Status",
        accessor: "status",
        Filter: SelectColumnFilter,
        filter: "column_values[1].text",
        Cell: (p) => {
          const values = idx(p, (_) => _.row.values.column_values);
          if (values) {
            const status = values.filter((c) => c.type === "color");
            return <span>{status[0].text}</span>;
          }
          return <span>No Status</span>;
        },
      },
    ],
    []
  );

  // const {data, refetch} = useItemsQuery({});

  // We need to keep the table from resetting the pageIndex when we
  // Update data. So we can keep track of that flag with a ref.
  const skipResetRef = React.useRef(false);

  // When our cell renderer calls updateMyData, we'll use
  // the rowIndex, columnId and new value to update the
  // original data
  const updateMyData = (rowIndex, columnId, value) => {
    // We also turn on the flag to not reset the page
    skipResetRef.current = true;
    setData((old) =>
      old.map((row, index) => {
        if (index === rowIndex) {
          return {
            ...row,
            [columnId]: value,
          };
        }
        return row;
      })
    );
  };

  const [data, dataSet] = React.useState([]);
  const items = useItemsQuery({});
  React.useEffect(() => {
    items.request({ limit: 35 });
  }, []);

  React.useEffect(() => {
    // items.refetch();
  }, [items]);
  React.useEffect(() => {
    if (Array.isArray(items.data)) dataSet(items.data);
  }, [items.data]);

  // Create a function that will render our row sub components
  const renderRowSubComponent = React.useCallback(
    ({ row }) => <SubRow {...row} />,
    []
  );

  return (
    <Styles>
      <Table
        columns={columns}
        data={data}
        renderRowSubComponent={renderRowSubComponent}
        footer={props.footer}
      />
    </Styles>
  );
}

export default ItemsTable;
