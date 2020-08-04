import { SUB_ITEMS_QUERY } from "../lib/graphql";
import { SUB_ITEMS_QUERY_REQUEST } from "../lib/types";

export const subItemsQuery = (state, dispatch) => async ({
  ids,
  limit,
  page,
}) => {
  if (state.isClientAuthorized) {
    try {
      dispatch({
        type: SUB_ITEMS_QUERY_REQUEST,
      });
      const { data, error } = await client.request({
        query: SUB_ITEMS_QUERY,
        variables: { ids },
      });
      console.log(data, error, "wowxa");
      if (data && data.items) {
        const match = data.items[0];

        const values = JSON.parse(match.value);

        console.log(values, "values");

        // const { data, error } = await client.request({
        //   query: SUB_ITEMS_QUERY,
        //   variables: { ids },
        // });
      }
      if (data && data.items) return { data: data.items, error };
      return { data, error };
    } catch (error) {
      console.log(error, "what");
    }
  }
  return {
    data: [],
    error: "Unauthorized",
  };
};
