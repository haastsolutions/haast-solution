import * as React from "react"

export interface LanyardBadgeProps {
  front?: React.ReactNode
  back?: React.ReactNode
  title?: string
  subtitle?: string
  name?: string
  role?: string
  strapText?: string
  strapLabel?: string
  strapColor?: string
  inkColor?: string
  cardColor?: string
  cardWidth?: number
  height?: string
  className?: string
}

export type Pt = { x: number; y: number; px: number; py: number; w: number }
export type Link = [number, number, number]
export type Spin = { a: number; v: number }

export function integrate(pts: Pt[], dt: number, gravity: number, damping: number) {
  for (const p of pts) {
    if (!p.w) continue
    const vx = (p.x - p.px) * damping
    const vy = (p.y - p.py) * damping
    p.px = p.x
    p.py = p.y
    p.x += vx
    p.y += vy + gravity * dt * dt
  }
}

export function solve(pts: Pt[], links: Link[], iterations: number) {
  for (let k = 0; k < iterations; k++) {
    for (const [i, j, rest] of links) {
      const a = pts[i]
      const b = pts[j]
      const ws = a.w + b.w
      if (!ws) continue
      const dx = b.x - a.x
      const dy = b.y - a.y
      const d = Math.hypot(dx, dy) || 1e-6
      const f = (d - rest) / (d * ws)
      a.x += dx * f * a.w
      a.y += dy * f * a.w
      b.x -= dx * f * b.w
      b.y -= dy * f * b.w
    }
  }
}

export function spinStep(s: Spin, target: number, dt: number, drive: number) {
  s.v += (-(s.a - target) * 18 - s.v * 3.2 + drive) * dt
  s.a += s.v * dt
}

export function swingAngle(top: Pt, bottom: Pt) {
  return Math.atan2(bottom.x - top.x, bottom.y - top.y)
}

const DISPLAY = '"Courier New", Courier, monospace'

function makeStrap(
  length: number,
  width: number,
  dpr: number,
  opts: { color: string; ink: string; text: string; label: string; plain?: boolean },
) {
  const c = document.createElement("canvas")
  c.width = Math.max(1, Math.round(width * dpr))
  c.height = Math.max(1, Math.round(length * dpr))
  const ctx = c.getContext("2d")!
  ctx.setTransform(0, dpr, -dpr, 0, c.width, 0)
  ctx.fillStyle = opts.color
  ctx.fillRect(0, 0, length, width)
  ctx.strokeStyle = ctx.fillStyle = opts.ink

  if (!opts.plain) {
    ctx.save()
    ctx.beginPath()
    ctx.rect(0, 0, length, width)
    ctx.clip()
    ctx.textBaseline = "middle"
    const scriptFont = "700 " + Math.round(width * 0.45) + "px " + DISPLAY
    const labelFont = "700 " + Math.round(width * 0.35) + "px " + DISPLAY
    ctx.font = scriptFont
    const scriptW = ctx.measureText(opts.text).width
    ctx.font = labelFont
    const labelW = ctx.measureText(opts.label).width
    const gap = width * 0.6
    let x = width * 0.4
    let flip = 1
    while (x < length) {
      x += width * 2.8
      ctx.globalAlpha = 0.95
      ctx.font = scriptFont
      ctx.fillText(opts.text, x, width * 0.52)
      x += scriptW + gap
      if (opts.label) {
        ctx.font = labelFont
        ctx.fillText("-  " + opts.label + "  -", x, width * 0.53)
        x += labelW + ctx.measureText("-    -").width + gap
      }
      flip = -flip
    }
    ctx.restore()
  }

  ctx.globalAlpha = 0.35
  ctx.lineWidth = 1
  ctx.beginPath()
  ctx.moveTo(0, 1.5)
  ctx.lineTo(length, 1.5)
  ctx.moveTo(0, width - 1.5)
  ctx.lineTo(length, width - 1.5)
  ctx.stroke()
  return c
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = React.useState(false)
  React.useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    setReduced(mq.matches)
    const h = (e: MediaQueryListEvent) => setReduced(e.matches)
    mq.addEventListener("change", h)
    return () => mq.removeEventListener("change", h)
  }, [])
  return reduced
}

export default function LanyardBadge({
  front,
  back,
  title = "HAAST FOUNDER",
  subtitle = "INDORE HQ · 2026",
  name = "MOHIT BHARARDE",
  role = "FOUNDER & CEO",
  strapText = "haast solution pvt ltd",
  strapLabel = "EXECUTIVE HQ",
  strapColor = "#141312",
  inkColor = "#d4af37",
  cardColor = "#0c0b0a",
  cardWidth = 220,
  height = "100svh",
  className = "",
}: LanyardBadgeProps) {
  const rootRef = React.useRef<HTMLElement | null>(null)
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null)
  const cardRef = React.useRef<HTMLDivElement | null>(null)
  const innerRef = React.useRef<HTMLDivElement | null>(null)
  const reduced = usePrefersReducedMotion()
  const flipRef = React.useRef<() => void>(() => {})
  const [showBack, setShowBack] = React.useState(false)
  const backRef = React.useRef(showBack)
  backRef.current = showBack

  const cw = cardWidth
  const ch = Math.round(cardWidth * 1.4)
  const ringR = Math.max(7, Math.round(cw * 0.036))
  const clipH = Math.round(cw * 0.1)

  const look = React.useRef({ strapText, strapLabel, strapColor, inkColor })
  look.current = { strapText, strapLabel, strapColor, inkColor }
  const lookKey = [strapText, strapLabel, strapColor, inkColor].join("|")

  React.useEffect(() => {
    const root = rootRef.current
    const canvas = canvasRef.current
    const card = cardRef.current
    const inner = innerRef.current
    const ctx = canvas?.getContext("2d")
    if (!root || !canvas || !card || !inner || !ctx) return

    const sw = Math.max(14, Math.round(cw * 0.1))
    const lowLen = sw * 2.2
    const arm = ringR * 2 + clipH + ch * 0.55
    const N = 14

    let pts: Pt[] = []
    let links: Link[] = []
    let left: number[] = []
    let right: number[] = []
    let low: number[] = []
    let iB = 0
    let iT = 0
    let iC = 0
    let strandRest = 1
    let dpr = 1
    let W = 1
    let H = 1
    let strapTex: HTMLCanvasElement | null = null
    let plainTex: HTMLCanvasElement | null = null
    const spin: Spin = { a: 0, v: 0 }
    let spinTarget = backRef.current ? Math.PI : 0
    spin.a = spinTarget

    const add = (x: number, y: number, w: number) => {
      pts.push({ x, y, px: x, py: y, w })
      return pts.length - 1
    }
    const strand = (from: number, to: number, n: number, slack: number) => {
      const a = pts[from]
      const b = pts[to]
      const rest = (Math.hypot(b.x - a.x, b.y - a.y) * slack) / n
      const ids = [from]
      for (let i = 1; i < n; i++) ids.push(add(a.x + ((b.x - a.x) * i) / n, a.y + ((b.y - a.y) * i) / n, 1))
      ids.push(to)
      for (let i = 0; i < n; i++) links.push([ids[i], ids[i + 1], rest])
      return { ids, rest }
    }

    const build = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      W = Math.max(1, root.clientWidth)
      H = Math.max(1, root.clientHeight)
      canvas.width = Math.round(W * dpr)
      canvas.height = Math.round(H * dpr)

      pts = []
      links = []
      const cx = W / 2
      const spread = Math.min(W * 0.16, cw * 0.55)
      const top = -sw * 2
      const bY = Math.max(H * 0.12, Math.min(H * 0.35, H - (lowLen + ringR * 2 + clipH + ch) - 20))

      const aL = add(cx - spread, top, 0)
      iB = add(cx, bY, 1.4)
      const l = strand(aL, iB, N, 1.03)
      const aR = add(cx + spread, top, 0)
      const r = strand(aR, iB, N, 1.03)
      iT = add(cx, bY + lowLen, 0.8)
      const lo = strand(iB, iT, 3, 1)
      iC = add(cx, bY + lowLen + arm, 0.25)
      links.push([iT, iC, arm])
      left = l.ids
      right = r.ids
      low = lo.ids
      strandRest = l.rest

      const c = look.current
      const opts = { color: c.strapColor, ink: c.inkColor, text: c.strapText, label: c.strapLabel }
      strapTex = makeStrap(strandRest * N + 4, sw, dpr, opts)
      plainTex = makeStrap(lowLen + 4, sw * 0.8, dpr, { ...opts, plain: true })

      if (reduced) {
        for (let i = 0; i < 900; i++) {
          integrate(pts, STEP, GRAVITY, 0.98)
          solve(pts, links, ITER)
        }
      } else {
        pts[iC].x += cw * 0.55
        pts[iC].px = pts[iC].x - 2
        spin.v = 5
      }
    }

    const STEP = 1 / 120
    const GRAVITY = 2400
    const ITER = 18

    const ribbon = (ids: number[], tex: HTMLCanvasElement, rest: number, light: number) => {
      const Wt = tex.width
      for (let i = 0; i < ids.length - 1; i++) {
        const a = pts[ids[i]]
        const b = pts[ids[i + 1]]
        const dx = (b.x - a.x) * dpr
        const dy = (b.y - a.y) * dpr
        const len = Math.hypot(dx, dy) || 1e-6
        const tx = dx / len
        const ty = dy / len
        const nx = ty
        const ny = -tx
        const v0 = i * rest * dpr
        const dv = rest * dpr
        const k = len / dv
        ctx.setTransform(nx, ny, tx * k, ty * k, a.x * dpr - (nx * Wt) / 2 - tx * k * v0, a.y * dpr - (ny * Wt) / 2 - ty * k * v0)
        const src = Math.min(dv + 1.5, tex.height - v0)
        if (src > 0) ctx.drawImage(tex, 0, v0, Wt, src, 0, v0, Wt, src)
        const shade = 0.22 * (1 - Math.max(0, nx * light))
        ctx.fillStyle = "rgba(0,0,0," + shade.toFixed(3) + ")"
        ctx.fillRect(0, v0, Wt, dv + 1)
      }
    }

    const metal = (x0: number, y0: number, x1: number, y1: number) => {
      const g = ctx.createLinearGradient(x0, y0, x1, y1)
      g.addColorStop(0, "#f4efe4")
      g.addColorStop(0.45, "#b9b0a0")
      g.addColorStop(0.55, "#8f8778")
      g.addColorStop(1, "#ece6da")
      return g
    }

    const draw = () => {
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      if (!strapTex || !plainTex) return
      ctx.imageSmoothingEnabled = true
      ribbon(left, strapTex, strandRest, -1)
      ribbon(right, strapTex, strandRest, 1)
      ribbon(low, plainTex, (lowLen * 1) / 3, 0)

      const B = pts[iB]
      const T = pts[iT]
      const ang = Math.atan2(T.x - B.x, T.y - B.y)
      const u = sw / 20
      ctx.setTransform(dpr, 0, 0, dpr, B.x * dpr, B.y * dpr)
      ctx.rotate(-ang)
      ctx.shadowColor = "rgba(0,0,0,0.3)"
      ctx.shadowBlur = 6 * dpr
      ctx.shadowOffsetY = 2 * dpr
      ctx.fillStyle = metal(-16 * u, 0, 16 * u, 0)
      ctx.beginPath()
      ctx.roundRect(-15 * u, -14 * u, 30 * u, 17 * u, 3 * u)
      ctx.fill()
      ctx.beginPath()
      ctx.roundRect(-11 * u, 1 * u, 22 * u, 15 * u, [2 * u, 2 * u, 6 * u, 6 * u])
      ctx.fill()
      ctx.shadowColor = "transparent"
      ctx.fillStyle = "rgba(40,36,30,0.55)"
      ctx.fillRect(-10 * u, -9 * u, 20 * u, 2.2 * u)
      ctx.fillRect(-5 * u, 6 * u, 10 * u, 3 * u)
      ctx.strokeStyle = "rgba(255,255,255,0.6)"
      ctx.lineWidth = 0.8 * u
      ctx.beginPath()
      ctx.moveTo(-13 * u, -12.5 * u)
      ctx.lineTo(13 * u, -12.5 * u)
      ctx.stroke()

      ctx.setTransform(dpr, 0, 0, dpr, T.x * dpr, (T.y + ringR * 0.8) * dpr)
      ctx.lineWidth = Math.max(2.5, ringR * 0.38)
      ctx.strokeStyle = metal(-ringR, -ringR, ringR, ringR)
      ctx.beginPath()
      ctx.arc(0, 0, ringR, 0, Math.PI * 2)
      ctx.stroke()
    }

    const place = () => {
      const T = pts[iT]
      const C = pts[iC]
      const swing = swingAngle(T, C)
      card.style.transform =
        "translate3d(" + (T.x - cw / 2).toFixed(2) + "px," + (T.y).toFixed(2) + "px,0) rotate(" + (-swing).toFixed(4) + "rad)"
      inner.style.transform = "perspective(1100px) rotateY(" + spin.a.toFixed(4) + "rad)"
      const edge = 1 - Math.abs(Math.cos(spin.a))
      inner.style.setProperty("--lyd-dim", (edge * 0.5).toFixed(3))
      inner.style.setProperty("--lyd-shine", (50 + Math.sin(spin.a) * 70 + swing * 90).toFixed(1) + "%")
    }

    type Drag = { id: number; ox: number; oy: number; tx: number; ty: number; sx: number; sy: number; moved: boolean }
    let drag: Drag | null = null
    const local = (e: PointerEvent) => {
      const r = root.getBoundingClientRect()
      return [e.clientX - r.left, e.clientY - r.top]
    }
    const flip = () => {
      spinTarget = spinTarget === 0 ? Math.PI : 0
      setShowBack(spinTarget !== 0)
    }
    flipRef.current = flip
    const onDown = (e: PointerEvent) => {
      if (e.button > 0) return
      const [x, y] = local(e)
      const T = pts[iT]
      drag = { id: e.pointerId, ox: T.x - x, oy: T.y - y, tx: T.x, ty: T.y, sx: x, sy: y, moved: false }
      pts[iT].w = 0
      card.setPointerCapture(e.pointerId)
      card.style.cursor = "grabbing"
    }
    const onMove = (e: PointerEvent) => {
      if (!drag || e.pointerId !== drag.id) return
      const [x, y] = local(e)
      drag.tx = x + drag.ox
      drag.ty = y + drag.oy
      if (Math.hypot(x - drag.sx, y - drag.sy) > 5) drag.moved = true
    }
    const onUp = (e: PointerEvent) => {
      if (!drag || e.pointerId !== drag.id) return
      if (!drag.moved) flip()
      drag = null
      pts[iT].w = 0.8
      card.style.cursor = "grab"
    }
    card.addEventListener("pointerdown", onDown)
    card.addEventListener("pointermove", onMove)
    card.addEventListener("pointerup", onUp)
    card.addEventListener("pointercancel", onUp)

    let raf = 0
    let acc = 0
    let last = performance.now()
    let t = 0
    const tick = (now: number) => {
      acc += Math.min(0.05, (now - last) / 1000)
      last = now
      let steps = 0
      while (acc >= STEP && steps < 8) {
        acc -= STEP
        steps++
        t += STEP
        if (drag) {
          const T = pts[iT]
          T.px = T.x
          T.py = T.y
          T.x += (drag.tx - T.x) * 0.35
          T.y += (drag.ty - T.y) * 0.35
        }
        const C = pts[iC]
        if (!reduced && !drag) {
          C.x += (22 * Math.sin(t * 0.7) + 12 * Math.sin(t * 1.9)) * STEP * STEP
        }
        integrate(pts, STEP, GRAVITY, 0.992)
        solve(pts, links, ITER)
        const vx = (C.x - C.px) / STEP
        spinStep(spin, spinTarget, STEP, vx * 0.03 + (reduced ? 0 : 0.6 * Math.sin(t * 0.5)))
      }
      draw()
      place()
      raf = requestAnimationFrame(tick)
    }
    build()
    draw()
    place()
    raf = requestAnimationFrame(tick)

    const observer = new ResizeObserver(() => {
      if (Math.abs(root.clientWidth - W) < 1 && Math.abs(root.clientHeight - H) < 1) return
      build()
      draw()
      place()
    })
    observer.observe(root)

    return () => {
      cancelAnimationFrame(raf)
      observer.disconnect()
      card.removeEventListener("pointerdown", onDown)
      card.removeEventListener("pointermove", onMove)
      card.removeEventListener("pointerup", onUp)
      card.removeEventListener("pointercancel", onUp)
    }
  }, [reduced, cw, ch, ringR, clipH, lookKey])

  const face: React.CSSProperties = {
    position: "absolute",
    inset: 0,
    borderRadius: cw * 0.06,
    overflow: "hidden",
    backfaceVisibility: "hidden",
    WebkitBackfaceVisibility: "hidden",
    boxShadow: "0 18px 40px -12px rgba(0,0,0,0.45), 0 2px 6px rgba(0,0,0,0.2)",
    border: "1px solid rgba(212,175,55,0.4)",
    backgroundColor: cardColor,
    userSelect: "none",
    WebkitUserSelect: "none",
  }
  const shade = (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        background:
          "linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.28) 50%, transparent 65%) var(--lyd-shine, 50%) 0 / 250% 100% no-repeat, rgba(0,0,0,var(--lyd-dim, 0))",
      }}
    />
  )
  const s = cw / 240

  const defaultFront = (
    <div className="relative h-full w-full select-none" style={{ color: inkColor }}>
      <div style={{ position: "absolute", top: "35px", left: "50%", transform: "translateX(-50%)", width: 140 * s, height: 75 * s, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <img 
          src="/haast-custom-logo.webp" width={640} height={366} decoding="async" 
          alt="Haast Logo" 
          style={{ width: "100%", height: "100%", objectFit: "contain", objectPosition: "center", filter: "drop-shadow(0 4px 10px rgba(0,0,0,0.85))" }} 
        />
      </div>

      <div style={{ position: "absolute", bottom: "35px", left: "50%", transform: "translateX(-50%)", width: "100%", textAlign: "center", padding: "0 10px" }}>
        <div style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: 16.5 * s, lineHeight: 1.3, textTransform: "uppercase", letterSpacing: "0.08em", color: "#d4af37", marginBottom: "8px" }}>
          {title}
        </div>
        <div style={{ fontSize: 9 * s, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)" }}>
          {subtitle}
        </div>
      </div>
    </div>
  )

  const defaultBack = (
    <div className="relative h-full w-full select-none" style={{ color: inkColor }}>
      <div style={{ position: "absolute", top: "35px", left: "50%", transform: "translateX(-50%)", width: 130 * s, height: 65 * s, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <img 
          src="/haast-custom-logo.webp" width={640} height={366} decoding="async" 
          alt="Haast Logo" 
          style={{ width: "100%", height: "100%", objectFit: "contain", objectPosition: "center", filter: "drop-shadow(0 4px 10px rgba(0,0,0,0.85))" }} 
        />
      </div>

      <div style={{ position: "absolute", bottom: "30px", left: "50%", transform: "translateX(-50%)", width: "100%", textAlign: "center", padding: "0 10px" }}>
        <div style={{ fontFamily: DISPLAY, fontWeight: 700, fontSize: 16.5 * s, lineHeight: 1.3, textTransform: "uppercase", color: "#ffffff", marginBottom: "8px", letterSpacing: "0.05em" }}>
          {name}
        </div>
        <div style={{ fontSize: 9 * s, letterSpacing: "0.18em", textTransform: "uppercase", color: "#d4af37", marginBottom: "12px", fontWeight: "600" }}>
          {role}
        </div>
        <div style={{ width: "40px", height: "1px", background: "rgba(212,175,55,0.4)", margin: "0 auto 12px auto" }} />
        <div style={{ fontSize: 8 * s, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)" }}>
          HAAST SOLUTION
        </div>
      </div>
    </div>
  )

  return (
    <section
      ref={rootRef}
      className={"relative w-full overflow-hidden select-none " + className}
      style={{ height }}
    >
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", maxWidth: "none", display: "block", pointerEvents: "none" }}
      />
      <div
        ref={cardRef}
        role="button"
        tabIndex={0}
        aria-label="Badge. Drag to swing, press to flip."
        onKeyDown={(e) => {
          if (e.key === "Enter") flipRef.current()
        }}
        aria-pressed={showBack}
        className="absolute left-0 top-0 outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] select-none"
        style={{ width: cw, height: ch, transformOrigin: "50% 0", cursor: "grab", touchAction: "none", willChange: "transform" }}
      >
        <div
          ref={innerRef}
          style={{ position: "absolute", left: 0, right: 0, top: 0, height: ch, transformStyle: "preserve-3d" }}
        >
          <div style={face}>
            {front ?? defaultFront}
            {shade}
          </div>
          <div style={{ ...face, transform: "rotateY(180deg)" }}>
            {back ?? defaultBack}
            {shade}
          </div>
        </div>
      </div>
    </section>
  )
}