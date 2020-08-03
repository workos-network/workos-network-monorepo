// import gql from "graphql-tag";

export const BOARDS_QUERY = `
  query(
    $limit: Int
    $page: Int
    $ids: [Int]
    $board_kid: BoardKind
    $state: String
  ) {
    boards(
      limit: $limit
      page: $page
      ids: $ids
      board_kind: $board_kid
      state: $state
    ) {
      id
      name
      board_folder_id
      board_kind
      description
      owner {
        id
        name
      }
      items {
        id
        name
        group {
          id
          title
        }
        column_values {
          id
          title
          text
          type
          value
        }
      }
    }
  }
`;

export const ITEMS_QUERY = `
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
