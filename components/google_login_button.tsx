import { Box, Button } from '@chakra-ui/react';
import { useAuth } from '@/context/auth_user.context';

interface Props {
  onClick: () => void;
}

export const GoogleLoginButton = function ({ onClick }: Props) {
  const signInWithGoogleBtn = (
    <Button
      sx={{
        size: 'lg',
        width: 'full',
        maxW: 'md',
        borderRadius: 'full',
        bgColor: '#4285f4',
        color: 'white',
        colorScheme: 'blue',
      }}
      leftIcon={
        <Box bg="white" p="8px" borderRadius="full">
          <img src="/google.svg" alt="google logo" style={{ width: '20px', height: '20px' }} />
        </Box>
      }
      onClick={onClick}
    >
      google 계정으로 시작하기
    </Button>
    //eslint error 반복
    //Expression produces a union type that is too complex to represent.
    //여러가지 방법 적용해 봤지만 해결X
    //typescript와 ChakraUI 버전 충돌로 예상
    //버전 변경 시도X 배포 전 확인 할 것.
  );

  const { loading, authUser } = useAuth();

  const authInitialized = loading || authUser === null;
  return <Box>{authInitialized ? signInWithGoogleBtn : null}</Box>;
};
