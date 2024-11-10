import { Box, Button } from '@chakra-ui/react';
import { useAuth } from '@/context/auth_user.context';

interface Props {
  onClick: () => void;
}

export const GoogleLoginButton = function ({ onClick }: Props) {
  const signInWithGoogleBtn = (
    <Button
      size="lg"
      width="full"
      maxW="md"
      borderRadius="full"
      bgColor="#4285f4"
      color="white"
      colorScheme="blue"
      leftIcon={
        <img
          src="/google.svg"
          alt="google logo"
          style={{ backgroundColor: 'white', padding: '8px', borderRadius: '30px' }}
        />
      }
      onClick={onClick}
    >
      google 계정으로 시작하기
    </Button>
  );

  const { loading, authUser } = useAuth();

  const authInitialized = loading || authUser === null;
  return <Box>{authInitialized ? signInWithGoogleBtn : null}</Box>;
};
