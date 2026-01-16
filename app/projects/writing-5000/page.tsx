"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import ReactMarkdown from "react-markdown";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import {
  gsap,
  ScrollTrigger,
  prefersReducedMotion,
  motion,
} from "../../utils/animations";

export default function Writing5000Project() {
  const headerRef = useRef<HTMLElement>(null);
  const processRef = useRef<HTMLElement>(null);
  const articleRef = useRef<HTMLElement>(null);
  const improvementRef = useRef<HTMLElement>(null);
  const messageRef = useRef<HTMLElement>(null);
  const relatedRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (prefersReducedMotion()) return;

    // Header animation
    if (headerRef.current) {
      const label = headerRef.current.querySelector("[data-label]");
      const title = headerRef.current.querySelector("h1");
      const description = headerRef.current.querySelector("p");

      gsap.fromTo(
        label,
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: motion.duration.normal,
          ease: motion.ease.default,
        }
      );

      gsap.fromTo(
        title,
        { opacity: 0, y: motion.distance.small },
        {
          opacity: 1,
          y: 0,
          duration: motion.duration.slow,
          delay: 0.15,
          ease: motion.ease.default,
        }
      );

      gsap.fromTo(
        description,
        { opacity: 0, y: motion.distance.small },
        {
          opacity: 1,
          y: 0,
          duration: motion.duration.normal,
          delay: 0.3,
          ease: motion.ease.default,
        }
      );
    }

    // Process cards animation
    if (processRef.current) {
      const cards = processRef.current.querySelectorAll("[data-card]");

      cards.forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: motion.duration.normal,
            delay: index * 0.1,
            ease: motion.ease.default,
            scrollTrigger: {
              trigger: processRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }

    // Article section animation
    if (articleRef.current) {
      const sections = articleRef.current.querySelectorAll("[data-gallery]");

      sections.forEach((section, index) => {
        const content = section.querySelector("[data-content]");

        gsap.fromTo(
          content,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: motion.duration.slow,
            ease: motion.ease.default,
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }

    // Improvement section animation
    if (improvementRef.current) {
      gsap.fromTo(
        improvementRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: motion.duration.normal,
          ease: motion.ease.default,
          scrollTrigger: {
            trigger: improvementRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    // Message section animation
    if (messageRef.current) {
      gsap.fromTo(
        messageRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: motion.duration.normal,
          ease: motion.ease.default,
          scrollTrigger: {
            trigger: messageRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    // Related projects animation
    if (relatedRef.current) {
      const cards = relatedRef.current.querySelectorAll("article");

      cards.forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: motion.duration.normal,
            delay: index * motion.stagger.slow,
            ease: motion.ease.default,
            scrollTrigger: {
              trigger: relatedRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div id="top" className="min-h-screen bg-[#f8f6f3]">
      <div className="px-[50px] max-w-[1280px] mx-auto">
        <Navigation />

        {/* Page Header */}
        <header
          ref={headerRef}
          className="flex flex-col gap-6 pt-16 pb-20 pr-0 md:pt-32 md:pb-24 lg:max-w-[900px]"
        >
          <div className="flex flex-col gap-3 text-[#6366F1]">
            <span
              data-label
              className="font-mono font-medium text-[12px] leading-[1.2] tracking-[0.5px] uppercase"
            >
              Writing
            </span>
            <h1 className="font-serif font-normal text-[32px] leading-[1.2] tracking-[-0.5px] md:text-[44px] lg:text-[56px]">
              Webライティング
            </h1>
          </div>
          <p className="font-serif font-light text-[18px] leading-[1.7] tracking-[-0.3px] text-[#444] md:text-[20px] lg:text-[24px] max-w-[800px]">
            SEO記事の設計から修正対応まで、クライアント要件に合わせた納品品質を担保。出典明示・リスク管理・修正耐性を重視した制作プロセスで、信頼性の高い記事を提供します。
          </p>
        </header>

        {/* Overview Comment */}
        <section className="mb-16 p-6 bg-[#EEF2FF] rounded-lg border-l-4 border-[#6366F1]">
          <p className="font-serif font-light text-[16px] leading-[1.8] text-[#444] md:text-[18px]">
            想定案件：家計・節約（固定費見直し）記事／約5,000字。検索意図を「節約初心者が迷わず行動できる順序設計」と定義し、通信費→保険→サブスクの3ステップで構成。初稿レビューで指摘された信頼性（出典不足・事例の扱い）を修正し、読みやすさを維持しつつ納品品質を担保しました。
          </p>
        </section>

        {/* Production Process */}
        <section ref={processRef} className="mb-20">
          <div className="flex flex-col gap-3 mb-8">
            <span className="font-mono font-medium text-[12px] leading-[1.2] tracking-[0.5px] text-[#666] uppercase">
              Production Process
            </span>
            <h2 className="font-serif font-normal text-[28px] leading-[1.3] tracking-[-0.5px] text-[#111] md:text-[32px]">
              制作プロセス
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: 案件想定 */}
            <div
              data-card
              className="flex flex-col gap-4 p-6 bg-white rounded-lg border-t-4 border-[#6366F1] shadow-sm"
            >
              <h3 className="font-mono font-medium text-[13px] tracking-[0.5px] text-[#6366F1] uppercase">
                案件想定
              </h3>
              <ul className="flex flex-col gap-2 font-serif font-light text-[14px] leading-[1.7] text-[#444]">
                <li>文字数：約5,000字</li>
                <li>想定読者：節約初心者（20〜40代）</li>
                <li>目的：固定費見直しの順序と手順を提示</li>
              </ul>
            </div>

            {/* Card 2: 設計（狙い） */}
            <div
              data-card
              className="flex flex-col gap-4 p-6 bg-white rounded-lg border-t-4 border-[#6366F1] shadow-sm"
            >
              <h3 className="font-mono font-medium text-[13px] tracking-[0.5px] text-[#6366F1] uppercase">
                設計（狙い）
              </h3>
              <ul className="flex flex-col gap-2 font-serif font-light text-[14px] leading-[1.7] text-[#444]">
                <li>検索意図：何から手を付けるべきか迷う層</li>
                <li>行動の順序設計（ロードマップ提示）</li>
                <li>導入→結論→手順3ステップ→FAQ→まとめ</li>
              </ul>
            </div>

            {/* Card 3: 品質基準 */}
            <div
              data-card
              className="flex flex-col gap-4 p-6 bg-white rounded-lg border-t-4 border-[#6366F1] shadow-sm"
            >
              <h3 className="font-mono font-medium text-[13px] tracking-[0.5px] text-[#6366F1] uppercase">
                品質基準
              </h3>
              <ul className="flex flex-col gap-2 font-serif font-light text-[14px] leading-[1.7] text-[#444]">
                <li>数値・制度は出典明示（出典名＋年）</li>
                <li>事例はモデルケース明記</li>
                <li>金融領域の注意書き追加</li>
                <li>定義の統一（通信費の範囲など）</li>
              </ul>
            </div>

            {/* Card 4: 改善プロセス */}
            <div
              data-card
              className="flex flex-col gap-4 p-6 bg-white rounded-lg border-t-4 border-[#6366F1] shadow-sm"
            >
              <h3 className="font-mono font-medium text-[13px] tracking-[0.5px] text-[#6366F1] uppercase">
                改善プロセス
              </h3>
              <ul className="flex flex-col gap-2 font-serif font-light text-[14px] leading-[1.7] text-[#444]">
                <li>初稿：読みやすさ重視で構成</li>
                <li>レビュー：信頼性（E-E-A-T）の指摘</li>
                <li>修正：出典・注意書き・定義を整合</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Article Section */}
        <main ref={articleRef} className="flex flex-col gap-20 pb-20 md:pb-32">
          {/* Article: 固定費見直し */}
          <section
            data-gallery
            className="flex flex-col gap-6 px-0 md:px-16 lg:pl-32 lg:pr-8"
          >
            <span className="font-mono font-medium text-[12px] leading-[1.2] tracking-[0.5px] text-[#666] uppercase">
              Sample Article
            </span>
            <div data-content className="prose prose-lg max-w-none">
              <ReactMarkdown
                components={{
                  h1: ({ children }) => (
                    <h2 className="font-serif font-normal text-[28px] leading-[1.3] tracking-[-0.5px] text-[#111] md:text-[32px] lg:text-[36px] mt-8 mb-4">
                      {children}
                    </h2>
                  ),
                  h2: ({ children }) => (
                    <h3 className="font-serif font-normal text-[22px] leading-[1.4] tracking-[-0.3px] text-[#333] md:text-[24px] lg:text-[28px] mt-6 mb-3">
                      {children}
                    </h3>
                  ),
                  h3: ({ children }) => (
                    <h4 className="font-serif font-normal text-[18px] leading-[1.5] tracking-[-0.2px] text-[#444] md:text-[20px] lg:text-[22px] mt-5 mb-2">
                      {children}
                    </h4>
                  ),
                  p: ({ children }) => (
                    <p className="font-serif font-light text-[16px] leading-[1.8] text-[#444] mb-4 md:text-[18px]">
                      {children}
                    </p>
                  ),
                }}
              >
                {`# 固定費の見直しは「通信費→保険→サブスク」の順番で始めよう【初心者でも挫折しない節約術】

「固定費を見直したいけど、何から手を付ければいいの？」そう悩んでいませんか。実は私も数年前、同じ壁にぶつかっていました。

実は節約が続かない理由、効果が出ない理由の多くは「順番の間違い」にあります。やる気だけで変動費から削り始めて、数週間で疲弊して挫折。こんなパターン、心当たりありませんか？

固定費には家賃や光熱費、車両費なども含まれますが、本記事では特に取り組みやすい「通信費・保険・サブスク」の3領域に絞ります。これらは自分の判断で調整しやすく、一度見直せば効果が持続するからです。

この3つの最適な順番と、その理由を解説します。この順番なら一度の手間で毎月自動的に節約でき、生活の質も落ちません。節約初心者でも無理なく始められて、確実に成果を実感できる方法をお伝えします。

## 固定費の見直しは「順番」が9割【なぜ通信費→保険→サブスクなのか】

節約を始めようとして、まず食費やコンビニ代から削ろうとしていませんか。実はそれ、挫折への第一歩なんです。

固定費見直しの最適解は「効果×簡単さ×生活影響」で決まります。どれだけ大きく削れても、手続きが面倒すぎたり、生活の満足度が下がったりすれば続きません。

通信費は即効性が高く手間が小さい。言うなれば「低い果実」です。一度の乗り換えで毎月自動的に数千円～1万円が浮き、生活の質はほぼ変わりません。大手キャリアでは月7,000～10,000円程度かかることが多く、これを格安SIMに変えれば月1,000～2,000円台に収めることも可能です。つまり、月5,000～7,000円、年間で約6～8万円の削減が見込めます。この金額、家族旅行1回分になりますよね。

次に保険です。保険料は家計の中でも大きくなりやすい支出です。公的保障を理解したうえで必要な保障だけを残せば、年数万～十数万円の節約も現実的です。ただし、保険は安心とのバランスが難しいところ。見直しに時間を要するため、2番目に取り組むのが合理的です。

最後にサブスクです。サブスク利用者の平均契約数は2～3件、多くの人が月3,000円未満に収まっています（ナイル社調査 2024年）。一つひとつは小さな額でも、気づかぬうちに複数契約していることが多い。実際、多くの人が自分のサブスク支払総額を正確に把握できていません。あなたは今、月額いくら払っているか即答できますか？実は「見えない漏れ」になりやすい支出なのです。

この順番なら「成功体験→モチベーション向上→次ステップ」という好循環が生まれます。正直なところ、通信費削減で数千円浮いた実感があれば、次の保険やサブスクの見直しにも前向きになれるんですよね。

## 【Step1】通信費の見直しで月5,000〜10,000円削減【一度の手間で効果持続】

通信費は固定費の中でも、最優先で取り組むべき項目です。なぜなら、一度の手続きで毎月自動的に節約でき、生活の質をほとんど落とさないからです。

ここでいう通信費とは、スマホの月額料金（音声通話+データ通信プラン。端末代は含みません）を指します。大手キャリアでは月7,000～10,000円程度かかることが多く、これを格安SIMや大手のサブブランド（ahamo、povo、LINEMOなど）に変えるだけで、月1,000～2,000円台に抑えられます。差額5,000～7,000円、年間で約6～8万円の削減です。

「難しそう…」と思うかもしれませんが、実は3ステップで完了します。

まず現状把握。スマホ代とネット代の月額合計を確認します。請求書やマイページを開いて、今いくら払っているか数字で把握しましょう。この数字、意外と知らない人が多いんです。

次に代替プランの検討です。ahamo・povo・LINEMOといったサブブランドは、大手回線を使いながら料金が安い。格安SIM各社も候補になります。自分のデータ使用量に合ったプランを比較してみてください。

最後に乗り換え実行です。MNP（番号そのままで乗り換え）制度を使えば、電話番号は変わりません。2021年以降、違約金もほぼ撤廃されました。以前より断然やりやすくなっています。

注意点もあります。端末を分割払い中なら残債の一括精算が必要な場合があります。店舗サポートが受けられなくなるケースもあるため、トラブル時の対処が不安な人は事前に調べておきましょう。また格安SIMは回線混雑時（お昼や夕方）に速度が落ちることがあります。

※分かりやすさのためのモデルケース（架空事例）です。東京都在住のAさん（30代会社員・既婚子1人）は、夫婦でドコモに月計約28,000円払っていましたが、ahamoに変更して月15,000円に半減。年間約16万円の削減に成功しました。「まず固定費からやればこんなに効果が出るのか」と実感したAさん。その後保険やサブスクの見直しにも前向きになれたそうです。成功体験が次の一歩を後押ししたんですね。

通信費は"放置のムダ"を削るだけです。一度見直せば、あとは自動的。毎月お金が漏れない仕組みができあがります。

## 【Step2】保険の見直しで年数万〜十数万円節約【削減ではなく適正化が鍵】

保険料の見直しは、固定費削減の中でも大きなインパクトを持ちます。ただし目的は「削減」ではなく「適正化」です。「守りは固めつつ、払いすぎは減らす」――これが保険見直しの鉄則です。

多くの家庭が何らかの保険に入っています。しかし、公的保障を考慮せずに民間保険に入りすぎている人も少なくありません。

まず公的保障を確認しましょう。実は日本の社会保障制度、かなり手厚いんです。

高額療養費制度を使えば、医療費の自己負担は月上限約9万円（標準世帯・厚生労働省）に抑えられます。会社員なら傷病手当金で給与の約2/3が最長18ヶ月支給されます（全国健康保険協会）。遺族年金も、妻子2人が遺された場合、月約14万円が支給されます（日本年金機構）。この保障、意外と知らない人が多いんですよね。

こうした公的保障を差し引いた不足分を民間保険で補う――この考え方が大切です。

生命保険は「自分が亡くなって経済的に困る人がいるか」で判断します。独身や共働き夫婦なら、高額な死亡保障は不要かもしれません。一方で、子どもがいる世帯では収入保障保険などで必要最低限をカバーする方法があります。

医療保険は「公的保障+貯蓄で賄えるか」を考えましょう。貯蓄が十分あるなら、医療保険に加入しない選択肢もあります。がん保険は家系リスクや支払余力を天秤にかけて判断してください。

注意点もあります。古い終身保険は予定利率が良い場合があり、解約すると損をするケースもあります。健康状態が悪化してから新たに入り直すのは困難です。損害保険（自動車保険・火災保険など）は、安易に削ると万一の際に困ります。

※分かりやすさのためのモデルケース（架空事例）です。大阪府在住のBさん（40代・夫婦と子2人）は、月額保険料が合計7万円を超えていました。FP相談を経て死亡保障を収入保障保険1本に絞り、医療保険を共済に切り替えた結果、月約4万円の固定費減に成功。「理論的に考えたら要らないものに払っていた」と納得したBさん。浮いた4万円は教育費と老後資金の積立に回しています。変えるまでが大変でしたが、一度整理すれば後はラク、とのことです。

保険は入らない勇気より、"入りすぎ"に気づく勇気が大切です。守りを固めつつ家計を軽くする。これが賢い節約です。

※本記事の保険に関する情報は一般的な考え方を示したものであり、個別の保障内容を推奨するものではありません。実際の見直しにあたっては、ご自身の状況に応じてファイナンシャルプランナーや保険の専門家にご相談ください。

## 【Step3】サブスクの見える化で年1万円以上節約【"気づかない漏れ"を塞ぐ】

サブスク整理は固定費見直しの最終仕上げです。金額は小さくても、無自覚に積み重なっているケースが多いんですよね。満足度との天秤で優先順位を付ければ、無理なく整理できます。

サブスク利用経験者の平均契約数は2～3件。多くの人が月3,000円未満に収まっていますが、4人に1人は月3,000円以上使っています。問題は、自動引き落としで痛みがないため、総額を把握できていない人が多いということです。気づかぬうちに毎月数千円～1万円超が流れ出ているケースも珍しくありません。

洗い出し手順は3ステップです。

まずクレカ・銀行明細の過去3～6ヶ月分をチェックし、月額課金らしき項目をピックアップします。次にApp StoreやGoogle Playの「定期購入」欄を確認。最後にAmazon・Netflixなど主要サービスのマイページで契約状況を調べます。

解約判断には3つの質問が有効です。

「最後に使ったのはいつ？」思い出せないほど前なら、解約候補です。「重複してない？」同類サービスを複数契約していたら、どちらか一方に絞りましょう。「満足度に見合う？」価値を感じているなら残してOK。無理に全解約する必要はありません。

注意点もあります。家族が使っているサービスを相談なしに解約すると反発を招きます。事前に確認を取りましょう。また解約後も、新規契約→放置のループに陥らないよう、半年や1年ごとに定期点検する習慣をつけると良いでしょう。

※分かりやすさのためのモデルケース（架空事例）です。福岡県在住のCさん（20代独身）は、サブスク8件・月1.2万円を一度全解約してみました。数ヶ月後、本当に必要だと感じた3件だけを再契約し、月額4千円台に。月8千円の節約に加え、「減らしたサブスクに費やしていた週5時間が他の有意義なことに使えるようになった」とCさん。時間まで手に入る副次効果があったんですね。

サブスクの怖さは"サイレント出費"です。気づかない漏れを塞ぐだけ。小さな節約が積もって家計に効いてきます。

## FAQ

### Q1: 格安SIMに替えたいけど、通信速度が遅くなるのが心配です。大丈夫でしょうか?

普段使い（ネット閲覧や動画鑑賞）では問題ないケースがほとんどです。特に最近の大手通信網を借りているMVNO（IIJmioやY!mobile等）は高速化が進んでおり、「お昼に少し遅く感じる」程度という声が多いんですよね。心配なら30日間お試しできるSIMで速度確認してから本契約する方法もあります。

### Q2: 保険は具体的に何を残して何を減らせばいいの?

基本方針は「命に関わる保障は必要最低限、それ以外は公的制度+貯蓄で賄う」です。生命保険は「自分が亡くなると経済的に困る人」がいるかで判断します（独身・共働き夫婦→大幅縮小可）。医療保険は高額療養費制度があるので、貯蓄である程度対応可能です（貯蓄十分なら加入しない選択も）。

### Q3: サブスクを洗い出すには具体的にどうすればいいですか?

3ステップです。①クレカ・銀行引き落とし過去3～6ヶ月分で月額課金をピックアップ、②App Store/Google Playの「定期購入」を確認、③Amazon・Netflix等マイページで契約状況確認。リスト化後、低利用×高額なものから解約を検討しましょう。

### Q4: 節約したお金はどうすれば良いですか？そのままだと使ってしまいそう…

素晴らしい質問です。浮いたお金を「なかったもの」として自動的に貯蓄・投資に回しましょう。例えば、通信費で月5,000円浮いたら、その5,000円を別口座へ毎月定額振り替え、または積立NISAの投資信託購入に充てる設定にします。削減分を自動積立する仕組みを作れば、貯蓄効率が大きく高まります。

### Q5: 節約したら生活の質が下がりませんか？趣味や楽しみも我慢する感じですか?

固定費の見直しは生活の質を落とさない節約です。通信費を安くしてもスマホは同じように使えますし、保険を適正化しても普段の暮らしに影響はありません。サブスクも本当に好きなサービスは残してOK。むしろ使ってもいないものにお金を払う無駄が減る分、旅行や外食など別の楽しみに振り向けられるんですよね。

## まとめ

固定費の見直しは「順番」が成功の鍵です。通信費→保険→サブスクの順なら、一度の工夫で毎月自動的に節約でき、日々の我慢に頼らず継続できます。

通信費は一度の乗り換えで月5,000～10,000円削減。保険は公的保障を理解したうえで適正化すれば年数万～十数万円節約。サブスクは「見えない漏れ」を塞ぐだけで年1万円以上の削減が見込めます。

まずは今日、スマホ代の明細をチェックすることから始めてみませんか。それだけです。小さな一歩が、あなたの家計を大きく変える第一歩になります。`}
              </ReactMarkdown>
            </div>
          </section>
        </main>

        {/* Improvement Process */}
        <section
          ref={improvementRef}
          className="mb-16 py-10 border-t border-[#ccc]"
        >
          <div className="flex flex-col gap-3 mb-8">
            <span className="font-mono font-medium text-[12px] leading-[1.2] tracking-[0.5px] text-[#666] uppercase">
              Improvement
            </span>
            <h2 className="font-serif font-normal text-[28px] leading-[1.3] tracking-[-0.5px] text-[#111] md:text-[32px]">
              改善プロセス
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-[#6366F1]">
                  <th className="py-3 px-4 text-left font-mono font-medium text-[13px] tracking-[0.5px] text-[#6366F1] uppercase">
                    改善点
                  </th>
                  <th className="py-3 px-4 text-left font-mono font-medium text-[13px] tracking-[0.5px] text-[#666] uppercase">
                    Before
                  </th>
                  <th className="py-3 px-4 text-left font-mono font-medium text-[13px] tracking-[0.5px] text-[#666] uppercase">
                    After
                  </th>
                </tr>
              </thead>
              <tbody className="font-serif font-light text-[14px] leading-[1.7] text-[#444]">
                <tr className="border-b border-[#eee]">
                  <td className="py-3 px-4 font-medium text-[#333]">数値の根拠</td>
                  <td className="py-3 px-4">出典なし（信頼性に課題）</td>
                  <td className="py-3 px-4">出典名＋年を明記（厚生労働省、ナイル社など）</td>
                </tr>
                <tr className="border-b border-[#eee]">
                  <td className="py-3 px-4 font-medium text-[#333]">事例の扱い</td>
                  <td className="py-3 px-4">実在体験談に見える表現</td>
                  <td className="py-3 px-4">「※モデルケース（架空事例）」を明記</td>
                </tr>
                <tr className="border-b border-[#eee]">
                  <td className="py-3 px-4 font-medium text-[#333]">定義の統一</td>
                  <td className="py-3 px-4">通信費の範囲が曖昧</td>
                  <td className="py-3 px-4">「スマホ月額料金（端末代除く）」と明示</td>
                </tr>
                <tr className="border-b border-[#eee]">
                  <td className="py-3 px-4 font-medium text-[#333]">リスク管理</td>
                  <td className="py-3 px-4">金融領域の注意書きなし</td>
                  <td className="py-3 px-4">保険パートに免責事項を追記</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Message Section */}
        <section
          ref={messageRef}
          className="mb-16 py-10 border-t border-[#ccc]"
        >
          <blockquote className="pl-6 border-l-4 border-[#6366F1]">
            <p className="font-serif font-normal text-[24px] leading-[1.5] tracking-[-0.3px] text-[#333] md:text-[28px]">
              「出典明示・リスク管理・修正耐性。クライアント要件に短時間で整合させ、納品品質を担保します。」
            </p>
          </blockquote>
        </section>

        {/* Related Projects */}
        <section
          ref={relatedRef}
          className="flex flex-col gap-8 pt-10 pb-0 border-t border-[#ccc]"
        >
          <div className="flex flex-col gap-2">
            <span className="font-mono font-medium text-[12px] leading-[1.2] tracking-[0.5px] text-[#666] uppercase">
              More Works
            </span>
            <h2 className="font-serif font-normal text-[24px] leading-[1.3] tracking-[-0.5px] text-[#111] md:text-[28px]">
              他の制作物
            </h2>
          </div>

          {/* Related Projects Grid */}
          <div className="flex flex-col gap-6 pb-32 md:flex-row md:flex-wrap md:gap-4 lg:flex-nowrap">
            {/* Current Project Card - More subtle */}
            <article className="flex flex-col gap-3 pt-6 border-t border-[#6366F1]/30 md:w-[calc(50%-8px)] lg:flex-1">
              <div className="flex flex-col gap-2 flex-1">
                <span className="font-mono text-[11px] tracking-[0.5px] text-[#6366F1]/60 uppercase">
                  Writing
                </span>
                <h3 className="font-serif font-normal text-[14px] leading-[1.3] tracking-[-0.3px] text-[#6366F1]/60 md:text-[16px]">
                  Webライティング
                </h3>
                <span className="mt-auto font-mono text-[10px] tracking-[0.5px] text-[#999]">
                  現在のページ
                </span>
              </div>
              <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden opacity-60 bg-[#6366F1]/10 flex items-center justify-center">
                <span className="font-mono text-[12px] text-[#6366F1]/60">
                  Writing (5000)
                </span>
              </div>
            </article>

            {/* Project 02 - Web Writing (1000) */}
            <article className="flex flex-col gap-3 pt-6 border-t border-[#D97706] md:w-[calc(50%-8px)] lg:flex-1">
              <div className="flex flex-col gap-2 flex-1">
                <span className="font-mono text-[11px] tracking-[0.5px] text-[#D97706] uppercase">
                  Writing
                </span>
                <h3 className="font-serif font-normal text-[14px] leading-[1.3] tracking-[-0.3px] text-[#D97706] md:text-[16px]">
                  Webライティング
                </h3>
                <a
                  href="/projects/web-writing"
                  className="mt-auto w-fit px-2 py-1 font-mono text-[10px] leading-[1.2] tracking-[0.5px] border border-[#D97706] text-[#D97706] rounded-md transition-colors hover:bg-[#D97706] hover:text-white"
                  aria-label="Webライティングの詳細を見る"
                >
                  Explore →
                </a>
              </div>
              <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden opacity-60 bg-[#D97706]/10 flex items-center justify-center">
                <span className="font-mono text-[12px] text-[#D97706]/60">
                  Writing
                </span>
              </div>
            </article>

            {/* Project 03 - Work Redesign */}
            <article className="flex flex-col gap-3 pt-6 border-t border-[#0f766e] md:w-[calc(50%-8px)] lg:flex-1">
              <div className="flex flex-col gap-2 flex-1">
                <span className="font-mono text-[11px] tracking-[0.5px] text-[#0f766e] uppercase">
                  SEO Writing & LP
                </span>
                <h3 className="font-serif font-normal text-[14px] leading-[1.3] tracking-[-0.3px] text-[#0f766e] md:text-[16px]">
                  仕事のやり方再設計
                </h3>
                <a
                  href="/projects/work-redesign"
                  className="mt-auto w-fit px-2 py-1 font-mono text-[10px] leading-[1.2] tracking-[0.5px] border border-[#0f766e] text-[#0f766e] rounded-md transition-colors hover:bg-[#0f766e] hover:text-white"
                  aria-label="仕事のやり方再設計の詳細を見る"
                >
                  Explore →
                </a>
              </div>
              <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src="/Working_LP2.webp"
                  alt="仕事のやり方再設計のサムネイル"
                  fill
                  className="object-cover"
                />
              </div>
            </article>

            {/* Project 04 - Sweets */}
            <article className="flex flex-col gap-3 pt-6 border-t border-[#ab0782] md:w-[calc(50%-8px)] lg:flex-1">
              <div className="flex flex-col gap-2 flex-1">
                <span className="font-mono text-[11px] tracking-[0.5px] text-[#ab0782] uppercase">
                  Website
                </span>
                <h3 className="font-serif font-normal text-[14px] leading-[1.3] tracking-[-0.3px] text-[#ab0782] md:text-[16px]">
                  秋の人気スイーツ特集
                </h3>
                <a
                  href="/projects/sweets"
                  className="mt-auto w-fit px-2 py-1 font-mono text-[10px] leading-[1.2] tracking-[0.5px] border border-[#ab0782] text-[#ab0782] rounded-md transition-colors hover:bg-[#ab0782] hover:text-white"
                  aria-label="秋の人気スイーツ特集サイトの詳細を見る"
                >
                  Explore →
                </a>
              </div>
              <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src="/SweetsSite_thumb2.jpg"
                  alt="秋の人気スイーツ特集サイトのサムネイル"
                  fill
                  className="object-cover"
                />
              </div>
            </article>

            {/* Project 05 - Portfolio */}
            <article className="flex flex-col gap-3 pt-6 border-t border-[#0034ad] md:w-[calc(50%-8px)] lg:flex-1">
              <div className="flex flex-col gap-2 flex-1">
                <span className="font-mono text-[11px] tracking-[0.5px] text-[#0034ad] uppercase">
                  Website
                </span>
                <h3 className="font-serif font-normal text-[14px] leading-[1.3] tracking-[-0.3px] text-[#0034ad] md:text-[16px]">
                  ポートフォリオサイト
                </h3>
                <a
                  href="/projects/portfolio"
                  className="mt-auto w-fit px-2 py-1 font-mono text-[10px] leading-[1.2] tracking-[0.5px] border border-[#0034ad] text-[#0034ad] rounded-md transition-colors hover:bg-[#0034ad] hover:text-white"
                  aria-label="ポートフォリオサイトの詳細を見る"
                >
                  Explore →
                </a>
              </div>
              <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src="/Portfolio_thumb.jpg"
                  alt="ポートフォリオサイトのサムネイル"
                  fill
                  className="object-cover"
                />
              </div>
            </article>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}
