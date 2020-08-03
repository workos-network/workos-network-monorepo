/* --- Global --- */
import { useState, useMemo } from "react";
import { useMutation } from "graphql-hooks";

/* --- Local --- */
import { updateCreateMutation } from "../lib/graphql/mutations";

/**
 * @name useMondayUpdateCreateMutation
 * @param {Object} filters
 * @param {Integer} limit
 * @param {Function} children
 */
export const useMondayUpdateCreateMutation = (props) => {
  let [list, setList] = useState([]);

  const [requestMutation, { loading, error, data, refetch }] = useMutation(
    updateCreateMutation
  );

  return {
    requestMutation,
    data,
    loading,
    error,
    refetch,
  };
};

export default useMondayUpdateCreateMutation;
