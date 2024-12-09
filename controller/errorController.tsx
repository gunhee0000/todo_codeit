import { Box, Text } from '@chakra-ui/react';
import { NextPage } from 'next';
import GNB from '@/components/GNB';

export const ErrorController: NextPage = function () {
  return (
    <Box>
      <GNB />
      <Text fontWeight="bold" fontSize="lg" pt="300px">
        404 not Found
      </Text>
    </Box>
  );
};
