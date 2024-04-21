import Link from "next/link";
import React from "react";
export default function Home() {
  return (
    <main>
      <div className="container md:px-40 mx-auto flex-col">
        <Top />
        <div className="container px-5 py-24 mx-auto text-gray-600">
          <div className="line" />
          <Section title="About">
            <li className="mb-8">
              <p>
                筑波大学 理工情報生命学術院 システム情報工学研究群
                情報理工学位プログラム
              </p>
              <p>博士前期課程2年</p>
            </li>
            <li className="mb-8">
              <p>インタラクティブプログラミング研究室所属</p>
            </li>
          </Section>
          <div className="line" />
          <Section title="Publications">
            <li className="mb-8">
              <p className="font-bold">
                アクティブ音響センシングを用いた手指の関節角度推定
              </p>
              <p>
                <span className="underline">小西智樹</span>，
                角田陸，國分晴利，久保勇貴，志築文太郎．
                情報処理学会研究報告，Vol.2024-HCI-201，No.21，1月16-17日，
                2023，沖縄，情報処理学会，8pages．
              </p>
              <p>
                link: &nbsp;
                <Link
                  href="http://id.nii.ac.jp/1001/00223223/"
                  className="underline"
                >
                  http://id.nii.ac.jp/1001/00223223/
                </Link>
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
                11月29-12月1日，2023，山梨，日本ソフトウェア科学会， 3pages．
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
                11月29-12月1日，2023，山梨，日本ソフトウェア科学会， 3pages．
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
          </Section>
          <div className="line"></div>
          <Section title="Achievements">
            <li className="mb-8">
              <p className="font-bold">
                株式会社サポーターズ主催 2021年第9回技育CAMPハッカソン 努力賞
              </p>
              <p>履歴をグラフで表示できるChorme拡張機能「Tree History」</p>
            </li>
            <li className="mb-8">
              <p className="font-bold">
                株式会社サポーターズ主催 2022年第4回技育CAMPハッカソン 努力賞
              </p>
              <p>本をめくる動画から文字起こしをするWebアプリ「パラスキャン」</p>
            </li>
            <li className="mb-8">
              <p className="font-bold">
                株式会社サポーターズ主催 2022年技育展 開発・スキル支援部門
                優秀賞
              </p>
              <p>本をめくる動画から文字起こしをするWebアプリ「パラスキャン」</p>
              <p>
                link: &nbsp;
                <Link
                  href="https://talent.supporterz.jp/geekten/2022/exhibition.html#theme14"
                  className="underline"
                >
                  https://talent.supporterz.jp/geekten/2022/exhibition.html#theme14
                </Link>
              </p>
            </li>
            <li className="mb-8">
              <p className="font-bold">
                株式会社しびっくぱわー主催 アフターコロナ×AI Hackathon
              </p>
              <p>株式会社キョウワ賞，株式会社TOKIUM賞</p>
              <p>
                link: &nbsp;
                <Link
                  href="https://civicpower.jp/report/289/"
                  className="underline"
                >
                  https://civicpower.jp/report/289/
                </Link>
              </p>
            </li>
          </Section>
          <div className="line" />
          <Section title="Experiences">
            <li className="mb-8">
              <p>
                2021/11~ 合同会社カフェラテ（アルバイト バックエンドエンジニア）
              </p>
            </li>
            <li className="mb-8">
              <p>2022/09/05~2022/09/16 株式会社ゆめみ（インターン）</p>
            </li>
          </Section>
          <div className="line" />
          <Section title="Works">
            <li className="mb-8">
              <p>ディジコン制作展2021 -Beyond Internet- 「a second」</p>

              <p>
                link: &nbsp;
                <Link
                  href="https://digicon.mast.tsukuba.ac.jp/"
                  className="underline"
                >
                  https://digicon.mast.tsukuba.ac.jp/
                </Link>
              </p>
            </li>
            <li className="mb-8">
              <p>
                ACM Digital
                Libraryの論文をscrapboxにいい感じにフォーマットして登録するChrome拡張機能「Scrap
                Paper」
              </p>
              <p>
                link: &nbsp;
                <Link
                  href="https://chrome.google.com/webstore/detail/scrap-paper/cgkgikddogobbaakbmbjphgipgfbkbdo"
                  className="underline"
                >
                  Chromeウェブストア
                </Link>
                ，
                <Link
                  href="https://github.com/tomoki52/scrap-paper-chrome-extention"
                  className="underline"
                >
                  GitHub
                </Link>
              </p>
            </li>
          </Section>
        </div>
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
type SectionProps = {
  title: string;
  children: React.ReactNode;
};
const Section = ({ title, children }: SectionProps) => {
  return (
    <div className="list-container">
      <h2 className="section-title">{title}</h2>
      <ul className="list-disc ml-5 text-xl leading-relaxed">{children}</ul>
    </div>
  );
};
