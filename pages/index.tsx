import { NextPage } from 'next';
import { Box, Heading, Flex, Center } from '@chakra-ui/react';
import { ServiceLayout } from '@/components/service_layout';
import { GoogleLoginButton } from '@/components/google_login_button';
import { useAuth } from '@/context/auth_user.context';

const IndexPage: NextPage = function () {
  const { signInWithGoogle, authUser } = useAuth();
  console.info(authUser);
  return (
    <ServiceLayout title="test">
      <Box maxW="md" mx="auto">
        <img src="/main_logo.svg" alt="메인로고" />
        <Flex justifyContent="center">
          <Heading>깃 업로드</Heading>
        </Flex>
      </Box>
      <Center mt="20px">
        <GoogleLoginButton onClick={signInWithGoogle} />
      </Center>
    </ServiceLayout>
  );
};

export default IndexPage;
