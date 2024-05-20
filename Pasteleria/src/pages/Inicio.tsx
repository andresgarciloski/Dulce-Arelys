
const Inicio = () => {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="w-[50%] flex flex-col justify-center items-center">
        <div className="w-[70%]">
          <h1 className="text-6xl font-bold">Nuestra historia</h1>
          <div className="flex flex-col mt-10 gap-4text-xl">
            <p>
              Todo comenzo en 1981 cuando la joven Arely le ayudaba a su madre a
              hacer los ricos postres en su viejo horno de piedra, de donde
              viene toda nuestra rica tradicion y sabores autenticos.
            </p>
            <p>
              Ese mismo sabor y tradiciones son lo que nos caracteriza en Dulce
              Arely's , donde todos nuestros productos estan echos con el
              corazon y siempre con una gran pasion por la reposteria.
            </p>
          </div>
          <div className="stats shadow flex justify-center items-center mt-9">
          <div className="stat">
            <div className="stat-title">Contactanos</div>
            <div className="stat-value text-secondary">+52 845125687</div>
          </div>
          <div className="stat">
            <div className="stat-figure text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Total Likes</div>
            <div className="stat-value text-primary">25.6K</div>
          </div>
        </div>
        </div>
      </div>
      <div className="flex justify-center w-[50%]">
        <img
          className="mask mask-parallelogram w-[58%] h-full"
          src="/cake.jpeg"
        />
      </div>
    </div>
  );
};

export default Inicio;
