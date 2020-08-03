// import { gql } from "graphql-hooks";

/* ----------------------- */
// Contract : Query
/* ----------------------- */
export const updateCreateMutation = `
  mutation($item_id: Int, $body: String!) {
    create_update(item_id: $item_id, body: $body) {
      id
    }
  }
`;

export const ITEM_MUTATE = `
  query($limit: Int, $page: Int, $ids: [Int], $newest_first: Boolean) {
    items(limit: $limit, page: $page, ids: $ids, newest_first: $newest_first) {
      id
      creator_id
      name
      created_at
      board {
        id
        name
        description
      }
      column_values {
        additional_info
        id
        text
        title
        type
        value
      }
    }
  }
`;
