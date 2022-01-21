import type { NextPage } from 'next';
import Layout from "@components/layout/layout";
import HeroBlock from "@containers/HeroBlock";

const Home: NextPage = () => {
  return (
    <HeroBlock />
  );
};

Home.Layout = Layout;

export default Home;
