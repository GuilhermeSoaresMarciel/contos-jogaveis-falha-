import { useState, useEffect, useRef } from "react";
import icon from "/Icon.png";

export default function Default() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const menuRef = useRef<HTMLDivElement | null>(null);
  const loginRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  function scrollToLogin() {
    loginRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#080706] text-[#fff8e7] [scrollbar-color:#d4af37_#080706] [scrollbar-width:thin]">
      <header className="sticky top-0 z-50 flex items-center justify-between border-b border-[#d4af37]/20 bg-[#080706] px-6 py-4 shadow-[0_4px_30px_rgba(212,175,55,0.08)] md:px-12">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="absolute inset-0 rounded-xl bg-[#d4af37]/30 blur-lg" />

            <img
              src={icon}
              alt="Contos Jogáveis"
              className="relative h-10 w-10 "
            />
          </div>

          <h1 className="text-xl font-bold tracking-tight">
            Contos{" "}
            <span className="bg-gradient-to-r from-[#fff1a8] via-[#d4af37] to-[#fff1a8] bg-clip-text text-transparent">
              Jogáveis
            </span>
          </h1>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          <a
            href=""
            className="text-sm text-[#cfc6b0] transition hover:text-[#ffe9a3]"
          >
            Explorar histórias
          </a>

          <a
            href=""
            className="text-sm text-[#cfc6b0] transition hover:text-[#ffe9a3]"
          >
            Como funciona
          </a>

          <a
            href=""
            className="text-sm text-[#cfc6b0] transition hover:text-[#ffe9a3]"
          >
            Sobre nós
          </a>
        </nav>

        <div ref={menuRef} className="relative md:hidden">
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="rounded-lg border border-[#d4af37]/30 bg-[#11100d] px-4 py-2 text-sm font-medium text-[#f5d978] transition hover:border-[#d4af37]/60 hover:bg-[#17140d]"
          >
            Menu
          </button>

          {menuOpen && (
            <nav className="absolute right-0 top-full z-50 mt-2 flex w-56 flex-col gap-2 rounded-xl border border-[#d4af37]/30 bg-[#11100d] p-3 shadow-[0_15px_50px_rgba(0,0,0,0.8)]">
              <a
                href=""
                onClick={closeMenu}
                className="rounded-lg px-4 py-3 text-sm text-[#cfc6b0] transition hover:bg-[#1c180d] hover:text-[#ffe9a3]"
              >
                Explorar histórias
              </a>

              <a
                href=""
                onClick={closeMenu}
                className="rounded-lg px-4 py-3 text-sm text-[#cfc6b0] transition hover:bg-[#1c180d] hover:text-[#ffe9a3]"
              >
                Como funciona
              </a>

              <a
                href=""
                onClick={closeMenu}
                className="rounded-lg px-4 py-3 text-sm text-[#cfc6b0] transition hover:bg-[#1c180d] hover:text-[#ffe9a3]"
              >
                Sobre nós
              </a>
            </nav>
          )}
        </div>
      </header>

      <section className="relative flex min-h-[calc(100vh-73px)] items-center justify-center overflow-hidden px-6 py-20">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#d4af37]/10 blur-[120px]" />

        <div className="pointer-events-none absolute -left-32 top-1/3 h-80 w-80 rounded-full bg-[#b8860b]/10 blur-[100px]" />

        <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#d4af37]/10 blur-[120px]" />

        <div className="pointer-events-none absolute left-[15%] top-[20%] h-1 w-1 rounded-full bg-[#ffe9a3] shadow-[0_0_12px_4px_rgba(255,233,163,0.6)]" />

        <div className="pointer-events-none absolute right-[20%] top-[35%] h-1 w-1 rounded-full bg-[#d4af37] shadow-[0_0_15px_5px_rgba(212,175,55,0.7)]" />

        <div className="pointer-events-none absolute bottom-[20%] left-[35%] h-1 w-1 rounded-full bg-[#fff1a8] shadow-[0_0_12px_4px_rgba(255,241,168,0.5)]" />

        <div className="relative z-10 grid w-full max-w-6xl items-center gap-20 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <span className="mb-6 inline-block rounded-full border border-[#d4af37]/30 bg-[#d4af37]/5 px-5 py-2 text-sm font-medium text-[#f5d978] shadow-[0_0_25px_rgba(212,175,55,0.08)]">
              ✦ Histórias que você controla
            </span>

            <h1 className="text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Contos{" "}
              <span className="bg-gradient-to-r from-[#fff7c7] via-[#d4af37] to-[#fff0a0] bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(212,175,55,0.25)]">
                Jogáveis
              </span>
            </h1>

            <h2 className="mt-6 text-2xl font-semibold text-[#f5ead0] sm:text-3xl">
              Suas escolhas.
              <br />
              <span className="text-[#968d7a]">Suas histórias.</span>
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-[#a9a08e] lg:mx-0">
              Entre em mundos onde cada decisão muda o destino. Explore, escolha
              seu caminho e descubra finais que só existem por causa das suas
              escolhas.
            </p>

            <button
              type="button"
              onClick={scrollToLogin}
              className="mt-9 rounded-xl border border-[#f5d978]/40 bg-gradient-to-r from-[#b8860b] via-[#d4af37] to-[#b8860b] px-8 py-4 font-bold text-[#171207] shadow-[0_0_30px_rgba(212,175,55,0.2)] transition hover:-translate-y-1 hover:shadow-[0_0_45px_rgba(212,175,55,0.4)]"
            >
              Explorar histórias →
            </button>
          </div>

          <article
            ref={loginRef}
            className="relative mx-auto w-full max-w-md scroll-mt-28 overflow-hidden rounded-2xl border border-[#d4af37]/25 bg-[#0e0d0a] p-8 shadow-[0_25px_80px_rgba(0,0,0,0.6),0_0_40px_rgba(212,175,55,0.08)]"
          >
            <div className="absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent shadow-[0_0_15px_#d4af37]" />

            <div className="mb-8">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#b59b50]">
                Sua jornada
              </span>

              <h1 className="mt-2 text-3xl font-bold text-[#fff8e7]">Entrar</h1>

              <p className="mt-2 text-sm text-[#918876]">
                Continue sua jornada de onde parou.
              </p>
            </div>

            <div className="mb-5">
              <label className="mb-2 block text-sm font-medium text-[#d8cdb5]">
                E-mail
              </label>

              <input
                type="email"
                placeholder="seu@email.com"
                className="w-full rounded-xl border border-[#d4af37]/15 bg-[#080706] px-4 py-3 text-[#fff8e7] outline-none transition placeholder:text-[#554f43] focus:border-[#d4af37]/70 focus:ring-2 focus:ring-[#d4af37]/10"
              />
            </div>

            <div className="mb-2">
              <label className="mb-2 block text-sm font-medium text-[#d8cdb5]">
                Senha
              </label>

              <input
                type="password"
                placeholder="••••••••"
                className="w-full rounded-xl border border-[#d4af37]/15 bg-[#080706] px-4 py-3 text-[#fff8e7] outline-none transition placeholder:text-[#554f43] focus:border-[#d4af37]/70 focus:ring-2 focus:ring-[#d4af37]/10"
              />
            </div>

            <div className="mb-6 text-right">
              <a
                href=""
                className="text-sm text-[#d4af37] transition hover:text-[#ffe9a3]"
              >
                Esqueci minha senha
              </a>
            </div>

            <button
              type="button"
              className="w-full rounded-xl border border-[#f5d978]/30 bg-gradient-to-r from-[#b8860b] via-[#d4af37] to-[#b8860b] py-3.5 font-bold text-[#171207] shadow-[0_0_20px_rgba(212,175,55,0.15)] transition hover:shadow-[0_0_35px_rgba(212,175,55,0.3)] focus:outline-none focus:ring-2 focus:ring-[#d4af37]/50"
            >
              Entrar
            </button>

            <div className="my-6 flex items-center gap-4">
              <div className="h-px flex-1 bg-[#d4af37]/15" />

              <span className="text-sm text-[#756d5d]">ou</span>

              <div className="h-px flex-1 bg-[#d4af37]/15" />
            </div>

            <button
              type="button"
              className="w-full rounded-xl border border-[#d4af37]/20 bg-[#15130e] py-3.5 font-semibold text-[#d8cdb5] transition hover:border-[#d4af37]/40 hover:bg-[#1c180d] hover:text-[#ffe9a3]"
            >
              Criar conta
            </button>
          </article>
        </div>
      </section>

      <footer className="border-t border-[#d4af37]/15 bg-[#080706] px-6 py-8 text-center text-sm text-[#756d5d]">
        <span className="text-[#b59b50]">✦</span> © 2026 Contos Jogáveis. Todos
        os direitos reservados. <span className="text-[#b59b50]">✦</span>
      </footer>
    </div>
  );
}
