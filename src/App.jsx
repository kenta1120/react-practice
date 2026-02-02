import React from "react";
import MyHello from "./MyHello";
import EventBasic from "./EventBasic";
import StateBasic from "./StateBasic";

function Header() {
  return <h2>ヘッダーです</h2>;
}

export default function App() {
  const tab = 2;
  const dest = "https://react.dev";
  const isDocs = true;
  const props = {
    color: 'White',
    backgroundColor: 'Blue',
    padding: 3
  };
  const title = '実践入門';

  const mainElement = React.createElement(
    "div",
    { className: "main" },
    React.createElement(
      "p",
      null,
      `「${title}」(クリエイティブ)`
    )
  );

  return (
    <>
      <Header />
      <h1>Appコンポーネント</h1>
      <p>ページ全体を構成するUI部品です</p>

      <div className="field">
        <label htmlFor="title">署名</label>
        <input id="title" tabIndex={tab} />
      </div>

      <div className="main">
        <p>「{title}」(クリエイティブ) </p>
      </div>

      {mainElement}

      <a href={dest + (isDocs ? "/docs" : "")}>React本家サイト</a>

      <p style={props}>プロジェクト</p>

      <h1>Propsの勉強会</h1>

      <MyHello myName="鈴木" />
      <MyHello myName="佐藤" />
      <MyHello myName="田中" />

      <h1>イベント処理の基本</h1>
      <EventBasic type="time" />

      <StateBasic init={0} />
    </>
  );
}
