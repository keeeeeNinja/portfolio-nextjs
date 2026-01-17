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

export default function Writing3000Project() {
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
          <div className="flex flex-col gap-3 text-[#E11D48]">
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
            読者の不安に寄り添う構成設計で、判断基準と行動手順を提示。Myth/Reality形式で思い込みを整理し、実用的なチェックリストで準備を見える化します。
          </p>
        </header>

        {/* Overview Comment */}
        <section className="mb-16 p-6 bg-[#FFF1F2] rounded-lg border-l-4 border-[#E11D48]">
          <p className="font-serif font-light text-[16px] leading-[1.8] text-[#444] md:text-[18px]">
            想定案件：旅行・ライフスタイル（国内旅行準備）記事／約3,000字。検索意図を「準備の不安を減らしたい層」と定義し、持ち物・移動・トラブルの3軸で構成。Myth/Reality形式で判断基準を明確化し、読者の迷いを減らす設計を重視しました。
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
              className="flex flex-col gap-4 p-6 bg-white rounded-lg border-t-4 border-[#E11D48] shadow-sm"
            >
              <h3 className="font-mono font-medium text-[13px] tracking-[0.5px] text-[#E11D48] uppercase">
                案件想定
              </h3>
              <ul className="flex flex-col gap-2 font-serif font-light text-[14px] leading-[1.7] text-[#444]">
                <li>文字数：約3,000字</li>
                <li>想定読者：旅行準備に不安を感じる初心者</li>
                <li>目的：判断基準と行動手順で不安を軽減</li>
              </ul>
            </div>

            {/* Card 2: 設計（狙い） */}
            <div
              data-card
              className="flex flex-col gap-4 p-6 bg-white rounded-lg border-t-4 border-[#E11D48] shadow-sm"
            >
              <h3 className="font-mono font-medium text-[13px] tracking-[0.5px] text-[#E11D48] uppercase">
                設計（狙い）
              </h3>
              <ul className="flex flex-col gap-2 font-serif font-light text-[14px] leading-[1.7] text-[#444]">
                <li>検索意図：何を優先すべきか迷う層</li>
                <li>Myth/Reality形式で判断基準を明確化</li>
                <li>3つの備え（荷物・移動・トラブル）で整理</li>
              </ul>
            </div>

            {/* Card 3: 品質基準 */}
            <div
              data-card
              className="flex flex-col gap-4 p-6 bg-white rounded-lg border-t-4 border-[#E11D48] shadow-sm"
            >
              <h3 className="font-mono font-medium text-[13px] tracking-[0.5px] text-[#E11D48] uppercase">
                品質基準
              </h3>
              <ul className="flex flex-col gap-2 font-serif font-light text-[14px] leading-[1.7] text-[#444]">
                <li>具体的な判断基準の提示</li>
                <li>体験談で共感を得る</li>
                <li>実用的なチェックリスト掲載</li>
                <li>読者に寄り添うトーン維持</li>
              </ul>
            </div>

            {/* Card 4: 改善プロセス */}
            <div
              data-card
              className="flex flex-col gap-4 p-6 bg-white rounded-lg border-t-4 border-[#E11D48] shadow-sm"
            >
              <h3 className="font-mono font-medium text-[13px] tracking-[0.5px] text-[#E11D48] uppercase">
                改善プロセス
              </h3>
              <ul className="flex flex-col gap-2 font-serif font-light text-[14px] leading-[1.7] text-[#444]">
                <li>初稿：全体構成と基本情報を整備</li>
                <li>レビュー：判断基準の明確化を指摘</li>
                <li>修正：Myth/Reality追加で改善</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Article Section */}
        <main ref={articleRef} className="flex flex-col gap-20 pb-20 md:pb-32">
          {/* Article: 国内旅行準備ガイド */}
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
                {`# 国内旅行の準備で不安を減らすガイド｜持ち物・移動・トラブル対策

国内旅行は気軽に見えても、持ち物や移動、トラブル対応が頭に浮かぶと不安が膨らみます。私も初めての一人旅の前夜、忘れ物が怖くてバッグを何度も開けた記憶があります。あなたも似た経験、ありませんか？ そこで、準備を「荷物・移動・トラブル」の3つに分け、Myth/Realityの形で判断基準を示します。迷いが減れば、安心して出発日を迎えられます。読み終える頃には、何を優先すべきかが明確になるはずです。

**3行結論**

- 不安を減らすコツは、「必須を先に確定」→「移動は公式情報で判断」→「トラブル時の手順を決める」の3点です。
- 持ち物は"全部持つ"ではなく、"必須＋判断基準"で最小化すると移動が楽になります。
- 事前にチェックリストで準備を見える化すれば、出発前の迷いが大幅に減ります。

**出発前チェックリスト**

- 【最優先】必須5点：現金・カード／スマホ／充電器（＋予備電源）／身分証／予約情報（チケット・ホテル）
- 常備品：常備薬／メガネ・コンタクト／衛生用品（必要分だけ）
- 服装：泊数＋1セット目安／重ね着できる薄手アイテム
- 迷う物の基準：現地調達できる→持たない／体調・安全に直結→持つ
- スマホ依存対策：重要情報を紙控え（or スクショ）／紛失時の手順を確認
- 移動（前日）：運行情報を公式で確認／通知設定（可能なら）
- 移動（当日）：出発前に再確認する時間を確保（数分でOK）
- 日程設計：余裕を持つ／代替ルートを1本だけ想定しておく
- 払い戻し・振替：航空・鉄道とも「公式案内に従う」を基本方針にする
- 天候・災害：ハザードマップで避難場所を把握／防災速報をON
- 宿泊：予約メール（スクショ）を保存／困ったら宿に早めに連絡
- 紛失・盗難：カード会社・携帯会社の連絡先を控える／家族と連絡手段を複線化（SMSなど）

## 不安を減らす全体像：3つの備えと判断基準

### Myth/Realityで考える「準備の基準」
不安は、何が正解か分からないときに膨らみやすいものです。Myth（思い込み）とReality（現実）を分けて考えると、基準が明確になります。地図に凡例があると迷わないのと同じで、準備にも「基準の凡例」があると落ち着きます。例えば「全部持っていくほど安心」ではなく「必須を押さえ、迷う物は判断基準で選ぶ」という考え方です。基準があれば、準備の量も行動の選択肢も整理できます。

### 荷物・移動・トラブルの優先順位
優先順位は、1)持ち物の必須確認、2)移動の情報収集、3)トラブル時の対応準備です。順番を決めるだけで、頭が少し軽くなります。持ち物は出発前にしか整えられません。移動は事前の確認で損失を減らせます。トラブル対策は「起きた時の行動」を決めておくことで不安を抑えられます。

## 持ち物準備：必須チェックと荷物最適化

### 必須持ち物の一覧と理由
必須持ち物は以下です。想像するだけで冷や汗が出ますよね。まずここに不足がないかを最優先で確認しましょう。
- 現金・クレジットカード類：支払いと緊急時の備え
- スマートフォンと充電器：連絡・地図・予約確認の要
- 予約チケット類：交通と宿の入場条件
- 身分証明証：本人確認やトラブル時の必須
- 常備薬やメガネ等：体調や視界の安定

### 迷う持ち物の判断基準（現地調達/使用頻度）
「念のため」に持ち物を増やすと、移動が重くなり、使わない物が増えます。気づけば小さな引っ越し状態、なんてこともあります。迷う物は、現地調達の可否と使用頻度で判断します。コンビニやドラッグストアで買える物は現地調達でも十分です。一方、体調や安全に直結する物は持参優先にします。この基準を使えば、持ち物が必要以上に膨らむのを防げます。正直、季節の変わり目は私もまだ模索中です。
服装は「泊数＋1セット」を目安にし、洗濯や乾きやすさを考えると荷物を減らしやすくなります。季節差がある地域に行く場合は、重ね着できる薄手のアイテムを選ぶと調整が簡単です。

### スマホ依存対策（電源・紙控え・紛失時手順）
スマホは旅の要ですが、電池切れや紛失が起きると、情報へのアクセスが断たれます。実際に私も、地図が開けずに焦ったことがあります。予備バッテリーを持ち、重要情報は紙でも控えておくと安心です。万一紛失した場合は、端末の遠隔ロックや位置検索を行い、カード会社へ利用停止連絡、警察への遺失届提出が基本の流れです。手順を知っているだけで、落ち着いて対応できます。

## 移動準備：遅延・欠航を前提にした情報収集

### 前日からの運行情報チェックと通知設定
移動の不安は、情報不足から大きくなります。航空会社は前日から運航情報を公開し、予約時に連絡先を登録しておけばメールやSMSで通知が届くこともあります。鉄道も公式サイトやアプリでリアルタイム情報を提供しています。災害・運行・払い戻しは「一次情報＝公式」を基本方針にし、SNSのうわさより先に確認しましょう。これだけで、「知らずに待つ」不安を減らせます。
出発当日の朝は、再確認の時間を数分だけ確保すると安心です。思い込みで動かず、最新情報で判断する姿勢がトラブル回避につながります。

### 余裕のある日程と代替ルートの考え方
遅延はゼロにはできません。だからこそ、余裕のある日程を組み、代替ルートを想定しておくと安心です。例えば、到着後に約束があるなら、一本前の便を選ぶだけでも気持ちが楽になります。予定通りにいかないことを前提にするだけで、心の余裕が生まれます。

## 移動トラブル時の対応：振替・払い戻しの基礎

### 航空の特別取り扱いの考え方
悪天候などで欠航が見込まれる場合、予約変更や払い戻しが手数料なしでできるケースがあります。航空会社の案内に従い、公式情報を優先して動くことが重要です。なお、悪天候が原因の場合、臨時宿泊費や他社交通手段の費用は自己負担となる場合があるため、注意が必要です。
空港で迷ったら、自己判断せず係員に確認し、振替便や代替ルートの選択肢があるかを尋ねましょう。焦るほど視野が狭くなるので、まず深呼吸。難しい場合は、いったん中止して日程を改める判断も有効です。

### 新幹線遅延時の払い戻し・遅延証明
新幹線では、一定時間以上の遅延で特急料金の払い戻し対象になる場合があります。遅延証明の入手方法や手続きは路線や条件で異なるため、公式情報を確認しましょう。駅で確認しておくだけでも、気持ちは落ち着きます。制度を知っているだけで、トラブル時の不安は軽くなります。

## 天候・宿泊・紛失トラブルへの備え

### 天候リスクと延期判断（ハザードマップ/防災速報）
台風や集中豪雨などの予報が出ている場合は、旅行の延期や中止も選択肢です。正直、天気予報を見るとがっかりしますが、安全第一の判断は後悔を減らします。自治体のハザードマップで現地の地形や避難場所を把握し、防災速報アプリを設定しておくと安心です。災害・運行・払い戻しは「一次情報＝公式」を基準に動くと判断がぶれません。安全を優先する判断は、結果的に満足度の高い旅行につながります。

### 宿泊キャンセル/オーバーブッキング時の対応
交通機関が止まっても、宿泊先が通常営業の場合はキャンセル料が発生するのが原則です。まずは宿泊先に状況を伝えて相談し、柔軟な対応が可能か確認しましょう。知人が同じ状況で相談したところ、別日への変更に応じてもらえたことがあるそうです。予約内容と異なる部屋が提示された場合は、予約確認メールやスクリーンショットを示し、冷静に交渉することが大切です。

### 紛失・盗難時の連絡手順と連絡手段の複線化
スマホや財布の紛失に備え、カード会社や携帯会社の連絡先を控えておくと安心です。いざというとき、連絡先はすぐ思い出せますか？ 家族や同行者とは連絡手段を複線化し、SMSやSNSなど複数の手段を決めておきましょう。災害用伝言ダイヤルのような仕組みも、練習しておくと役立ちます。

## FAQ

Q. 国内旅行保険は入るべき？
A. 国内でも事故や病気のリスクはあります。正直、私も最初は迷いましたが、保険料は少額のものもあるため、既存の補償を確認したうえで、必要なら加入を検討すると安心です。

Q. スマホだけで本当に大丈夫？
A. 便利ですが、電池切れや紛失のリスクがあります。予備電源と紙の控えを用意すると安心材料になります。

Q. 遅延や欠航時の払い戻しはどうすればいい？
A. 航空会社や鉄道会社の公式案内に従うのが基本です。欠航や大幅遅延時の特別対応があるため、早めに情報を確認しましょう。

Q. 旅行中に災害が起きたらまず何をする？
A. まず安全確保を優先し、自治体の避難情報や防災速報を確認します。家族とは連絡手段を事前に決めておくと落ち着いて動けます。

不安をゼロにすることは難しいですが、判断基準と行動手順を持つだけで、準備の迷いは大きく減ります。持ち物・移動・トラブルの3つを押さえ、安心して国内旅行を楽しんでください。
準備が整うと、旅先での選択にも余裕が生まれ、楽しさが増します。気持ちも落ち着きます。あなたの旅が穏やかなものになりますように。`}
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
                <tr className="border-b border-[#E11D48]">
                  <th className="py-3 px-4 text-left font-mono font-medium text-[13px] tracking-[0.5px] text-[#E11D48] uppercase">
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
                  <td className="py-3 px-4 font-medium text-[#333]">判断基準</td>
                  <td className="py-3 px-4">情報を羅列するのみ</td>
                  <td className="py-3 px-4">Myth/Reality形式で判断基準を明確化</td>
                </tr>
                <tr className="border-b border-[#eee]">
                  <td className="py-3 px-4 font-medium text-[#333]">構成</td>
                  <td className="py-3 px-4">項目が散在し優先順位が不明</td>
                  <td className="py-3 px-4">3つの備え（荷物・移動・トラブル）で整理</td>
                </tr>
                <tr className="border-b border-[#eee]">
                  <td className="py-3 px-4 font-medium text-[#333]">トーン</td>
                  <td className="py-3 px-4">事務的な説明文</td>
                  <td className="py-3 px-4">体験談で共感を得る親しみやすい文体</td>
                </tr>
                <tr className="border-b border-[#eee]">
                  <td className="py-3 px-4 font-medium text-[#333]">実用性</td>
                  <td className="py-3 px-4">抽象的なアドバイスのみ</td>
                  <td className="py-3 px-4">具体的なチェックリストで行動を後押し</td>
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
          <blockquote className="pl-6 border-l-4 border-[#E11D48]">
            <p className="font-serif font-normal text-[24px] leading-[1.5] tracking-[-0.3px] text-[#333] md:text-[28px]">
              「読者の不安に寄り添い、判断基準と行動手順で迷いを減らす。体験談で共感を得ながら、実用的な情報を届けます。」
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
            <article className="flex flex-col gap-3 pt-6 border-t border-[#E11D48]/30 md:w-[calc(50%-8px)] lg:flex-1">
              <div className="flex flex-col gap-2 flex-1">
                <span className="font-mono text-[11px] tracking-[0.5px] text-[#E11D48]/60 uppercase">
                  Writing
                </span>
                <h3 className="font-serif font-normal text-[14px] leading-[1.3] tracking-[-0.3px] text-[#E11D48]/60 md:text-[16px]">
                  Webライティング
                </h3>
                <span className="mt-auto font-mono text-[10px] tracking-[0.5px] text-[#999]">
                  現在のページ
                </span>
              </div>
              <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden opacity-60 bg-[#E11D48]/10 flex items-center justify-center">
                <span className="font-mono text-[12px] text-[#E11D48]/60">
                  Writing (3000)
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

            {/* Project 03 - Writing 5000 */}
            <article className="flex flex-col gap-3 pt-6 border-t border-[#6366F1] md:w-[calc(50%-8px)] lg:flex-1">
              <div className="flex flex-col gap-2 flex-1">
                <span className="font-mono text-[11px] tracking-[0.5px] text-[#6366F1] uppercase">
                  Writing
                </span>
                <h3 className="font-serif font-normal text-[14px] leading-[1.3] tracking-[-0.3px] text-[#6366F1] md:text-[16px]">
                  Webライティング
                </h3>
                <a
                  href="/projects/writing-5000"
                  className="mt-auto w-fit px-2 py-1 font-mono text-[10px] leading-[1.2] tracking-[0.5px] border border-[#6366F1] text-[#6366F1] rounded-md transition-colors hover:bg-[#6366F1] hover:text-white"
                  aria-label="Webライティング（5000字記事）の詳細を見る"
                >
                  Explore →
                </a>
              </div>
              <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden opacity-60 bg-[#6366F1]/10 flex items-center justify-center">
                <span className="font-mono text-[12px] text-[#6366F1]/60">
                  Writing (5000)
                </span>
              </div>
            </article>

            {/* Project 04 - Work Redesign */}
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

            {/* Project 05 - Sweets */}
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

            {/* Project 06 - Portfolio */}
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
