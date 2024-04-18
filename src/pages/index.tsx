export default function Home() {
  return (
    <main>
      <Top />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="line" />
          <div className="line">
            <div className="list-container">
              <h2 className="list-heading">Publications</h2>
              <p className="leading-relaxed text-base">投稿論文</p>
            </div>
          </div>
          <div className="line">
            <div className="list-container">
              <h2 className="list-heading">Achivements</h2>
              <p className="leading-relaxed text-base">ハッカソン</p>
            </div>
          </div>
          <div className="line">
            <div className="list-container">
              <h2 className="list-heading">Experiences</h2>
              <p className="leading-relaxed text-base">
                アルバイト，インターン
              </p>
            </div>
          </div>
          <div className="line">
            <div className="list-container">
              <h2 className="list-heading">Works</h2>
              <p className="leading-relaxed text-base">色々</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Top() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            小西智樹
            <br />
            Tomoki Konishi
          </h1>
          <p className="mb-8 leading-relaxed">筑波大学大学院</p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://dummyimage.com/720x600"
          />
        </div>
      </div>
    </section>
  );
}
