import { Box, Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';

const GNB = function () {
  const router = useRouter();
  const handleNav = () => {
    router.push('/');
  };
  return (
    <Box borderBottom={1} borderStyle="solid" borderColor="#FFFFFF" h="60px" pt="10px" border="1px solid #E2E8F0">
      <Box flex="1" maxW="1200px" textAlign="left">
        <Button onClick={handleNav} bgColor="white" _hover={{ background: 'none' }}>
          <img style={{ height: '40px' }} src="/icon_doit.png" alt="logo" />
        </Button>
      </Box>
    </Box>
  );
};

export default GNB;
