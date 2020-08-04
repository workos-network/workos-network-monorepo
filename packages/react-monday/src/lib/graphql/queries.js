// import gql from "graphql-tag";

export const BOARDS_QUERY = `
  query(
    $limit: Int
    $page: Int
    $ids: [Int]
    $board_kid: BoardKind
    $state: State
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
      group {
        id
        title
      }
      assets {
        id
        url_thumbnail
        name
        url
      }
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
      updates {
        id
        text_body
        created_at
        assets {
          id
        }
        creator {
          id
          photo_thumb_small
          name
        }
        
      }
    }
  }
`;

export const SUB_ITEMS_QUERY = `
query($ids: [Int]) {
  items(ids: $ids) {
    column_values(ids: "subitems") {
      id
      type
      text
      type
      additional_info
      value
      title
    }
  }
}
`;
