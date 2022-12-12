import { gql, useQuery } from '@apollo/client';
import {
  Box, Typography,
} from '@mui/material';

const CLASS_QUERY = gql`
 query CLASS_QUERY {
     Race {
        value
     }
 }
`;

export default function GetStarted() {
  const { data, loading } = useQuery(CLASS_QUERY);
  console.log(data, loading);
  return (
    <div>
      <Box>
        <Typography variant="h3">First, what is your race?</Typography>

      </Box>
    </div>
  );
}
