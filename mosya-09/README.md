# 模写サイト⑨：COFFEE（カフェサイト）

## サイト概要
カフェのWebサイトを想定した模写コーディング。  
固定背景によるパララックス風表現、メニュー一覧表示、Google Map埋め込み、スムーススクロール実装を通して
HTML・CSS・JavaScript（jQuery）の連携を学習した。

## サイト種類
- 店舗サイト（カフェサイト）

## ページ構成
- Header（メインビジュアル＋ナビゲーション）
- MENU
  - COFFEE
  - FOOD
  - OTHER
- ABOUT
- LOCATION
  - Google Map（iframe）
  - 店舗情報
- Footer

## 対応端末
- PC
- スマートフォン（767px以下）

## 使用技術
- HTML5
- CSS3
- JavaScript（jQuery）
- Google Maps（iframe埋め込み）
- リセットCSS（ress）

## 実装内容
- Header：ナビゲーションをFlexboxで右寄せ配置
- MENU：Flexboxで2カラム（COFFEE / FOOD+OTHER）構成
- メニュー表：dl（dt/dd）をFlex-wrapで横並び表示（品名/価格）
- ABOUT：Gridでテキストを2カラム表示（SPは1カラムに切替）
- パララックス風表現：background-attachment: fixed を使用（SPではscrollに切替）
- 見出し表示：position + transform で背景画像の中央に配置
- スムーススクロール：ページ内リンククリックでスクロール位置へアニメーション移動（jQuery animate）
- ボタン装飾：疑似要素（::before / ::after）で枠線アニメーション（hoverで伸長）

## 講師からの指摘
- Flexboxを使用しているが、どの要素を並べているか整理が不十分
- absolute配置の基準要素を明確に説明できていなかった
- background-imageとimgタグの使い分けが曖昧だった
- レスポンシブ時に変更する要素を事前に整理できていなかった

## 詰まった点
- パララックス風表現（固定背景）の仕組みを理解できていなかった
- スムーススクロールのコードの意味を説明できなかった
- dtとddの横並びの仕組み（幅配分・折り返し）を理解できていなかった
- absolute配置の基準要素がどれか分からなくなることがあった

## 学んだこと
- background-attachment: fixed によって固定背景（パララックス風表現）ができる（ただし端末依存あり）
- dlは「項目名と値」を並べる表示に向いている
- jQueryのanimateでスクロール位置を制御できる
- absolute配置は親要素のposition指定が基準になる

## 今後の改善点
- Flexboxを使う前に「横並びの単位（どの箱同士を並べるか）」を明確にする
- absolute配置を使う場合は、基準要素（relative）を先に決めてから組む
- JavaScript（スムーススクロール）の処理を自分の言葉で説明できる状態にする
- PC/SPの差分を実装前に洗い出して、後付け調整を減らす
