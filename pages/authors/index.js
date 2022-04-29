import Head from "next/head";
import Header from "components/Header";
import PageContainer from "components/PageContainer";

export default function AuthorsPage() {
  return (
    <>
      <Head>
        <title>Authors</title>
      </Head>
      <Header />
      <PageContainer>
        <h2>Authors</h2>
      </PageContainer>
    </>
  );
}