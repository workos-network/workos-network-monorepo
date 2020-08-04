/* --- Global --- */
import React, { useReducer } from "react";
import withMonday from "../withContext";
import { SUB_ITEMS_QUERY, ITEMS_QUERY } from "../lib/graphql";

export const SUB_ITEMS_QUERY_REQUEST = "SUB_ITEMS_QUERY_REQUEST";
export const SUB_ITEMS_QUERY_SUCCESS = "SUB_ITEMS_QUERY_SUCCESS";
export const SUB_ITEMS_QUERY_FAILURE = "SUB_ITEMS_QUERY_FAILURE";

/**
 * @name useSubItemsQuery
 * @param {Integer} limit
 * @param {Integer} page
 */
export const useSubItemsQuery = ({ limit, page }) => {
  const monday = withMonday();
  const [, Set] = React.useState();
  const initialState = {
    data: undefined,
    error: undefined,
    loading: false,
  };

  function reducer(state, action) {
    switch (action.type) {
      case SUB_ITEMS_QUERY_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case SUB_ITEMS_QUERY_SUCCESS:
        return {
          ...state,
          loading: false,
          ...action.payload,
        };
      case SUB_ITEMS_QUERY_FAILURE:
        return {
          ...state,
          error: action.payload,
        };

      default:
        throw new Error();
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  /* ------------------- */
  // Actions
  /* ------------------- */
  React.useEffect(
    (inputs) => {
      if (state.loading) {
        if (monday.client && monday.isClientAuthorized) {
          monday.client
            .request({
              query: SUB_ITEMS_QUERY,
              variables: {
                limit: 35,
                // page: inputs.page
              },
            })
            .then(({ data, error }) => {
              if (data && data.items) {
                console.log(data.items, "data.items2");
                const match = data.items[0].column_values[0];
                const values = JSON.parse(match.value);
                console.log(values);
                const itemIDS = values.linkedPulseIds.map(
                  (v) => v.linkedPulseId
                );
                console.log(itemIDS, "itemIDS");

                monday.client
                  .request({
                    query: ITEMS_QUERY,
                    variables: { ids: itemIDS },
                  })
                  .then(({ data, error }) => {
                    dispatch({
                      type: SUB_ITEMS_QUERY_SUCCESS,
                      payload: {
                        data: data.items,
                        error,
                      },
                    });
                  })
                  .catch(({ data, error, ...rest }) => {
                    console.log(data, error, rest, "data, error");
                    dispatch({
                      type: SUB_ITEMS_QUERY_FAILURE,
                      payload: error,
                    });
                  });
              }
            })
            .catch(({ data, error, ...rest }) => {
              console.log(data, error, rest, "data, error");
              dispatch({
                type: SUB_ITEMS_QUERY_FAILURE,
                payload: error,
              });
            });
        }
      }
    },
    [state.loading, monday.client, monday.isClientAuthorized]
  );

  const request = (inputs) =>
    dispatch({
      type: SUB_ITEMS_QUERY_REQUEST,
      payload: inputs,
    });

  return {
    request,
    data: state.data,
    loading: state.loading,
    error: state.error,
    refetch: request,
  };
};

export default useSubItemsQuery;
