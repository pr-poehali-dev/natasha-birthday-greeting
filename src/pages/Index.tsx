import { useState, useEffect } from "react";

const WISHES = [
  {
    id: 1,
    emoji: "🐱",
    label: "Басик",
    color: "from-orange-100 to-amber-50",
    border: "border-orange-200",
    btnColor: "bg-orange-100 hover:bg-orange-200 text-orange-800 border-orange-300",
    title: "Чтобы басик чаще разговаривал",
    text: "Пусть твой любимый пушистик каждое утро встречает тебя самым громким «мяу» и никогда не молчит, когда ты приходишь домой. Ты заслуживаешь самых длинных кошачьих монологов! 🐾",
  },
  {
    id: 2,
    emoji: "🍈",
    label: "Дыня",
    color: "from-yellow-100 to-lime-50",
    border: "border-yellow-200",
    btnColor: "bg-yellow-100 hover:bg-yellow-200 text-yellow-800 border-yellow-300",
    title: "Чтобы мама чаще называла тебя дыней",
    text: "Пусть мама как можно чаще говорит тебе «дыня» — ведь это слово звучит как самая тёплая нежность на свете. А ты у нас и правда сладкая, как дыня в жаркий летний день! 🌞",
  },
  {
    id: 3,
    emoji: "🛁",
    label: "Ванная",
    color: "from-sky-100 to-blue-50",
    border: "border-sky-200",
    btnColor: "bg-sky-100 hover:bg-sky-200 text-sky-800 border-sky-300",
    title: "Чтобы мы меньше заливали ванну после себя",
    text: "Желаю, чтобы в нашем доме царил порядок, а ванная всегда оставалась сухой и уютной. Обещаем стараться! Ну... почти всегда 😅 Но ради тебя — точно чаще!",
  },
  {
    id: 4,
    emoji: "🌸",
    label: "Дача",
    color: "from-purple-100 to-violet-50",
    border: "border-purple-200",
    btnColor: "bg-purple-100 hover:bg-purple-200 text-purple-800 border-purple-300",
    title: "Чтобы ирисы и всё прочее на даче росли лучше",
    text: "Пусть твой сад цветёт буйным цветом — ирисы, пионы, розы, всё что душе угодно! Пусть земля будет щедрой, погода — ласковой, а каждый твой труд на даче приносит огромную радость. 🌺🌿",
  },
  {
    id: 5,
    emoji: "👑",
    label: "Работа",
    color: "from-rose-100 to-pink-50",
    border: "border-rose-200",
    btnColor: "bg-rose-100 hover:bg-rose-200 text-rose-800 border-rose-300",
    title: "Чтобы на работе уважали и соответственно относились",
    text: "Ты столько отдаёшь своему делу — и ты заслуживаешь только уважения, признания и достойного отношения. Пусть коллеги и руководство наконец-то видят, какой ценный человек рядом с ними! 💼✨",
  },
  {
    id: 6,
    emoji: "🍅",
    label: "Помидоры",
    color: "from-red-100 to-orange-50",
    border: "border-red-200",
    btnColor: "bg-red-100 hover:bg-red-200 text-red-800 border-red-300",
    title: "Много помидоров в теплице!",
    text: "МНОГО помидоров! Огромных, красных, спелых, сочных! Пусть теплица ломится от урожая, а помидоры растут сами, быстро и дружно. Целые вёдра, ящики, горы помидоров! 🍅🍅🍅",
  },
  {
    id: 7,
    emoji: "🍅",
    label: "Ещё помидоры",
    color: "from-red-50 to-rose-50",
    border: "border-red-100",
    btnColor: "bg-red-50 hover:bg-red-100 text-red-700 border-red-200",
    title: "Ещё чуть-чуть помидоров в теплице",
    text: "Ну и ещё немного помидоров. Совсем чуточку. Просто чтобы хватило на весь год — на салаты, заготовки, соусы и просто так с солью. Маленько-маленько... ещё вот столечко! 🍅",
  },
  {
    id: 8,
    emoji: "🍅",
    label: "Совсем чуть",
    color: "from-orange-50 to-red-50",
    border: "border-orange-100",
    btnColor: "bg-orange-50 hover:bg-orange-100 text-orange-700 border-orange-200",
    title: "Ну и совсем чуточку ещё",
    text: "Нет, серьёзно. Вот прям чуть-чуть. Ещё один кустик. Ну два. Ладно три. В общем — пусть будет столько помидоров, чтобы раздавать соседям и ещё оставалось! 😄🍅",
  },
  {
    id: 9,
    emoji: "🍅",
    label: "Прям чуууть",
    color: "from-yellow-50 to-orange-50",
    border: "border-yellow-100",
    btnColor: "bg-yellow-50 hover:bg-yellow-100 text-yellow-700 border-yellow-200",
    title: "Прям чуууть-чуть!",
    text: "Окей, последний раз. Обещаю. Просто пусть каждый помидор вырастет идеальным, без болезней и вредителей, крупным и сладким. Это последнее помидорное желание! Наверное... 🙈🍅",
  },
  {
    id: 10,
    emoji: "💕",
    label: "Любовь",
    color: "from-pink-100 to-fuchsia-50",
    border: "border-pink-200",
    btnColor: "bg-pink-100 hover:bg-pink-200 text-pink-800 border-pink-300",
    title: "Море любви",
    text: "Пусть твоя жизнь будет наполнена любовью — со всех сторон, во всех её проявлениях. Любовь близких, тепло друзей, забота и нежность каждый день. Ты этого очень заслуживаешь, мамочка! 💗",
  },
  {
    id: 11,
    emoji: "☀️",
    label: "Добро",
    color: "from-amber-100 to-yellow-50",
    border: "border-amber-200",
    btnColor: "bg-amber-100 hover:bg-amber-200 text-amber-800 border-amber-300",
    title: "Добра и светлых дней",
    text: "Пусть каждый день приносит только хорошее — добрые встречи, тёплые слова, маленькие радости. Пусть мир вокруг тебя будет добрым и светлым, как ты сама! 🌟",
  },
  {
    id: 12,
    emoji: "🧦",
    label: "Тёплые носочки",
    color: "from-teal-100 to-emerald-50",
    border: "border-teal-200",
    btnColor: "bg-teal-100 hover:bg-teal-200 text-teal-800 border-teal-300",
    title: "Тёплых носочков и уюта",
    text: "Желаю тебе вечеров с горячим чаем, мягким пледом и самыми тёплыми носочками. Таких моментов, когда можно просто выдохнуть, расслабиться и почувствовать, как хорошо быть дома. 🍵🏠",
  },
  {
    id: 13,
    emoji: "🐈",
    label: "Милые коты",
    color: "from-violet-100 to-purple-50",
    border: "border-violet-200",
    btnColor: "bg-violet-100 hover:bg-violet-200 text-violet-800 border-violet-300",
    title: "Побольше милых котов в жизни",
    text: "Пусть твой путь всегда украшают пушистые мордочки, мурлыканье и мягкие лапки. Коты — это маленькие солнышки, и ты заслуживаешь, чтобы их в твоей жизни было как можно больше! 😻",
  },
  {
    id: 14,
    emoji: "🚀",
    label: "От Юры",
    color: "from-indigo-100 to-blue-50",
    border: "border-indigo-200",
    btnColor: "bg-indigo-100 hover:bg-indigo-200 text-indigo-800 border-indigo-300",
    title: "От меня лично — с космическим теплом",
    text: "Как говорят перед важным полётом: «Поехали!» — так и ты: лети вперёд, к мечтам, к счастью, к новым высотам. Желаю тебе здоровья крепкого, улыбок искренних и чтобы каждый день был чуть лучше предыдущего. С Днём Рождения, Наташа! 🌌✨",
  },
];

const APOLOGIES = [
  { emoji: "💬", text: "За грубые слова, сказанные в порыве — прости. Иногда эмоции берут верх, но это не значит, что так можно." },
  { emoji: "🤐", text: "За бестактные моменты и неловкие фразы — прости. Порой мы не думаем о том, как наши слова звучат для других." },
  { emoji: "🌪️", text: "За ссоры и споры, которых можно было избежать — прости. Жизнь слишком короткая, чтобы тратить её на конфликты." },
  { emoji: "🤍", text: "За все те моменты, когда ты заслуживала большего терпения и понимания — прости. Ты этого заслуживаешь." },
];

export default function Index() {
  const [openWish, setOpenWish] = useState<number | null>(null);
  const [showApology, setShowApology] = useState(false);
  const [petals, setPetals] = useState<{ id: number; style: React.CSSProperties }[]>([]);

  useEffect(() => {
    const items = Array.from({ length: 18 }, (_, i) => ({
      id: i,
      style: {
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        fontSize: `${Math.random() * 20 + 14}px`,
        opacity: Math.random() * 0.5 + 0.2,
        animation: `floatPetal ${Math.random() * 6 + 6}s ease-in-out ${Math.random() * 4}s infinite alternate`,
        transform: `rotate(${Math.random() * 360}deg)`,
        position: "absolute" as const,
        pointerEvents: "none" as const,
        userSelect: "none" as const,
      } as React.CSSProperties,
    }));
    setPetals(items);
  }, []);

  const toggleWish = (id: number) => {
    setOpenWish(openWish === id ? null : id);
  };

  return (
    <div
      className="min-h-screen relative overflow-x-hidden"
      style={{
        background: "linear-gradient(135deg, #fff5f7 0%, #fdf0e8 30%, #f7f0ff 60%, #f0f9f0 100%)",
        fontFamily: "'Montserrat', sans-serif",
      }}
    >
      <style>{`
        @keyframes floatPetal {
          0% { transform: translateY(0px) rotate(0deg); }
          100% { transform: translateY(-24px) rotate(20deg); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes wishOpen {
          from { opacity: 0; transform: scaleY(0.85) translateY(-10px); }
          to { opacity: 1; transform: scaleY(1) translateY(0); }
        }
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.14); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .fade-in-up { animation: fadeInUp 0.9s ease-out forwards; }
        .wish-open { animation: wishOpen 0.38s cubic-bezier(0.34,1.56,0.64,1) forwards; transform-origin: top; }
        .heartbeat { animation: heartbeat 1.8s ease-in-out infinite; }
        .cormorant { font-family: 'Cormorant Garamond', serif !important; }
        .caveat { font-family: 'Caveat', cursive !important; }
        .shimmer-title {
          background: linear-gradient(90deg, #c084fc, #f472b6, #fb923c, #f472b6, #c084fc);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s linear infinite;
        }
        .wish-btn { transition: all 0.18s ease; }
        .wish-btn:hover { transform: translateY(-2px); box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
        .wish-btn:active { transform: scale(0.96); }
      `}</style>

      {/* Floating petals */}
      {petals.map((p) => (
        <span key={p.id} style={p.style}>🌸</span>
      ))}
      <span style={{ position: "absolute", top: "8%", right: "5%", fontSize: 32, opacity: 0.4, animation: "floatPetal 7s ease-in-out 1s infinite alternate", pointerEvents: "none" }}>🦋</span>
      <span style={{ position: "absolute", top: "35%", left: "3%", fontSize: 22, opacity: 0.3, animation: "floatPetal 9s ease-in-out 3s infinite alternate", pointerEvents: "none" }}>🦋</span>
      <span style={{ position: "absolute", top: "70%", right: "8%", fontSize: 26, opacity: 0.35, animation: "floatPetal 8s ease-in-out 0.5s infinite alternate", pointerEvents: "none" }}>🦋</span>

      <div className="relative z-10 max-w-2xl mx-auto px-4 py-12">

        {/* HERO */}
        <div className="text-center mb-16 fade-in-up">
          <div className="text-5xl mb-4 heartbeat inline-block">💐</div>
          <div className="cormorant text-lg tracking-widest uppercase mb-2" style={{ color: "#f472b6", fontStyle: "italic" }}>
            С Днём Рождения
          </div>
          <h1 className="cormorant shimmer-title font-light mb-4" style={{ fontSize: "clamp(3rem, 10vw, 5rem)", lineHeight: 1.1 }}>
            Наташа
          </h1>
          <div className="caveat text-2xl mb-6" style={{ color: "#f43f5e", opacity: 0.9 }}>
            Любимая, дорогая, единственная ✨
          </div>
          <div
            className="mx-auto rounded-3xl overflow-hidden shadow-2xl mb-8"
            style={{ maxWidth: 340, aspectRatio: "4/3" }}
          >
            <img
              src="https://cdn.poehali.dev/projects/b4f47127-ba61-4e0e-83fb-61457c2d817f/files/669177b8-b9a3-4a90-b909-3efac27f9df7.jpg"
              alt="Цветы для Наташи"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="cormorant text-xl font-light leading-relaxed" style={{ color: "#78716c", fontStyle: "italic" }}>
            В этот особенный день хочется сказать тебе всё самое важное —<br />
            всё, что давно нужно было сказать вслух.
          </p>
        </div>

        {/* DIVIDER */}
        <div className="flex items-center gap-4 mb-12">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-rose-200" />
          <span className="text-rose-300 text-xl">🌺</span>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-rose-200" />
        </div>

        {/* WISHES */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="cormorant text-4xl font-light mb-2" style={{ color: "#44403c" }}>Пожелания</h2>
            <p className="caveat text-lg" style={{ color: "#f472b6" }}>нажми на любое — и оно откроется 🌸</p>
          </div>

          <div className="flex flex-wrap gap-3 justify-center mb-6">
            {WISHES.map((w) => (
              <button
                key={w.id}
                onClick={() => toggleWish(w.id)}
                className={`wish-btn border rounded-full px-4 py-2 text-sm font-medium cursor-pointer ${w.btnColor} ${openWish === w.id ? "ring-2 ring-offset-1 ring-pink-300 scale-105 shadow-md" : ""}`}
              >
                {w.emoji} {w.label}
              </button>
            ))}
          </div>

          {openWish !== null && (() => {
            const wish = WISHES.find(w => w.id === openWish);
            if (!wish) return null;
            return (
              <div
                key={openWish}
                className={`wish-open rounded-3xl border p-6 shadow-lg bg-gradient-to-br ${wish.color} ${wish.border} mx-auto`}
                style={{ maxWidth: 520 }}
              >
                <div className="text-4xl text-center mb-3">{wish.emoji}</div>
                <h3 className="cormorant text-2xl font-medium text-center mb-3 leading-tight" style={{ color: "#44403c" }}>
                  {wish.title}
                </h3>
                <p className="text-center leading-relaxed" style={{ fontSize: 15, color: "#57534e" }}>
                  {wish.text}
                </p>
              </div>
            );
          })()}
        </section>

        {/* DIVIDER */}
        <div className="flex items-center gap-4 mb-12">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-violet-200" />
          <span className="text-violet-300 text-xl">💜</span>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-violet-200" />
        </div>

        {/* APOLOGY */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="cormorant text-4xl font-light mb-2" style={{ color: "#44403c" }}>Прости нас</h2>
            <p className="caveat text-lg" style={{ color: "#a78bfa" }}>слова, которые давно хотели быть сказаны 💜</p>
          </div>

          {!showApology ? (
            <div className="text-center">
              <button
                onClick={() => setShowApology(true)}
                className="wish-btn border border-violet-300 rounded-full px-8 py-3 text-base font-medium cursor-pointer"
                style={{ background: "#f5f3ff", color: "#6d28d9" }}
              >
                💜 Открыть
              </button>
            </div>
          ) : (
            <div className="wish-open space-y-4">
              {APOLOGIES.map((a, i) => (
                <div
                  key={i}
                  className="rounded-2xl border p-5 shadow-sm"
                  style={{ borderColor: "#ede9fe", background: "linear-gradient(135deg, #f5f3ff, #faf5ff)" }}
                >
                  <div className="flex items-start gap-4">
                    <span className="text-2xl flex-shrink-0 mt-0.5">{a.emoji}</span>
                    <p className="leading-relaxed" style={{ fontSize: 15, color: "#57534e" }}>
                      {a.text}
                    </p>
                  </div>
                </div>
              ))}
              <div className="rounded-2xl border p-5 shadow-sm text-center" style={{ borderColor: "#fce7f3", background: "linear-gradient(135deg, #fff1f2, #fdf2f8)" }}>
                <div className="cormorant text-xl font-light leading-relaxed" style={{ color: "#e11d48", fontStyle: "italic" }}>
                  «Мы любим тебя — даже когда это плохо показываем.<br />
                  И именно поэтому просим прощения.»
                </div>
              </div>
            </div>
          )}
        </section>

        {/* FINAL */}
        <div className="text-center py-10 border-t" style={{ borderColor: "#fce7f3" }}>
          <div className="text-4xl mb-4">🌺</div>
          <p className="cormorant text-2xl font-light leading-relaxed mb-2" style={{ color: "#57534e", fontStyle: "italic" }}>
            С Днём Рождения, Наташа!
          </p>
          <p className="caveat text-xl" style={{ color: "#f472b6" }}>
            Живи долго, цвети ярко, люби и будь любимой 💐
          </p>
          <div className="mt-6 caveat text-sm" style={{ color: "#a8a29e" }}>
            сделано с любовью ✦
          </div>
        </div>

      </div>
    </div>
  );
}
