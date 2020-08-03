export default {
  avatar: {
    borderRadius: 99999,
    bg: 'white',
    border: '1px solid #e0e0e0',
    borderColor: 'borderShadow',
    boxShadow: 0,
    p: '2px',
  },
  icon: {
    borderRadius: 99999,
    bg: 'white',
    border: '1px solid #e0e0e0',
    borderColor: 'borderShadow',
    boxShadow: 0,
    p: '2px',
  },
  shadowHover: {
    boxShadow: 0,
    '&:hover': {
      boxShadow: 2,
    },
  },
  transition: 'all 0.05s',
  circle: {
    borderRadius: 9999,
  },

  imageCard: {
    borderRadius: 10,
    boxShadow: 6,
    transition: 'all 0.05s',
    '&:hover': {
      boxShadow: 9,
    },
  },

  card: {
    primary: {
      bg: 'neutral',
      border: '1px solid #e0e0e0',
      borderColor: 'borderShadow',
      boxShadow: 0,
      borderRadius: 4,
      color: 'text',
    },
    sm: {
      p: 2,
    },
    lg: {
      p: 4,
    },
    xl: {
      p: 5,
    },
  },

  /* --- Button Effects --- */
  button: {
    curve: {
      borderRadius: 12,
    },
    rounded: {
      borderRadius: 12,
    },
    sm: {
      fontSize: 0,
      p: 2,
    },
    md: {
      fontSize: 2,
      p: '10px',
    },
    lg: {
      fontSize: 3,
      p: '12px',
      px: '16px',
    },
    xl: {
      p: 5,
    },
    primary: {
      bg: 'primary',
      color: 'white',
    },
    secondary: {
      bg: 'secondary',
      color: 'white',
    },
    white: {
      bg: 'paper',
      border: '1px solid #e0e0e0',
      borderColor: 'borderShadow',
      boxShadow: 0,
      borderRadius: 4,
      color: 'text',
    },
    disabled: {
      bg: 'muted',
      color: 'text',
      boxShadow: 'none',
      '&:hover': {
        boxShadow: 0,
        top: 0,
      },
      '&:active': {
        boxShadow: 0,
        top: 0,
      },
    },
    red: {
      bg: 'red',
      color: 'white',
    },
    blue: {
      bg: 'blue',
      color: 'white',
    },
    green: {
      bg: 'green',
      color: 'white',
    },
    orange: {
      bg: 'orange',
      color: 'white',
    },
    purple: {
      bg: 'purple',
      color: 'white',
    },
  },
};
