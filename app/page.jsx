import Feed from "@components/Feed";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
      Discover & Share
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center'> Post-Powered Prompts</span>
    </h1>
    <p className='desc text-center'>
      Postoverflow is an open-source Post sharing platform for modern world to
      discover, create and share creative posts
    </p>

    <Feed />
  </section>
);

export default Home;
