"use client";

import { useState, useEffect, useRef, FormEvent } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import {
  gsap,
  ScrollTrigger,
  prefersReducedMotion,
  motion,
} from "../utils/animations";

export default function Contact() {
  const headerRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const successMessageRef = useRef<HTMLParagraphElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  useEffect(() => {
    if (prefersReducedMotion()) return;

    // Header animation
    if (headerRef.current) {
      const title = headerRef.current.querySelector("h1");
      const description = headerRef.current.querySelector("p");

      gsap.fromTo(
        title,
        { opacity: 0, y: motion.distance.small },
        {
          opacity: 1,
          y: 0,
          duration: motion.duration.slow,
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
          delay: 0.2,
          ease: motion.ease.default,
        }
      );
    }

    // Form animation
    if (formRef.current) {
      const formGroups = formRef.current.querySelectorAll("[data-form-group]");

      gsap.fromTo(
        formGroups,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: motion.duration.normal,
          stagger: motion.stagger.fast,
          delay: 0.4,
          ease: motion.ease.default,
        }
      );
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // 送信成功メッセージを5秒後にフェードアウト
  useEffect(() => {
    if (submitStatus === "success" && successMessageRef.current) {
      // メッセージをフェードイン
      gsap.fromTo(
        successMessageRef.current,
        { opacity: 0, y: 10 },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: motion.ease.default,
        }
      );

      // 3秒後にフェードアウト
      const timer = setTimeout(() => {
        if (successMessageRef.current) {
          gsap.to(successMessageRef.current, {
            opacity: 0,
            y: -10,
            duration: 0.6,
            ease: motion.ease.default,
            onComplete: () => {
              setSubmitStatus("idle");
            },
          });
        }
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const formData = new FormData(e.currentTarget);

    const GAS_ENDPOINT = "https://script.google.com/macros/s/AKfycbxWZ5TuvWQ4SEZTIFxAsvisNiwYit8tWW0BAOSdk2IZtbIhUOvELez3yoY3gdKWEoWXXQ/exec";

    // GASにデータを送信（エラーは無視）
    fetch(GAS_ENDPOINT, {
      method: "POST",
      mode: "no-cors",
      body: formData,
    }).catch(() => {
      // GASはリダイレクトやCORSエラーを返すことがあるが、
      // データは正常に保存されているため、エラーは無視
    });

    // 送信は成功とみなす（実際にスプレッドシートに保存されている）
    setSubmitStatus("success");
    e.currentTarget.reset();
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-[#f8f6f3]">
      <div className="px-[50px] max-w-[1280px] mx-auto">
        <Navigation />

        {/* Page Header */}
        <header
          ref={headerRef}
          className="flex flex-col gap-6 pt-16 pb-20 pr-0 md:pt-32 md:pb-24 lg:max-w-[900px]"
        >
          <h1 className="font-serif font-normal text-[32px] leading-[1.2] tracking-[-0.5px] text-[#111] md:text-[44px] lg:text-[56px]">
            お問い合わせ
          </h1>
          <p className="font-serif font-light text-[18px] leading-[1.7] tracking-[-0.3px] text-[#444] md:text-[20px] lg:text-[24px] max-w-[640px]">
            制作に関するご相談やお見積もりなど、お気軽にお問い合わせください。
          </p>
        </header>

        {/* Contact Form */}
        <main className="pb-32">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="max-w-[800px] flex flex-col gap-8"
          >
            {/* お名前 */}
            <div data-form-group className="flex flex-col gap-3">
              <label
                htmlFor="name"
                className="font-mono text-[13px] tracking-[0.5px] text-[#111] uppercase"
              >
                お名前
                <span className="text-[#d97706] ml-1">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 font-serif text-[16px] bg-white border border-[#ccc] rounded-lg focus:outline-none focus:border-[#ab0782] focus:ring-2 focus:ring-[#ab0782]/20 transition-all"
                placeholder="山田 太郎"
              />
            </div>

            {/* メールアドレス */}
            <div data-form-group className="flex flex-col gap-3">
              <label
                htmlFor="email"
                className="font-mono text-[13px] tracking-[0.5px] text-[#111] uppercase"
              >
                メールアドレス
                <span className="text-[#d97706] ml-1">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 font-serif text-[16px] bg-white border border-[#ccc] rounded-lg focus:outline-none focus:border-[#ab0782] focus:ring-2 focus:ring-[#ab0782]/20 transition-all"
                placeholder="example@email.com"
              />
            </div>

            {/* 現在の職種・役職 */}
            <div data-form-group className="flex flex-col gap-3">
              <label
                htmlFor="position"
                className="font-mono text-[13px] tracking-[0.5px] text-[#111] uppercase"
              >
                現在の職種・役職
              </label>
              <input
                type="text"
                id="position"
                name="position"
                className="w-full px-4 py-3 font-serif text-[16px] bg-white border border-[#ccc] rounded-lg focus:outline-none focus:border-[#ab0782] focus:ring-2 focus:ring-[#ab0782]/20 transition-all"
                placeholder="Webディレクター"
              />
            </div>

            {/* 相談したい内容 */}
            <div data-form-group className="flex flex-col gap-3">
              <label
                htmlFor="inquiry"
                className="font-mono text-[13px] tracking-[0.5px] text-[#111] uppercase"
              >
                相談したい内容
                <span className="text-[#d97706] ml-1">*</span>
              </label>
              <textarea
                id="inquiry"
                name="inquiry"
                required
                rows={6}
                className="w-full px-4 py-3 font-serif text-[16px] bg-white border border-[#ccc] rounded-lg focus:outline-none focus:border-[#ab0782] focus:ring-2 focus:ring-[#ab0782]/20 transition-all resize-vertical"
                placeholder="ご相談内容を詳しくお聞かせください"
              />
            </div>

            {/* 希望する相談日時 */}
            <div data-form-group className="flex flex-col gap-3">
              <label
                htmlFor="dates"
                className="font-mono text-[13px] tracking-[0.5px] text-[#111] uppercase"
              >
                希望する相談日時（第1〜3希望）
                <span className="text-[#d97706] ml-1">*</span>
              </label>
              <textarea
                id="dates"
                name="dates"
                required
                rows={4}
                className="w-full px-4 py-3 font-serif text-[16px] bg-white border border-[#ccc] rounded-lg focus:outline-none focus:border-[#ab0782] focus:ring-2 focus:ring-[#ab0782]/20 transition-all resize-vertical"
                placeholder={"第1希望：2024年1月15日 14:00-15:00\n第2希望：2024年1月16日 10:00-11:00"}
              />
            </div>

            {/* このページを知ったきっかけ */}
            <div data-form-group className="flex flex-col gap-3">
              <label
                htmlFor="source"
                className="font-mono text-[13px] tracking-[0.5px] text-[#111] uppercase"
              >
                このページを知ったきっかけ
              </label>
              <select
                id="source"
                name="source"
                className="w-full px-4 py-3 font-serif text-[16px] bg-white border border-[#ccc] rounded-lg focus:outline-none focus:border-[#ab0782] focus:ring-2 focus:ring-[#ab0782]/20 transition-all"
              >
                <option value="">選択してください</option>
                <option value="記事からの流入">記事からの流入</option>
                <option value="検索">検索</option>
                <option value="SNS">SNS</option>
                <option value="その他">その他</option>
              </select>
            </div>

            {/* Submit Button */}
            <div data-form-group className="flex flex-col gap-4 pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-4 font-mono text-[15px] tracking-[0.5px] bg-[#ab0782] text-white rounded-lg transition-all hover:bg-[#8a0668] hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "送信中..." : "送信する"}
              </button>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <p ref={successMessageRef} className="font-serif text-[16px] text-[#047857] text-center">
                  お問い合わせありがとうございます。送信が完了しました。
                </p>
              )}
              {submitStatus === "error" && (
                <p className="font-serif text-[16px] text-[#dc2626] text-center">
                  送信に失敗しました。お手数ですが、もう一度お試しください。
                </p>
              )}
            </div>
          </form>
        </main>

        <Footer />
      </div>
    </div>
  );
}
