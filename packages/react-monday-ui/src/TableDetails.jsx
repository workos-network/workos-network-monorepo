/**
 * @name TableDetails
 * @param {Object} props
 */
const TableDetails = ({
  pageIndex,
  pageSize,
  pageCount,
  canNextPage,
  canPreviousPage,
  sortBy,
  groupBy,
  expanded,
  filters,
  selectedRowIds,
}) => {
  return (
    <pre>
      <code>
        {JSON.stringify(
          {
            pageIndex,
            pageSize,
            pageCount,
            canNextPage,
            canPreviousPage,
            sortBy,
            groupBy,
            expanded: expanded,
            filters,
            selectedRowIds: selectedRowIds,
          },
          null,
          2
        )}
      </code>
    </pre>
  );
};
export default TableDetails;
