import {Box, Button} from '@mui/material';

const SortingButton = ({ filteredCol, column }) => {
  const val = filteredCol && Object.keys(filteredCol);
  const ascColorCode = (value) => {
    return value?.includes(column)
      ? filteredCol[column] === 'asc'
        ? 'blue'
        : '#7B98BA'
      : '#7B98BA';
  };
  const descColorCode = (value) => {
    return value?.includes(column)
      ? filteredCol[column] === 'desc'
        ? 'blue'
        : '#7B98BA'
      : '#7B98BA';
  };
  return (
    <Button
      sx={{
        minWidth: '15px',
        ':hover': {
          backgroundColor: 'transparent',
          color: 'black',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          gap: '8px',
        }}
      >
        <i
          className="ri-arrow-up-s-fill"
          style={{
            fontSize: '14px',
            color: ascColorCode(val),
            lineHeight: 0,
          }}
        ></i>
        <i
          className="ri-arrow-down-s-fill"
          style={{
            fontSize: '14px',
            color: descColorCode(val),
            lineHeight: 0,
          }}
        ></i>
      </Box>
    </Button>
  );
};

export default SortingButton;
