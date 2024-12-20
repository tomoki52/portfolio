import Link from "next/link";
import React from "react";
import "remixicon/fonts/remixicon.css";
import Head from "next/head";

function CommonMeta({
  title = "Tomoki Konishi's Portfolio",
  description = "This is Tomoki Konishi's Portfolio.",
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta property="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`https://github.com/tomoki52.png`} />
      <link rel="icon" href="https://github.com/tomoki52.png" />
    </Head>
  );
}

export default function Home() {
  return (
    <main className="container mx-auto w-2/3  flex-col">
      <CommonMeta />
      <Top />
      <div className="container  py-24 text-gray-600">
        <div className="line" />
        <SectionTitle title="About" />
        <Section>
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
        <SectionTitle title="Publications" />
        <SectionSubtitle title="国際学会（査読あり）" />
        <Section>
          <li className="mb-8 space-y-3">
            <p className="font-bold">
              Active Acoustic Sensing Based Authentication System Using a Door
              Handle
            </p>
            <p>
              <span className="underline">Tomoki Konishi</span>, Myungguen Choi,
              Buntarou Shizuki. <br />
              MUM &apos;24: Proceedings of the 23nd International Conference on
              Mobile and Ubiquitous Multimedia, pp.324-330, December 1-4, 2024,
              Stockholm, Sweden.
              <span className="font-bold">（採択率: 32%）</span>
            </p>
            <p>
              link: &nbsp;
              <Link
                href="https://doi.org/10.1145/3701571.3701587"
                className="underline"
              >
                https://doi.org/10.1145/3701571.3701587
              </Link>
            </p>
          </li>
        </Section>
        <SectionSubtitle title="国内学会（査読なし）" />
        <Section>
          <li className="mb-8 space-y-4">
            <p className="font-bold">
              ドアノブの握り方に基づくアクティブ音響センシングを用いた個人認証システムの検討（
              <Link href="https://www.sighci.jp/}" className="underline">
                学生奨励賞
              </Link>
              ）
            </p>
            <p>
              <span className="underline">小西智樹</span>
              ，崔明根，雨坂宇宙，志築文太郎．
              <br />
              情報処理学会研究報告，Vol.2024-HCI-209，No.1，
              7月22-23日，2024，北海道，情報処理学会，7pages．
            </p>
          </li>
          <li className="mb-8 space-y-4">
            <p className="font-bold">
              複数の自己発電可能な圧電センサを取り付けたウェアラブルデバイスによる肘関節の動作分類
            </p>
            <p>
              折居篤，
              <span className="underline">小西智樹</span>
              ，崔明根，志築文太郎．
              <br />
              情報処理学会研究報告，Vol.2024-HCI-209，No.2，
              7月22-23日，2024，北海道，情報処理学会，8pages．
            </p>
          </li>
          <li className="mb-8 space-y-4">
            <p className="font-bold">
              スマートフォンを用いたAR環境における片手用空中キーボードの性能調査
            </p>
            <p>
              佐藤玲生，
              <span className="underline">小西智樹</span>，志築文太郎．
              <br />
              情報処理学会研究報告，Vol.2024-HCI-206，No.4，
              1月15-16日，2024，沖縄，情報処理学会，8pages．
            </p>
          </li>
          <li className="mb-8 space-y-4">
            <p className="font-bold">
              VR環境におけるフリック入力を利用した低オクルージョンなQWERTYキーボードの実装
            </p>
            <p>
              折居篤，
              <span className="underline">小西智樹</span>， 志築文太郎．
              <br />
              第31回インタラクティブシステムとソフトウェアに関するワークショップ（WISS2023），
              11月29-12月1日，2023，山梨，日本ソフトウェア科学会， 3pages．
            </p>
          </li>
          <li className="mb-8 space-y-4">
            <p className="font-bold">
              片手用空中キーボードのスレートデバイスAR空間上への構築
            </p>
            <p>
              佐藤玲生，
              <span className="underline">小西智樹</span>，志築文太郎．
              <br />
              第31回インタラクティブシステムとソフトウェアに関するワークショップ（WISS2023），
              11月29-12月1日，2023，山梨，日本ソフトウェア科学会， 3pages．
            </p>
          </li>
          <li className="mb-8 space-y-4">
            <p className="font-bold">
              アクティブ音響センシングを用いた手指の関節角度推定
            </p>
            <p>
              <span className="underline">小西智樹</span>，
              角田陸，國分晴利，久保勇貴，志築文太郎．
              <br />
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
        </Section>
        <div className="line"></div>
        <SectionTitle title="Achievements" />
        <Section>
          <li className="mb-8 space-y-4">
            <p className="font-bold">
              第209回情報処理学会ヒューマンコンピュータインタラクション研究会
              学生奨励賞
            </p>
            <p>
              link: &nbsp;
              <Link href="https://www.sighci.jp/" className="underline">
                情報処理学会ヒューマンコンピュータインタラクション研究会
              </Link>
            </p>
          </li>
          <li className="mb-8 space-y-4">
            <p className="font-bold">
              株式会社しびっくぱわー主催 アフターコロナ×AI Hackathon
              株式会社キョウワ賞，株式会社TOKIUM賞
            </p>
            <p>
              link: &nbsp;
              <Link
                href="https://civicpower.jp/report/289/"
                className="underline"
              >
                【report #103】アフターコロナ×AI Hackathon -
                株式会社しびっくぱわー
              </Link>
            </p>
          </li>
          <li className="mb-8 space-y-4">
            <p className="font-bold">
              株式会社サポーターズ主催 2022年技育展 開発・スキル支援部門 優秀賞
            </p>
            <p>本をめくる動画から文字起こしをするWebアプリ「パラスキャン」</p>
            <p>
              link: &nbsp;
              <Link
                href="https://talent.supporterz.jp/geekten/2022/exhibition.html#theme14"
                className="underline"
              >
                技育展2022 特設展示ページ - 株式会社サポーターズ
              </Link>
            </p>
          </li>
          <li className="mb-8 space-y-4">
            <p className="font-bold">
              株式会社サポーターズ主催 2022年第4回技育CAMPハッカソン 努力賞
            </p>
            <p>本をめくる動画から文字起こしをするWebアプリ「パラスキャン」</p>
          </li>
          <li className="mb-8 space-y-4">
            <p className="font-bold">
              株式会社サポーターズ主催 2021年第9回技育CAMPハッカソン 努力賞
            </p>
            <p>履歴をグラフで表示できるChorme拡張機能「Tree History」</p>
          </li>
        </Section>
        <div className="line" />
        <SectionTitle title="Experiences" />
        <Section>
          <li className="mb-8">
            <p className="font-bold">
              2021/11~ 合同会社カフェラテ（アルバイト バックエンドエンジニア）
            </p>
          </li>
          <li className="mb-8">
            <p className="font-bold">
              2022/09/05~2022/09/16 株式会社ゆめみ（インターン）
            </p>
          </li>
        </Section>
        <div className="line" />
        <SectionTitle title="Works" />
        <Section>
          <li className="mb-8 space-y-4">
            <p className="font-bold">
              ディジコン制作展2021 -Beyond Internet- 「a second」
            </p>

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
          <li className="mb-8 space-y-4">
            <p className="font-bold">
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
          </h1>
          <h1 className="title-font  text-3xl mb-4 font-medium text-gray-900">
            Tomoki Konishi
          </h1>
          <Link href="https://github.com/tomoki52">
            <i className="ri-github-line ri-3x"></i>
          </Link>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://github.com/tomoki52.png"
          />
        </div>
      </div>
    </section>
  );
}
type SectionProps = {
  children: React.ReactNode;
};
const Section = ({ children }: SectionProps) => {
  return (
    <div className="list-container">
      <ul className="list-disc ml-5 text-xl leading-relaxed">{children}</ul>
    </div>
  );
};

const SectionTitle = ({ title }: { title: string }) => {
  return <h2 className="section-title">{title}</h2>;
};

const SectionSubtitle = ({ title }: { title: string }) => {
  return <h3 className="section-subtitle">{title}</h3>;
};
