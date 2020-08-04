/* --- Global --- */
import React, {useEffect, useState} from 'react';
import {DateTime} from 'luxon';

const EpochToRelativeDate = props => {
  const SecondsToMill = 1000;
  const [epoch] = useState(props.date);
  const [relative, setRelative] = useState(0);

  useEffect(() => {
    const DateFromMillis = DateTime.fromMillis(props.date * SecondsToMill);
    if (DateFromMillis.isValid) setRelative(DateFromMillis.toRelative());
  }, [epoch]);

  return relative ? <Atom.Span sx={props.sx}>{relative}</Atom.Span> : null;
};

export default EpochToRelativeDate;
