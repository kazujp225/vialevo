ホームページ構築に関するヒアリング内容まとめ（最終版）
1. サイトの目的・優先順位

最優先：企業（建設会社・ゼネコン）からの問い合わせ獲得

求職者向けの集客は今回優先しない

HPは 「信用の土台」 として最低限しっかりした形が必要
（言葉の意図：豪華さより“ちゃんとある”ことが重要）

トップページ（ホーム）

1ページでわかるアックス（/aboutus/）

会社を知る

アックスの軌跡

企業理念

会社概要

技術者データ

社内制度・福利厚生

仕事を知る

技術職（施工管理・CADオペレーター）

営業・採用・総務（内勤）

看護師・医師（トライアル雇用）

人を知る

社長・副社長紹介

創業メンバー紹介

営業マン対談

採用面接の流れと面接官

施工管理で働く人たち紹介

コラム

コラム一覧

お知らせ

社員ブログ

エントリーフォーム

他社との比較

応募〜勤務初日までの流れ

よくある質問

応募方法

募集要項

施工管理（正社員）

営業・採用（正社員）

看護師・医師（トライアル）

営業サポート・営業事務（アルバイト）
株式会社アックス
+1

ページタイプとしては：

共通レイアウト（ヘッダー＋フッター）

トップページ（LP型）

説明系コンテンツページ（「1ページでわかる」「会社を知る」「仕事を知る」「人を知る」の下層）

記事一覧（コラム・お知らせ・ブログの一覧）
株式会社アックス

記事詳細（コラム詳細・ブログ詳細・お知らせ詳細）
株式会社アックス

求人一覧（募集要項）
株式会社アックス

求人詳細（各職種の募集要項詳細）
株式会社アックス

エントリーフォーム（応募フォーム）
株式会社アックス

2. 共通レイアウト定義（HTML 抽象）
2-1. ページ全体スケルトン
<html lang="ja">
  <head>…</head>
  <body class="page page--{type}">
    <header class="site-header">
      <div class="site-header__inner">
        <a class="site-header__logo" href="/">AXE</a>
        <nav class="global-nav global-nav--desktop">
          <ul class="global-nav__list">
            <!-- トップ / 1ページでわかる / 会社を知る… -->
          </ul>
        </nav>
        <div class="site-header__cta">
          <a href="/entry/" class="btn btn--primary">応募する</a>
          <a href="/recruitment/" class="btn btn--outline">募集要項</a>
        </div>
        <button class="site-header__menu-button">
          <!-- ハンバーガーアイコン -->
        </button>
      </div>

      <!-- SP用ドロワーメニュー -->
      <nav class="global-nav global-nav--mobile">
        <!-- 同じ階層構造をリストで表示 -->
      </nav>
    </header>

    <main class="site-main">
      {page-main-content}

      <!-- 全ページ共通の採用CTA帯 -->
      <section class="section section--cta-global">
        …
      </section>

      <!-- 「ご検討中の方へ」リンク群 -->
      <section class="section section--for-considering">
        …
      </section>
    </main>

    <footer class="site-footer">
      <div class="site-footer__info">
        <!-- 会社名・住所・YouTubeリンクなど -->
      </div>
      <nav class="site-footer__nav">
        <!-- グローバルナビの再掲 -->
      </nav>
      <small class="site-footer__copy">© Axe …</small>
    </footer>
  </body>
</html>


ヘッダー内のナビ項目が複数回出ているので、
PC用ナビと、SP用のハンバーガーメニュー内ナビの2系統があると考えるのが自然。
株式会社アックス
+1

「全員面接、3,000名採用！」のCTA帯と「ご検討中の方へ」リンク群は、トップだけでなく下層にも繰り返し出現しているので、共通コンポーネント扱いが妥当。
株式会社アックス
+2
株式会社アックス
+2

CSS的には：

.site-header：固定 or スクロールで影がつくヘッダー（position: sticky / fixed 想定）

.site-main：max-width付きの中央コンテナ＋セクションごとに背景色や余白を切り替え

.section：上下マージン共通、バリエーションを修飾クラス（--hero, --stats, --list など）で制御

.btn：全サイト共通ボタンスタイル、色違いを --primary, --outline などで切替

実際のクラス名までは取れないので、再実装向けの抽象設計として見てください。

3. トップページのページ定義（LP型）
3-1. セクション構成

ホームの構造をセクション単位で切るとこんな感じ：
株式会社アックス

hero

キャッチコピー（医療・建設×業界トップの給与を訴求）

「2025年11月最新実績」＋

技術者数（181名）

定着率（95%）

「応募する」「募集要項を見る」ボタン

feature-onepage

「1ページでわかるアックス」への大きめカードリンク

about-groups

About Us（アックスを知る）

会社を知る（小リンクリスト）

仕事を知る

社員を知る
それぞれイメージ画像＋サブリンクのリスト。

column-list

「Column アックスのコラム」

最新3件程度のコラム一覧＋「一覧へ」ボタン

news-list

「News お知らせ」

最新4件＋「お知らせ一覧へ」

blog-list

「Blog 社員ブログ」

最新1件＋「社員ブログ一覧へ」

cta-global

「全員面接、3,000名採用！」帯

「応募する」「募集要項を見る」

for-considering

「ご検討中の方へ」

他社との違い / 応募〜面接の流れ / FAQ / 応募方法 へのリンク

line-cta + footer

LINE事前相談バナー

会社情報・住所・YouTube・フッターナビ

3-2. 抽象HTML構造
<main class="site-main site-main--home">

  <section class="section hero hero--with-stats">
    <div class="container hero__inner">
      <div class="hero__copy">
        <p class="hero__label">業界トップの給与</p>
        <h1 class="hero__title">
          医療・建設業界で働くならアックスへ！
        </h1>
        <p class="hero__note">2025年11月最新実績</p>
        <div class="hero-stats">
          <div class="hero-stat">
            <p class="hero-stat__value">181<span>名</span></p>
            <p class="hero-stat__label">現在の技術者数</p>
          </div>
          <div class="hero-stat">
            <p class="hero-stat__value">95<span>%</span></p>
            <p class="hero-stat__label">定着率</p>
          </div>
        </div>
        <div class="hero__buttons">
          <a href="/entry/" class="btn btn--primary">応募する</a>
          <a href="/recruitment/" class="btn btn--secondary">募集要項を見る</a>
        </div>
      </div>
      <div class="hero__visual">
        <!-- メインビジュアル -->
      </div>
    </div>
  </section>

  <section class="section section--onepage-link">
    <!-- 「1ページでわかるアックス」の大カード -->
  </section>

  <section class="section section--about-groups">
    <!-- 1.会社を知る / 2.仕事を知る / 3.社員を知る の3カラム or 縦並び -->
  </section>

  <section class="section section--column-list">
    <!-- コラム3件＋一覧ボタン -->
  </section>

  <section class="section section--news-list">
    <!-- お知らせ4件＋一覧ボタン -->
  </section>

  <section class="section section--blog-list">
    <!-- ブログ最新1件＋一覧ボタン -->
  </section>

  {cta-global}
  {for-considering}
</main>


CSS設計のポイント（抽象）：

.container で max-width と左右余白、セクションごとに background-color を変えてLPっぽく見せている構造が想定される。

.hero-stats はFlexレイアウトで2つのカードを横並び → SPでは縦積み。

「コラム」「お知らせ」は同じカードコンポーネント（タイトル＋日付＋抜粋）を使い回せる設計にしておくと実装が楽。

4. 説明系コンテンツページ（「1ページでわかる」など）

代表例：/aboutus/「1ページでわかるアックス」
株式会社アックス

4-1. セクション構成

ヒーロー（タイトル＋パンくず）

セクション1：会社概要（会社名、役員、設立日、事業の概要）

セクション2：働いている人の属性（年齢構成・男女比など）

セクション3：アックスで働くメリット（給与・雇用形態・勤務エリアなど、データも含む）

下部のナビブロック（「1.会社を知る / 2.仕事を知る / 3.人を知る」へのリンク）

共通CTA・「ご検討中の方へ」・LINE・フッター

4-2. 抽象HTML構造
<main class="site-main site-main--content">
  <section class="section page-header">
    <div class="container">
      <nav class="breadcrumb">
        <a href="/">ホーム</a> &gt; <span>1ページでわかるアックス</span>
      </nav>
      <h1 class="page-title">1ページでわかるアックス</h1>
    </div>
  </section>

  <article class="content content--onepage">
    <section class="section section--company-overview">
      <div class="container">
        <h2>どんな会社？</h2>
        <!-- 会社説明＋会社名・役員・設立日のデータ -->
      </div>
    </section>

    <section class="section section--member-profile">
      <div class="container">
        <h2>どんな人が働いている？</h2>
        <!-- テキスト＋年齢構成・男女比・職種構成のデータ -->
      </div>
    </section>

    <section class="section section--merit">
      <div class="container">
        <h2>アックスで働くメリットは？</h2>
        <!-- 給与水準・雇用形態・勤務地・平均給与など -->
      </div>
    </section>

    <section class="section section--deep-links">
      <!-- 1.会社を知る / 2.仕事を知る / 3.人を知る のボタン群 -->
    </section>
  </article>

  {cta-global}
  {for-considering}
</main>


この「ヒーロー＋パンくず＋本文セクション＋共通CTA」の形は、他の説明ページ（会社概要／制度／仕事内容説明など）にも共通の**「汎用コンテンツテンプレ」**として流用できます。
株式会社アックス
+1

5. 記事系ページ
5-1. 記事一覧（コラム・お知らせ・ブログ）

コラム一覧ページ /column/ は：タイトル＋リスト＋ページネーション＋共通CTA。
株式会社アックス

抽象構造：

<main class="site-main site-main--archive">
  <section class="section page-header">
    <div class="container">
      <nav class="breadcrumb">
        <a href="/">ホーム</a> &gt; <span>コラム</span>
      </nav>
      <h1 class="page-title">コラム</h1>
    </div>
  </section>

  <section class="section section--post-archive">
    <div class="container">
      <ul class="post-list">
        <li class="post-card">
          <a href="{post-url}">
            <h2 class="post-card__title">記事タイトル</h2>
            <time class="post-card__date">2025年8月26日</time>
          </a>
        </li>
        <!-- 繰り返し -->
      </ul>

      <nav class="pagination">
        <a href="?paged=1" class="is-current">1</a>
        <a href="?paged=2">2</a>
        <a href="?paged=3">3</a>
      </nav>
    </div>
  </section>

  {cta-global}
  {for-considering}
</main>


「お知らせ」「ブログ」も同じテンプレで、カテゴリ・タイトルだけ変える構造と考えられます。

5-2. 記事詳細（コラム・ブログ・お知らせ）

コラム詳細ページの構造：
株式会社アックス

パンくず（ホーム ＞ YouTube ＞ 記事タイトル）

記事タイトル（h1）

日付（公開日・更新日）

メイン画像

本文（h2見出し＋段落＋引用＋画像＋箇条書き）

関連記事リスト

共通CTA・「ご検討中の方へ」・LINE・フッター

抽象HTML：

<main class="site-main site-main--single">
  <article class="post">
    <header class="post-header">
      <div class="container">
        <nav class="breadcrumb">…</nav>
        <h1 class="post-title">建設派遣の営業現場に迫る…</h1>
        <div class="post-meta">
          <time datetime="2025-09-10">2025 9/10</time>
        </div>
        <figure class="post-thumb">
          <img src="…" alt="">
        </figure>
      </div>
    </header>

    <div class="post-body">
      <div class="container">
        <!-- 目次（自動生成のTOC） -->
        <nav class="post-toc">
          <!-- h2へのアンカーリンク -->
        </nav>

        <!-- 本文 -->
        <h2>26歳で支店長に！宮川さんのキャリアストーリー</h2>
        <p>…</p>
        <blockquote>…</blockquote>
        <img src="…" alt="">
        <!-- etc -->
      </div>
    </div>

    <section class="section section--related-posts">
      <div class="container">
        <h2>関連記事</h2>
        <ul class="post-list post-list--related">
          <!-- 関連記事カード -->
        </ul>
      </div>
    </section>
  </article>

  {cta-global}
  {for-considering}
</main>


CSS的には：

.post：本文幅は少し狭め（読みやすさのため）

.post-toc：サイドか本文上部に置く。SPでは本文上にフル幅で表示。

6. 求人ページ（募集要項）
6-1. 求人一覧 /recruitment/
株式会社アックス

構造：

パンくず＋h1「募集要項」

各職種へのカードリンク（施工管理／医師・看護師／営業・採用事務／営業サポート・事務）

共通CTA＋「ご検討中の方へ」＋LINE＋フッター

抽象HTML：

<main class="site-main site-main--recruitment">
  <section class="section page-header">…</section>

  <section class="section section--job-list">
    <div class="container">
      <ul class="job-list">
        <li class="job-card">
          <a href="/recruitment/construction/">
            <h2 class="job-card__title">正社員 施工管理</h2>
            <p class="job-card__meta">
              勤務地：全国 ／ 給与：30万円〜
            </p>
            <p class="job-card__excerpt">
              未経験からでも手に職をつけて安定して働きたい方…
            </p>
          </a>
        </li>
        <!-- 他職種 -->
      </ul>
    </div>
  </section>

  {cta-global}
  {for-considering}
</main>

6-2. 求人詳細（施工管理など）
株式会社アックス

構造：

パンくず（ホーム ＞ 募集要項 ＞ 施工管理（正社員））

h1：職種名

職種概要（1〜2行）

その下に項目＋値の一覧（雇用形態／勤務時間／勤務地／給与／昇給・賞与／諸手当／休日・休暇／福利厚生）

関連コンテンツへのリンク（「施工管理のお仕事についてはこちら」）

共通CTA＋「ご検討中の方へ」＋LINE＋フッター

抽象HTML：

<main class="site-main site-main--job">
  <article class="job-detail">
    <header class="job-detail__header">
      <div class="container">
        <nav class="breadcrumb">…</nav>
        <h1 class="job-detail__title">施工管理（正社員）</h1>
        <p class="job-detail__lead">
          全国の建設現場へアックスの正社員として派遣される施工管理アシスタントの募集…
        </p>
      </div>
    </header>

    <section class="section section--job-meta">
      <div class="container">
        <dl class="job-table">
          <div class="job-table__row">
            <dt>雇用形態</dt>
            <dd>正社員（試用期間6ヶ月・条件同じ）</dd>
          </div>
          <div class="job-table__row">
            <dt>勤務時間</dt>
            <dd>8:00〜17:00（休憩1時間）</dd>
          </div>
          <!-- 勤務地／給与／昇給・賞与／手当／休日／福利厚生... -->
        </dl>
      </div>
    </section>

    <section class="section section--job-related">
      <div class="container">
        <a class="btn btn--link" href="/jobs/construction/">施工管理のお仕事についてはこちら</a>
      </div>
    </section>
  </article>

  {cta-global}
  {for-considering}
</main>


CSS要点：

.job-table を display: grid や table風の見せ方で2カラム構成にすると情報量が多くても読みやすい。

SPでは dt の上に dd を積む1カラムに崩すブレークポイントが必要。

7. エントリーフォームページ

/entry/ の構造：
株式会社アックス

パンくず＋h1「エントリーフォーム」

「不安なことはLINEで聞いてね」導線＋LINEボタン

入力フォーム本体（個人情報／希望職種／流入経路／備考）

プライバシーポリシー同意文言

共通CTA＋「ご検討中の方へ」＋LINE＋フッター

抽象HTML：

<main class="site-main site-main--entry">
  <section class="section page-header">…</section>

  <section class="section section--entry-intro">
    <div class="container">
      <p>事前に確認しておきたいことがある場合は公式LINEからご連絡ください。</p>
      <a href="https://lin.ee/..." class="btn btn--line">公式LINEで質問する</a>
    </div>
  </section>

  <section class="section section--entry-form">
    <div class="container">
      <form class="form form--entry" method="post">
        <div class="form-group">
          <label>お名前 <span class="form-required">必須</span></label>
          <input type="text" name="name" required>
        </div>
        <div class="form-group">
          <label>メールアドレス <span class="form-required">必須</span></label>
          <input type="email" name="email" required>
        </div>
        <!-- 電話番号 / 生年月日 / 郵便番号 / 住所 -->
        <div class="form-group">
          <label>希望職種 <span class="form-required">必須</span></label>
          <select name="job_type" required>…</select>
        </div>
        <div class="form-group">
          <label>アックスを知ったきっかけ <span class="form-required">必須</span></label>
          <select name="source" required>…</select>
        </div>
        <div class="form-group">
          <label>備考</label>
          <textarea name="note"></textarea>
        </div>

        <p class="form-notice">
          <a href="/privacy/">プライバシーポリシー</a>に同意したものとします。
        </p>

        <button type="submit" class="btn btn--primary">送信する</button>
      </form>
    </div>
  </section>

  {cta-global}
  {for-considering}
</main>


CSS観点：

form-group 単位で縦に積む1カラム構成。PCで2カラムにしたいなら、上位に .form--grid を付けてブレークポイントでレイアウト変更。

必須ラベル .form-required は色・フォントサイズを統一して「フォーム全体で一貫した視覚ルール」を作る。

8. CSS構造（推定ベースの抽象設計）

実際のCSSは見えないので、このサイトの見え方に合う設計案として：

8-1. レイヤー分け

l-*：レイアウト（ヘッダー／フッター／コンテナ／グリッド）

c-*：コンポーネント（ボタン／カード／フォーム／パンくず／TOC／ステータスバッジ）

p-*：ページ固有（p-home / p-about / p-entry…）

u-*：ユーティリティ（u-text-center, u-mb-lgなど）

例：

/* レイアウト */
.l-header { position: sticky; top: 0; z-index: 100; }
.l-main   { padding-top: 80px; }
.l-container { max-width: 1080px; margin: 0 auto; padding: 0 16px; }

/* コンポーネント */
.c-btn { display: inline-flex; align-items: center; justify-content: center; }
.c-section-title { font-size: 1.8rem; margin-bottom: 1.5rem; }

/* ページ固有 */
.p-home .hero { … }
.p-job-detail .job-table { … }

/* ユーティリティ */
.u-text-center { text-align: center; }
.u-mb-lg { margin-bottom: 3rem; }

9. 戦略的な視点から（構造上の「盲点」もあえて指摘）

単に構造をなぞるだけだと意味が薄いので、冷静に見て気になるポイントも挙げます。

共通CTAの多用で「バナー盲目」になるリスク
ほぼ全ページに「全員面接、3,000名採用！」帯＋「ご検討中の方へ」＋LINEバナーが乗っています。
株式会社アックス
+3
株式会社アックス
+3
株式会社アックス
+3

情報量は増えるが、同じ要素が繰り返されるとユーザーの視線は自動的に無視するようになります。

本当にCVしたいページ（募集要項詳細・エントリー・コラムの一部）だけに強いCTAを残し、他は弱める／減らすという設計も検討の価値あり。

フォーム直前に「LINEで質問してOK」と書いている構造

不安を軽減する意図としては正しいが、**「フォーム送らずにLINEだけで満足」**という逃げ道にもなりうる。
株式会社アックス

分析するときは「LINE流入→応募につながっているか」を見ないと、CVを削っている可能性もある。

記事詳細のCTAが「応募」だけになっている
コラムの多くはコンテンツマーケ寄り（情報提供）なのに、下部のCTAはほぼ求人CV一本です。
株式会社アックス

中間コンバージョン（メルマガ、LINE友だち追加、資料DLなど）がないので、「まだ検討段階」のユーザーを拾いきれていない可能性が高い。

構造としては素直だが、「AIで生成・拡張する」前提でのモジュール化が甘い

現状のセクションはLPに最適化されているが、セクション定義が抽象化されていないと、将来的に「別事業・別地域・別ターゲット」のLPを量産しづらい。

さっき定義したような

hero-metrics

stats-section

post-list

job-detail-table
をコンポーネントとして意識的に切り出しておくと、AI生成との相性がかなり良くなる。

