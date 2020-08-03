export default {
  // Site
  /* --------------- */
  site: {
    container: {
      flex: 1,
      minHeight: '100vh',
      width: '100%',
    },
    header: {
      bg: 'paper',
      color: 'text',
      borderBottom: '2px solid #ececec',
      px: 4,
      py: 2,
      zIndex: 100,
    },
    footer: {
      bg: 'paper',
      color: 'white',
      minHeight: [null, null, '50vh'],
      boxShadow: 0,
      px: 4,
      py: [4, 4, 5],
      zIndex: 100,
    },
  },

  // Dashboard
  /* --------------- */
  dashboard: {
    container: {
      bg: 'solitude',
      color: 'text',
      minHeight: '100vh',
      overflow: 'hidden',
      flex: 1,
    },
    top: {
      bg: 'paper',
      boxShadow: 2,
      color: 'text',
      borderBottom: '2px solid #ececec',
      mb: 3,
      px: 4,
      py: 2,
      zIndex: 100,
    },
    main: {
      flex: 12,
      overflow: 'auto',
      zIndex: 50,
    },

    aside: {
      // bg: 'neutral',
      // boxShadow: 2,
      color: 'text',
      flex: [3, 3, 4, 2],
      zIndex: 1000,
    },
    content: {
      // bg: 'neutral',
      // boxShadow: 2,
      color: 'text',
      flex: [3, 3, 4, 12],
      zIndex: 1000,
    },
    bottom: {
      bg: 'white',
      gradient: 'blue',
      color: 'text',
      boxShadow: 3,
      px: 4,
      py: 3,
      zIndex: 100,
    },
  },

  // Canvas
  /* --------------- */
  canvas: {
    container: {
      bg: '#27359e',
      flex: 1,
      height: '100vh',
      flexDirection: 'column',
      color: 'text',
    },
    header: {
      color: 'white',
      px: 4,
      py: 2,
      zIndex: 2000,
    },
    main: {
      // bg: '#27359e',
      flex: 1,
      height: '100%',
      color: 'text',
    },
    footer: {
      color: 'white',
      // height: 50,
      px: 4,
      py: 3,
      zIndex: 2000,
    },
  },
  course: {
    container: {
      bg: 'solitude',
      color: 'text',
      minHeight: '100vh',
      overflow: 'hidden',
      flex: 1,
    },
    top: {
      bg: 'paper',
      boxShadow: 2,
      color: 'text',
      borderBottom: '2px solid #ececec',
      px: 4,
      py: 2,
      zIndex: 100,
    },
    main: {
      flex: 12,
      overflow: 'auto',
      zIndex: 50,
    },
    content: {
      bg: 'neutral',
      boxShadow: 2,
      color: 'text',
      flex: [3, 3, 4, 12],
      zIndex: 1000,
    },
    bottom: {
      // bg: 'white',
      gradient: 'blue',
      color: 'text',
      boxShadow: 3,
      px: 4,
      py: 3,
      zIndex: 100,
    },
  },
  account: {
    container: {
      bg: 'solitude',
      color: 'text',
      minHeight: '100vh',
      overflow: 'hidden',
      flex: 1,
    },
    top: {
      bg: 'paper',
      boxShadow: 2,
      color: 'text',
      borderBottom: '2px solid #ececec',
      px: 4,
      py: 2,
      zIndex: 100,
    },
    main: {
      boxShadow: 2,
      border: '2px solid #e3e8ee',
      borderRadius: 12,
      flex: 12,
      overflow: 'auto',
      zIndex: 50,
    },
    content: {
      bg: 'neutral',
      boxShadow: 2,
      color: 'text',
      flex: [3, 3, 4, 12],
      zIndex: 1000,
    },
    bottom: {
      // bg: 'white',
      gradient: 'blue',
      color: 'text',
      boxShadow: 3,
      px: 4,
      py: 3,
      zIndex: 100,
    },
  },
};
