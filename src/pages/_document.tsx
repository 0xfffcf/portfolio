import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href='https://fonts.googleapis.com/css2?family=Karla:wght@200;300;400;500;800&display=swap'
          rel='stylesheet'
        />
      </Head>
      <body className='bg-zinc-50 text-zinc-900 dark:bg-zinc-900 dark:text-neutral-200 overflow-x-hidden'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
