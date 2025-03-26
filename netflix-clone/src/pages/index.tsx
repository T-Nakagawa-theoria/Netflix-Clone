import Head from "next/head";
import styled from '@emotion/styled';

const StyledParagraph = styled.p`
  color: lightgreen;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Netflix Clone</title>
        <meta name="description" content="Netflix Clone" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <main>
          <StyledParagraph>
            Netflix Clone
          </StyledParagraph>
        </main>
      </div>
    </>
  );
}
