import * as React from "react";

import Rating from "@mui/material/Rating";

import Stack from '@mui/material/Stack';

export default function BasicRating({rating}) {
  const [value, setValue] = React.useState(rating);

  return (
    <Stack spacing={0.5}>
      <Rating name="half-rating-read" defaultValue={2.5} value={value}  precision={0.5} readOnly />
    </Stack>
  );
}
