import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const FeatureCard = ({ icon, title, description, iconColor }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Paper
        elevation={0}
        sx={{
          p: 3,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          bgcolor: 'background.paper',
          borderRadius: 2,
          transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: (theme) => theme.shadows[4],
          },
        }}
      >
        <Box
          sx={{
            width: 48,
            height: 48,
            mb: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 1,
            bgcolor: (theme) => theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.04)',
          }}
        >
          <svg
            className={iconColor}
            width="24"
            height="24"
            viewBox={icon.viewBox}
            fill="currentColor"
            aria-hidden="true"
          >
            <path d={icon.path} />
          </svg>
        </Box>
        <Typography
          variant="h6"
          component="h3"
          sx={{
            mb: 1,
            fontWeight: 600,
            color: 'text.primary',
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: 'text.secondary',
            lineHeight: 1.6,
          }}
        >
          {description}
        </Typography>
      </Paper>
    </motion.div>
  );
};

export default FeatureCard; 