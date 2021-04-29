# 食事管理アプリ

1日の合計カロリーを計算できるアプリを作りました。

URL：https://react-firebase-7e85f.web.app/



# 開発経緯

### アプリのコンセプト

* 簡単に使用する事ができ、ダイエットのサポートをコンセプトとして作成いたしました。

最近のフィットネスブームでボディメイクに興味を持つ人が増えてきました。私もその1人です。運動を行い食生活を改善することによりMAX体重125kgから85kgまで体重を落とすことに成功しました。<br>
体重を落とすために1番必要だったのは食生活の改善でした。1日にどのくらいのカロリーをとり、その内脂質、タンパク質、炭水化物の量はどのくらいか計算しなければいけません。多くの人がこの食生活の部分を適当に行ってしまい、挫折してしまいます。　<br>
そこで多くの人が面倒で避けてしまう食生活の改善を簡単に行えるサイトを作りたいと考え本アプリを作成いたしました。

### アプリの概要

前回作成した[Fai Fai Diet](https://fai-fai-di.web.app/)の改良版として本アプリを作成いたしました。

改善点としては
* 履歴を残せるようにする。
* 食材を登録できるようにする。
* ユーザー別に認証する。

以上、３点を本アプリでは改善いたしました。



# 使用イメージ

### 認証機能の追加
emailとpasswordでアカウントを作成したりログインしたりできる機能を実装いたしました。

![demo1](https://user-images.githubusercontent.com/78431096/116250160-6e314880-a7a8-11eb-9a68-c8a9194605ae.gif)

### 食材の登録
自分の好きな食材の写真、栄養を保存できるようにしました。

![demo2](https://user-images.githubusercontent.com/78431096/116251611-cb79c980-a7a9-11eb-9711-6274f11919a3.gif)

### 食材の編集、削除
登録した食材の編集、削除も可能です。

![demo4](https://user-images.githubusercontent.com/78431096/116255200-fdd8f600-a7ac-11eb-9d84-6a61b2c4a7e4.gif)

### カロリー計算、登録
食べた量に対して栄養を計算し直す事ができます。

![demo5](https://user-images.githubusercontent.com/78431096/116261607-c53c1b00-a7b2-11eb-909d-bc4bded213e3.gif)

### 総合摂取カロリーの計算
１日食べたものを登録することによってその日の総合カロリーを計算します。
![demo8](https://user-images.githubusercontent.com/78431096/116262321-64611280-a7b3-11eb-8703-ecfa66e01e2c.gif)

### 履歴を残せる
1日の総合摂取カロリーを履歴として残せるようにしました。

![demo7](https://user-images.githubusercontent.com/78431096/116260059-54483380-a7b1-11eb-8321-a0b38905ee52.gif)

# 機能一覧

* ユーザー登録機能
* ログイン機能
* 食材の栄養素の登録
* 食材の栄養素の編集
* 食材の栄養をの削除
* 摂取した食材の量に応じて栄養素の自動計算
* 合計カロリーの自動計算
* 履歴表示機能


# 使用言語

### フロントエンド

HTML/CSS/JavaScript/React/Redux

### データベース

firebase

### その他ツール

Visual Studio Code

### デプロイ環境

firebase

# 改善した点

### ユーザー別に認証する
各ユーザーの情報が登録してあるコレクションのサブコレクションとしてそのユーザーが摂取した食材を保存するコレクション、そのユーザーの今までの履歴を保存するコレクションを登録することによってユーザーごとにデータを管理する事ができました。

### 食材を登録できるようにする
ログインしたユーザーすべての人が共有できるようにしました。食材でだけではなく料理も登録できるようにしてあり自分が考えて作ったダイエット飯を共有できるようにするためです。この意図は、1人でやると日々食べるものが同じになってしまいます。そこで減量飯をシェアする事ができたら飽きる事なくダイエットを継続出来るのではないかと考えたからです。

### 履歴を残せるようにする
登録ボタンを押した時点での総合摂取カロリーと日付を保存し表示で記すようにしてあります。

# 苦労した点

### データベースの削除
コレクションの中を




