# 持久走チャレンジ

学校ごとの設定で使える、タブレット向けの持久走記録サイトです。

## 今回の構成

試作版の1ファイル構成から、今後の拡張・修正をしやすい構成へ分離しました。

- 設定: data/config.js / js/settings.js
- メダル定義: data/medals.js
- 記録処理: js/records.js
- メダル処理: js/medals.js
- 認定証: js/certificate.js
- 保存: js/storage.js
- 画面表示: js/ui.js
- 起動とイベント: js/app.js
- CSS: base / layout / components / responsive

## メダル

data/medals.js の image に、既存のメダル素材へのパスやURLを設定して差し替えます。

メダルは距離ごとに独立したデータなので、追加・削除・順番変更が簡単です。

## 設定URL

現在はURLパラメータで設定を受け取れます。

?school=○○小学校&grade=6年&class=1組&lap=200&goal=10000

学校名は初期設定に入れていません。

## 方針

外部API、バックエンド、ビルド環境は使用しません。記録はlocalStorageに保存します。

今後は先生用設定画面、配布URL生成、既存メダル素材との接続などを、それぞれ独立して追加できる構成にしています。
