export default function Home() {
  return (
    <main>
      <header className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-3">
          <h1 className="text-3xl font-light text-white">
            Welcome to the{" "}
            <span className="font-bold">Any time Tea shop</span>
          </h1>
        </div>
      </header>
      <div className="bg-white rounded-lg shadow px-5 py-6 sm:px-6">
        <div className="rounded-lg flex items-top justify-between">
          <div className="flex-2 pr-10">
            <h1 className="text-xl pb-5  ">
            "Any Time Tea," a charming tea haven nestled in the heart of the city, invites tea enthusiasts on a delightful 
            journey of flavors and tranquility. Stepping into the cozy ambiance of Any Time Tea, customers are greeted
             by the comforting aroma of freshly brewed teas and the promise of a serene tea-drinking experience.
            </h1>
            <p>
            Whether it's a solitary moment of reflection, a casual catch-up with friends, or a cozy date, 
            Any Time Tea invites visitors to make any moment the perfect time for tea. 
            </p>
            <hr className="border-1 mt-10 border-rose-500" />
          </div>
          <div className="">
            <img
              src="/outside.jpg"
              className="drop-shadow rounded-lg"
              alt=""
              srcset=""
            />
          </div>
        </div>
      </div>

      <div className="mx-6">
        <img
          className="mt-5 rounded-lg drop-shadow-md hover:drop-shadow-xl w-full"
          src="/Inshop.jpg"
          alt=""
        />
      </div>
    </main>
  );
}
