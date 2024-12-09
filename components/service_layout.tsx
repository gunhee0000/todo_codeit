/* eslint-disable react/jsx-props-no-spreading */
import Head from 'next/head';
import { Box, BoxProps } from '@chakra-ui/react';
import GNB from './GNB';

interface Props {
  title: string;
  children: React.ReactNode;
}

export const ServiceLayout: React.FC<Props & BoxProps> = function ({ title = 'test', children, ...boxProps }) {
  return (
    <Box {...boxProps} w="100%" bgColor="#FFFFFF" m="0 auto" align="center">
      <Head>
        <title>{title}</title>
      </Head>
      <GNB />
      <Box w="100%" m="auto" bgColor="#FFFFFF">
        {children}
      </Box>
    </Box>
  );
};
