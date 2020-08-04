/* --- Global --- */
import React from "react";
import { useQuery } from "graphql-hooks";

/* --- Local --- */
import { BOARDS_QUERY } from "../lib/graphql/queries";

/**
 * @name useMondayBoardsQuery
 * @param {Object} filters
 * @param {Integer} limit
 * @param {Function} children
 */
export const useMondayBoardsQuery = ({ limit, page }) => {
  const [parsed, setParsed] = React.useState([]);
  const { loading, error, data, refetch, subscribeToMore } = useQuery(
    BOARDS_QUERY,
    {
      variables: {
        limit: 10,
        page,
      },
    }
  );

  return {
    data,
    parsed,
    loading,
    error,
    refetch,
  };
};

export default useMondayBoardsQuery;
