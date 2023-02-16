import React from 'react';
import Typography from '../typography/Typography';

const HomePage = () => {
  return (
    <div className="p-4">
      <Typography variant="h1">h1-Heading-32px</Typography>
      <Typography variant="h2">h2-Heading-28px</Typography>
      <Typography variant="h3">h3-Heading-24px</Typography>
      <Typography variant="h4">h4-Heading-20px</Typography>
      <Typography variant="h5">h5-Heading-16px</Typography>
      <Typography variant="h6">h6-Heading-14px</Typography>
      <Typography variant="title">title-Heading: 20px</Typography>
      <Typography variant="sub-title">sub-titleHeading: 16px</Typography>
    </div>
  );
};

export default HomePage;
