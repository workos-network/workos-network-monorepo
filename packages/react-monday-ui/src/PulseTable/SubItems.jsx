import idx from "idx";
import React from "react";
import styled from "@emotion/styled";
import { useTable, usePagination } from "react-table";

import makeData from "./makeData";

import {
  subItemsQuery,
  useMondayBoardsQuery,
  useSubItemsQuery,
} from "react-monday";

/**
 * @name SubItemTable
 * @param {*} param0
 */
function Table({ columns, data }) {
  console.log(data, "td");
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

    // The rest of these things are super handy, too ;)
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    usePagination
  );

  // Render the UI for your table
  return (
    <>
      <table {...getTableProps()} className="child" style={{ width: "100%" }}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* 
        Pagination can be built however you'd like. 
        This is just a very basic UI implementation:
      */}
    </>
  );
}

function SubItemTable() {
  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Owner",
        accessor: "owner",
        Cell: (p) => {
          const values = idx(p, (_) => _.row.original.column_values);
          if (values) {
            const status = values.filter((c) => c.type === "multiple-person");
            return <span>{status[0].text}</span>;
          }
          return <span>No Status</span>;
        },
      },
      {
        Header: "Status",
        accessor: "status",
        Cell: (p) => {
          const values = idx(p, (_) => _.row.original.column_values);
          console.log(p, "stav");
          if (values) {
            const status = values.filter((c) => c.type === "color");
            return <span>{status[0].text}</span>;
          }
          return <span>No Status</span>;
        },
      },
      {
        Header: "Date",
        accessor: "date",
        Cell: (p) => {
          const values = idx(p, (_) => _.row.original.column_values);
          if (values) {
            const status = values.filter((c) => c.type === "date");
            return <span>{status[0].text}</span>;
          }
          return <span>No Due Date</span>;
        },
      },
    ],
    []
  );

  // const dataTest = React.useMemo(() => makeData(100000), []);

  const [data, dataSet] = React.useState();
  const items = useSubItemsQuery({ ids: [632823949] });
  React.useEffect(() => {
    console.log(items, "blah");
    if (!items.data && !items.loading) {
      items.request();
    }
    if (items.data && !items.loading) {
      console.log(items.data, "testttt");
      dataSet(items.data);
    }
  }, [items]);

  console.log(data, "wh?");

  const dataTest = React.useMemo(
    () => (!items.data ? null : items.data.map((t) => t)),
    [items.data]
  );
  return !dataTest ? null : (
    <Styles>
      <Table columns={columns} data={dataTest} />
    </Styles>
  );
}

const Styles = styled.div`
  padding: 1rem;

  table.child {
    border-spacing: 0;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    > thead {
      border: none;

      th,
      td {
        margin: 0;
        padding: 0.5rem;
        font-size: 13px;
        text-align: left;
        border-bottom: 1px solid black;
        :last-child {
          border-right: 0;
        }
      }
    }

    > tbody {
      th,
      td {
        margin: 0;
        padding: 0.5rem;
        font-size: 13px;
        text-align: left;
        border-bottom: none;
        :last-child {
          border-right: 0;
        }
      }
    }
  }

  .pagination {
    padding: 0.5rem;
  }
`;

const Pagination = (props) => {
  return (
    <div className="pagination">
      {/* <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {"<<"}
        </button>{" "}
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {"<"}
        </button>{" "}
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {">"}
        </button>{" "}
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
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
        </select> */}
    </div>
  );
};

export default SubItemTable;
