import Cake from "../assets/cake.png";

function Home() {
  return (
    <div className="home">
      <h1>
        Bienvenido a <b>Happy Cake</b>
      </h1>
      <h6>El lugar de los pasteles felices</h6>
      <div className="text-center">
        <img src={Cake} alt="pastel" />
      </div>
    </div>
  );
}

export default Home;
