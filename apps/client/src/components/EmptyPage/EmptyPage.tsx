import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import React from 'react';
import { EmptyPageProps } from './EmptyPage.types';

export const EmptyPage = ({
  title,
  description,
  buttonText,
  image,
  alt,
  onClick,
}: EmptyPageProps) => (
  <Container component="main" maxWidth="sm">
    <Box
      padding={4}
      display="flex"
      flexDirection="column"
      alignItems="center"
      height="100vh"
      textAlign="center"
    >
      <img src={image} alt={alt} width="150" loading="lazy" />
      <Typography variant="h5" component="h1" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body1">
        {description.map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </Typography>
      <Box mt={2}>
        <Button onClick={onClick} className="btn btn-primary">
          {buttonText}
        </Button>
      </Box>
    </Box>
  </Container>
);
