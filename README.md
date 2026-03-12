# Portfolio Site Setup & Maintenance Guide

## サイトコンセプト
本サイトは「自然の静けさ × サイバーセキュリティの確かさ」をコンセプトに、防衛・公共セクターや大手エンタープライズの事業責任者に向けて、落ち着きと誠実さを感じさせるデザインとして構築されました。
森や山を連想させるアースカラー（ベージュ、深緑、モスグリーン）をベースにし、タイポグラフィと余白（Whitespace）を活かしたミニマルな構成になっています。

## テキストの編集・更新方法
テキストコンテンツを編集する場合は、`index.html` 内の `<!-- EDIT HERE: ○○ -->` というコメント付近のテキストを書き換えるだけで完結します。

### 主な編集ポイント:
1. **Title & Meta Tag**: 
   - `<title>` タグおよび `<meta name="description">` タグの内容。
2. **Hero Copy**:
   - `class="hero__title"` と `class="hero__subtitle"` のテキスト。
3. **Profile (About)**:
   - `<p class="about__en-profile">` および `<p class="about__ja-profile">` のテキスト。専門領域タグは `.tag` クラスの span要素を追加・削除。
4. **Experience, Skills, Projects**:
   - リスト要素（`<li>`）やカード内のテキスト。
5. **Contact Settings**:
   - `<form action="#">` の `action` 属性を Formspree や Netlify Forms などのエンドポイントURLに変更してください。
6. **Social Links**:
   - `<footer>` 内のリンクの `href="#"` をそれぞれ LinkedIn, GitHub 等の実際のURLに差し替えてください。

## スタイル・デザインの拡張（自然テーマの維持）
新しいセクションや要素を追加する際は、`styles.css` を拡張してください。
- **カラーパレットの維持**:
  `:root` で定義されているCSS変数（`--bg-primary`, `--accent-dark`, `--accent-light` など）を積極的に再利用することで、自然テーマとしての一貫性を保てます。
- **余白の維持**:
  各コンポーネントには `var(--spacing-md)` 等の変数を使用しています。要素を密集させず、ゆったりとした余白を持たせるのがデザインの要です。

## GitHub Pagesでの公開手順
本サイトは静的HTML/CSSで構成されており、ビルドツール不要でそのまま公開可能です。

1. 本ディレクトリのリポジトリを GitHub に Push します。（公開リポジトリにしてください）
2. GitHub リポジトリのページから **Settings** を開きます。
3. 左サイドバーから **Pages** を選択します。
4. **Build and deployment** の `Source` を `Deploy from a branch` に設定し、`Branch` を `main` (または `master`) にして `/root` を指定し、「Save」をクリックします。
5. 数分まつと公開URLが生成され、サイトが閲覧可能になります。

---
*Created by AI Agent based on Kensuke Kuwamoto's Resume.*
