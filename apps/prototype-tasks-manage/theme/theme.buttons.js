export default {
  core: {
    gradient: 'gray',
    color: 'charcoal',
    cursor: 'pointer',
    border: 0,
    padding: 2,
    borderRadius: 4,
    boxShadow: 0,
    p: 3,
    position: 'relative',
    '&:hover': {
      boxShadow: 1,
      top: '-2px',
    },
    '&:active': {
      boxShadow: 0,
      top: '1px',
    },
  },
};
