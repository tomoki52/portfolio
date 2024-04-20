import Link from "next/link";
export default function Home() {
  return (
    <main>
      <div className="container md:px-40 mx-auto flex-col">
        <Top />
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="line" />
            <div className="list-container">
              <h2 className="section-title">About</h2>
              <ul className="list-disc pl-5 text-xl leading-relaxed">
                <li>
                  <p>
                    筑波大学 理工情報生命学術院 システム情報工学研究群
                    情報理工学位プログラム
                  </p>
                  <p>博士前期課程2年</p>
                </li>
                <li>
                  <p>インタラクティブプログラミング研究室所属</p>
                </li>
              </ul>
            </div>
            <div className="line" />
            <div className="list-container">
              <h2 className="section-title">Publications</h2>
              <h3 className="section-subtitle">国内学会（査読なし）</h3>
              <ul className="list-disc ml-5 text-xl leading-relaxed">
                <li className="mb-8">
                  <p className="font-bold">
                    アクティブ音響センシングを用いた手指の関節角度推定
                  </p>
                  <p>
                    <span className="underline">小西智樹</span>，
                    角田陸，國分晴利，久保勇貴，志築文太郎．
                    情報処理学会研究報告，Vol.2024-HCI-201，No.21，1月16-17日，
                    2023，沖縄，情報処理学会，8pages．
                    <p>
                      link: &nbsp;
                      <Link
                        href="http://id.nii.ac.jp/1001/00223223/"
                        className="underline"
                      >
                        http://id.nii.ac.jp/1001/00223223/
                      </Link>
                    </p>
                  </p>
                </li>
                <li className="mb-8">
                  <p className="font-bold">
                    VR環境におけるフリック入力を利用した低オクルージョンなQWERTYキーボードの実装
                  </p>
                  <p>
                    折居篤，
                    <span className="underline">小西智樹</span>， 志築文太郎．
                    第31回インタラクティブシステムとソフトウェアに関するワークショップ（WISS2023），
                    11月29-12月1日，2023，山梨，日本ソフトウェア科学会，
                    3pages．
                  </p>
                </li>
                <li className="mb-8">
                  <p className="font-bold">
                    VR環境におけるフリック入力を利用した低オクルージョンなQWERTYキーボードの実装
                  </p>
                  <p>
                    佐藤玲生，
                    <span className="underline">小西智樹</span>，志築文太郎．
                    第31回インタラクティブシステムとソフトウェアに関するワークショップ（WISS2023），
                    11月29-12月1日，2023，山梨，日本ソフトウェア科学会，
                    3pages．
                  </p>
                </li>
                <li className="mb-8">
                  <p className="font-bold">
                    スマートフォンを用いたAR環境における片手用空中キーボードの性能調査
                  </p>
                  <p>
                    佐藤玲生，
                    <span className="underline">小西智樹</span>，志築文太郎．
                    情報処理学会研究報告，Vol.2024-HCI-206，No.4，
                    1月15-16日，2024，沖縄，情報処理学会，8pages．
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
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
