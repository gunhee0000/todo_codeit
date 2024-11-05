import Head from 'next/head';
import GNB from './gnb';

interface Props {
  title: string;
  children: React.ReactNode;
}

export const ServiceLayout = function ({ title = 'poiu', children }: Props) {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <GNB />
      {children}
    </div>
  );
};
