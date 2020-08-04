/* --- Global --- */
import React, { useEffect, useState } from "react";
import { DateTime } from "luxon";
import { Box } from "@material-ui/core";

const EpochToRelativeDate = (props) => {
  const [date] = useState(props.date);
  const [relative, setRelative] = useState(0);

  useEffect(() => {
    const DateFromMillis = DateTime.fromISO(date);
    if (DateFromMillis.isValid) setRelative(DateFromMillis.toRelative());
  }, [date]);

  return relative ? (
    <Box as="span" sx={props.sx}>
      {relative}
    </Box>
  ) : null;
};

export default EpochToRelativeDate;
