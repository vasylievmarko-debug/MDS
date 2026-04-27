import { useState, useRef, useEffect } from 'react'
import type { Meta } from '@storybook/react'

const meta: Meta = {
  title: 'Токены/Цвета',
  parameters: { layout: 'padded' },
}
export default meta

// ─── Primitives ───────────────────────────────────────────────────────────────

const palettes: Record<string, { step: string; var: string }[]> = {
  'Neutral': [
    { step: '0',   var: '--mds-neutral-0' },
    { step: '50',  var: '--mds-neutral-50' },
    { step: '100', var: '--mds-neutral-100' },
    { step: '150', var: '--mds-neutral-150' },
    { step: '200', var: '--mds-neutral-200' },
    { step: '250', var: '--mds-neutral-250' },
    { step: '300', var: '--mds-neutral-300' },
    { step: '350', var: '--mds-neutral-350' },
    { step: '400', var: '--mds-neutral-400' },
    { step: '450', var: '--mds-neutral-450' },
    { step: '500', var: '--mds-neutral-500' },
    { step: '550', var: '--mds-neutral-550' },
    { step: '600', var: '--mds-neutral-600' },
    { step: '650', var: '--mds-neutral-650' },
    { step: '700', var: '--mds-neutral-700' },
    { step: '750', var: '--mds-neutral-750' },
    { step: '800', var: '--mds-neutral-800' },
    { step: '850', var: '--mds-neutral-850' },
    { step: '900', var: '--mds-neutral-900' },
    { step: '950', var: '--mds-neutral-950' },
  ],
  'Purple (Brand)': [
    { step: '100', var: '--mds-purple-100' },
    { step: '200', var: '--mds-purple-200' },
    { step: '300', var: '--mds-purple-300' },
    { step: '400', var: '--mds-purple-400' },
    { step: '500', var: '--mds-purple-500' },
    { step: '600', var: '--mds-purple-600' },
    { step: '700', var: '--mds-purple-700' },
    { step: '800', var: '--mds-purple-800' },
    { step: '900', var: '--mds-purple-900' },
  ],
  'Red (Danger)': [
    { step: '100', var: '--mds-red-100' },
    { step: '200', var: '--mds-red-200' },
    { step: '300', var: '--mds-red-300' },
    { step: '400', var: '--mds-red-400' },
    { step: '500', var: '--mds-red-500' },
    { step: '600', var: '--mds-red-600' },
    { step: '700', var: '--mds-red-700' },
    { step: '800', var: '--mds-red-800' },
    { step: '900', var: '--mds-red-900' },
  ],
  'Yellow (Warning)': [
    { step: '100', var: '--mds-yellow-100' },
    { step: '200', var: '--mds-yellow-200' },
    { step: '300', var: '--mds-yellow-300' },
    { step: '400', var: '--mds-yellow-400' },
    { step: '500', var: '--mds-yellow-500' },
    { step: '600', var: '--mds-yellow-600' },
    { step: '700', var: '--mds-yellow-700' },
    { step: '800', var: '--mds-yellow-800' },
    { step: '900', var: '--mds-yellow-900' },
  ],
  'Green (Success)': [
    { step: '100', var: '--mds-green-100' },
    { step: '200', var: '--mds-green-200' },
    { step: '300', var: '--mds-green-300' },
    { step: '400', var: '--mds-green-400' },
    { step: '500', var: '--mds-green-500' },
    { step: '600', var: '--mds-green-600' },
    { step: '700', var: '--mds-green-700' },
    { step: '800', var: '--mds-green-800' },
    { step: '900', var: '--mds-green-900' },
  ],
}

// ─── Semantic tokens (all groups matching Figma Color Theme) ─────────────────

const semanticGroups: {
  title: string
  tokens: { token: string; label: string; alias: string }[]
}[] = [
  {
    title: 'Background',
    tokens: [
      { token: '--mds-bg-page-1', label: 'Page 1',  alias: 'Neutral/50 → 950' },
      { token: '--mds-bg-page-2', label: 'Page 2',  alias: 'Neutral/100 → 900' },
    ],
  },
  {
    title: 'Surface',
    tokens: [
      { token: '--mds-surface-1', label: 'Surface 1', alias: 'Neutral/0 → 850' },
      { token: '--mds-surface-2', label: 'Surface 2', alias: 'Neutral/100 → 800' },
      { token: '--mds-surface-3', label: 'Surface 3', alias: 'Neutral/150 → 750' },
      { token: '--mds-surface-4', label: 'Surface 4', alias: 'Neutral/200 → 700' },
    ],
  },
  {
    title: 'Brand',
    tokens: [
      { token: '--mds-brand-base',   label: 'Base',   alias: 'Purple/500' },
      { token: '--mds-brand-strong', label: 'Strong', alias: 'Purple/600' },
    ],
  },
  {
    title: 'Danger',
    tokens: [
      { token: '--mds-danger-base',   label: 'Base',   alias: 'Red/500' },
      { token: '--mds-danger-strong', label: 'Strong', alias: 'Red/700 → 300' },
    ],
  },
  {
    title: 'Warning',
    tokens: [
      { token: '--mds-warning-base',   label: 'Base',   alias: 'Yellow/500' },
      { token: '--mds-warning-strong', label: 'Strong', alias: 'Yellow/700 → 300' },
    ],
  },
  {
    title: 'Success',
    tokens: [
      { token: '--mds-success-base',   label: 'Base',   alias: 'Green/500' },
      { token: '--mds-success-strong', label: 'Strong', alias: 'Green/700 → 300' },
    ],
  },
  {
    title: 'Text',
    tokens: [
      { token: '--mds-text-primary',   label: 'Primary',   alias: 'Neutral/900 → 100' },
      { token: '--mds-text-secondary', label: 'Secondary', alias: 'Neutral/600 → 400' },
      { token: '--mds-text-accent',    label: 'Accent',    alias: '{Brand.Strong}' },
      { token: '--mds-text-danger',    label: 'Danger',    alias: '{Danger.Strong}' },
      { token: '--mds-text-warning',   label: 'Warning',   alias: '{Warning.Strong}' },
      { token: '--mds-text-success',   label: 'Success',   alias: '{Success.Strong}' },
      { token: '--mds-text-white',     label: 'White',     alias: 'Neutral/0' },
      { token: '--mds-text-dark',      label: 'Dark',      alias: 'Neutral/950' },
    ],
  },
  {
    title: 'Stroke',
    tokens: [
      { token: '--mds-stroke-default',            label: 'Default',            alias: 'Neutral/200 → 700' },
      { token: '--mds-stroke-strong',             label: 'Strong',             alias: 'Neutral/300' },
      { token: '--mds-stroke-interactive',        label: 'Interactive',        alias: 'Neutral/550 → 450' },
      { token: '--mds-stroke-interactive-strong', label: 'Interactive Strong', alias: 'Neutral/650 → 350' },
      { token: '--mds-stroke-interactive-max',    label: 'Interactive Max',    alias: 'Neutral/800 → 250' },
      { token: '--mds-stroke-focus',              label: 'Focus',              alias: '{Brand.Strong}' },
      { token: '--mds-stroke-accent',             label: 'Accent',             alias: '{Brand.Strong}' },
      { token: '--mds-stroke-danger',             label: 'Danger',             alias: '{Danger.Strong}' },
      { token: '--mds-stroke-warning',            label: 'Warning',            alias: '{Warning.Strong}' },
      { token: '--mds-stroke-success',            label: 'Success',            alias: '{Success.Strong}' },
    ],
  },
  {
    title: 'Fill / Neutral',
    tokens: [
      { token: '--mds-fill-neutral-0', label: 'Neutral 0', alias: 'Neutral/0 → 800' },
      { token: '--mds-fill-neutral-1', label: 'Neutral 1', alias: 'Neutral/100 → 800' },
      { token: '--mds-fill-neutral-2', label: 'Neutral 2', alias: 'Neutral/150 → 750' },
      { token: '--mds-fill-neutral-3', label: 'Neutral 3', alias: 'Neutral/200 → 700' },
      { token: '--mds-fill-neutral-4', label: 'Neutral 4', alias: 'Neutral/300 → 600' },
      { token: '--mds-fill-neutral-5', label: 'Neutral 5', alias: 'Neutral/400 → 500' },
      { token: '--mds-fill-neutral-6', label: 'Neutral 6', alias: 'Neutral/500 → 400' },
      { token: '--mds-fill-neutral-7', label: 'Neutral 7', alias: 'Neutral/600 → 300' },
      { token: '--mds-fill-neutral-8', label: 'Neutral 8', alias: 'Neutral/700 → 200' },
    ],
  },
  {
    title: 'Fill / Status',
    tokens: [
      { token: '--mds-fill-danger',         label: 'Danger',         alias: '{Danger.Base}' },
      { token: '--mds-fill-danger-subtle',  label: 'Danger Subtle',  alias: 'Red/200 → 900' },
      { token: '--mds-fill-warning',        label: 'Warning',        alias: '{Warning.Base}' },
      { token: '--mds-fill-warning-subtle', label: 'Warning Subtle', alias: 'Yellow/200 → 900' },
      { token: '--mds-fill-success',        label: 'Success',        alias: '{Success.Base}' },
      { token: '--mds-fill-success-subtle', label: 'Success Subtle', alias: 'Green/100 → 900' },
      { token: '--mds-fill-accent',         label: 'Accent',         alias: '{Brand.Base}' },
      { token: '--mds-fill-accent-subtle',  label: 'Accent Subtle',  alias: 'Purple/100 → 900' },
    ],
  },
  {
    title: 'Special',
    tokens: [
      { token: '--mds-hover',   label: 'Hover',   alias: 'rgba(0,0,0,0.05)' },
      { token: '--mds-overlay', label: 'Overlay', alias: 'rgba(26,26,36,0.10)' },
    ],
  },
]

// ─── Shared helpers ───────────────────────────────────────────────────────────

function useResolvedColor(cssVar: string, theme: string) {
  const [hex, setHex] = useState('')
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const val = getComputedStyle(ref.current)
      .getPropertyValue(cssVar)
      .trim()
    setHex(val || cssVar)
  }, [cssVar, theme])

  return { hex, ref }
}

function isLightColor(cssColor: string): boolean {
  const match = cssColor.match(/#([0-9a-f]{6})/i)
  if (!match) return true
  const r = parseInt(match[1].slice(0, 2), 16)
  const g = parseInt(match[1].slice(2, 4), 16)
  const b = parseInt(match[1].slice(4, 6), 16)
  return (r * 299 + g * 587 + b * 114) / 1000 > 128
}

// ─── Primitive swatch (uses CSS vars directly) ────────────────────────────────

function PrimitiveSwatch({ cssVar, label }: { cssVar: string; label: string }) {
  const [hex, setHex] = useState('')
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    setHex(getComputedStyle(ref.current).getPropertyValue(cssVar).trim())
  }, [cssVar])

  const light = isLightColor(hex)

  return (
    <div ref={ref} style={{ borderRadius: 8, overflow: 'hidden', border: '1px solid var(--mds-stroke-default)' }}>
      <div style={{
        background: `var(${cssVar})`,
        height: 64,
        display: 'flex',
        alignItems: 'flex-end',
        padding: '6px 8px',
      }}>
        <span style={{ fontSize: 11, fontWeight: 700, color: light ? '#12121A99' : '#FFFFFF99' }}>
          {hex.toUpperCase()}
        </span>
      </div>
      <div style={{ padding: '6px 8px', background: 'var(--mds-surface-1)' }}>
        <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--mds-text-primary)' }}>{label}</div>
        <div style={{ fontSize: 10, color: 'var(--mds-text-secondary)', marginTop: 2, wordBreak: 'break-all' }}>{cssVar}</div>
      </div>
    </div>
  )
}

// ─── Semantic swatch (reads live CSS var from scoped element) ─────────────────

function SemanticSwatch({
  token, label, alias, theme,
}: { token: string; label: string; alias: string; theme: string }) {
  const { hex, ref } = useResolvedColor(token, theme)
  const light = isLightColor(hex)

  return (
    <div ref={ref} style={{ borderRadius: 8, overflow: 'hidden', border: '1px solid var(--mds-stroke-default)' }}>
      <div style={{
        background: `var(${token})`,
        height: 64,
        display: 'flex',
        alignItems: 'flex-end',
        padding: '6px 8px',
      }}>
        <span style={{ fontSize: 11, fontWeight: 700, color: light ? '#12121A99' : '#FFFFFF99' }}>
          {hex.toUpperCase() || '…'}
        </span>
      </div>
      <div style={{ padding: '6px 8px', background: 'var(--mds-surface-1)' }}>
        <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--mds-text-primary)', lineHeight: '18px' }}>
          {label}
        </div>
        <div style={{ fontSize: 10, color: 'var(--mds-text-secondary)', marginTop: 1, wordBreak: 'break-all' }}>
          {token}
        </div>
        <div style={{
          fontSize: 10, color: 'var(--mds-brand-base)',
          marginTop: 3, fontStyle: 'italic',
        }}>
          {alias}
        </div>
      </div>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 40 }}>
      <h2 style={{
        fontSize: 16, fontWeight: 700, color: 'var(--mds-text-primary)',
        margin: '0 0 12px', borderBottom: '1px solid var(--mds-stroke-default)', paddingBottom: 10,
      }}>
        {title}
      </h2>
      {children}
    </div>
  )
}

function ColorGrid({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: 10 }}>
      {children}
    </div>
  )
}

// ─── Stories ──────────────────────────────────────────────────────────────────

export const Примитивы = () => (
  <div>
    {Object.entries(palettes).map(([name, swatches]) => (
      <Section key={name} title={name}>
        <ColorGrid>
          {swatches.map(({ step, var: cssVar }) => (
            <PrimitiveSwatch key={step} cssVar={cssVar} label={step} />
          ))}
        </ColorGrid>
      </Section>
    ))}
  </div>
)

export const Семантические = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  return (
    <div data-theme={theme}>
      {/* Theme toggle */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        marginBottom: 32,
        padding: '12px 16px',
        background: 'var(--mds-surface-2)',
        borderRadius: 8,
        border: '1px solid var(--mds-stroke-default)',
      }}>
        <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--mds-text-primary)' }}>
          Тема:
        </span>
        {(['light', 'dark'] as const).map(t => (
          <button
            key={t}
            onClick={() => setTheme(t)}
            style={{
              padding: '6px 16px',
              borderRadius: 6,
              border: theme === t ? '2px solid var(--mds-brand-base)' : '1px solid var(--mds-stroke-default)',
              background: theme === t ? 'var(--mds-fill-accent-subtle)' : 'var(--mds-surface-1)',
              color: theme === t ? 'var(--mds-brand-strong)' : 'var(--mds-text-secondary)',
              fontWeight: theme === t ? 700 : 400,
              fontSize: 13,
              cursor: 'pointer',
              fontFamily: 'inherit',
            }}
          >
            {t === 'light' ? '☀️ Light' : '🌙 Dark'}
          </button>
        ))}
        <span style={{ fontSize: 12, color: 'var(--mds-text-secondary)', marginLeft: 'auto' }}>
          Переключай тему и сравнивай с Figma Color Theme
        </span>
      </div>

      {semanticGroups.map(({ title, tokens }) => (
        <Section key={title} title={title}>
          <ColorGrid>
            {tokens.map(({ token, label, alias }) => (
              <SemanticSwatch
                key={token}
                token={token}
                label={label}
                alias={alias}
                theme={theme}
              />
            ))}
          </ColorGrid>
        </Section>
      ))}
    </div>
  )
}
