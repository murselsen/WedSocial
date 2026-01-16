// Components
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
const Home = () => {
  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header />
      <Hero />
    </div>
  );
};

export default Home;
