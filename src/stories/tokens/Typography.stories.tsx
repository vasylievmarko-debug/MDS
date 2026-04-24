import type { Meta } from '@storybook/react'

const meta: Meta = {
  title: 'Токены/Типографика',
  parameters: { layout: 'padded' },
}
export default meta

interface TypeStyle {
  name: string
  tag: keyof React.JSX.IntrinsicElements
  fontSize: number
  lineHeight: number
  fontWeight: 400 | 600 | 700
  sample: string
}

const headings: TypeStyle[] = [
  { name: 'H1 — Heading', tag: 'h1', fontSize: 32, lineHeight: 48, fontWeight: 700, sample: 'Заголовок первого уровня' },
  { name: 'H2 — Heading', tag: 'h2', fontSize: 24, lineHeight: 36, fontWeight: 700, sample: 'Заголовок второго уровня' },
  { name: 'H3 — Heading', tag: 'h3', fontSize: 20, lineHeight: 28, fontWeight: 700, sample: 'Заголовок третьего уровня' },
  { name: 'H4 — Heading', tag: 'h4', fontSize: 16, lineHeight: 24, fontWeight: 700, sample: 'Заголовок четвёртого уровня' },
]

interface BodyGroup {
  group: string
  fontSize: number
  lineHeight: number
  token: string
  variants: { name: string; fontWeight: 400 | 600 | 700; style?: 'italic'; decoration?: string }[]
}

const bodyGroups: BodyGroup[] = [
  {
    group: 'Large Paragraph',
    fontSize: 18,
    lineHeight: 28,
    token: '--mds-font-size-lg / --mds-line-height-28',
    variants: [
      { name: 'Regular',    fontWeight: 400 },
      { name: 'Strong',     fontWeight: 600 },
      { name: 'Heavy',      fontWeight: 700 },
      { name: 'Italic',     fontWeight: 400, style: 'italic' },
      { name: 'Underline',  fontWeight: 400, decoration: 'underline' },
    ],
  },
  {
    group: 'Paragraph',
    fontSize: 16,
    lineHeight: 24,
    token: '--mds-font-size-base / --mds-line-height-24',
    variants: [
      { name: 'Regular',    fontWeight: 400 },
      { name: 'Strong',     fontWeight: 600 },
      { name: 'Heavy',      fontWeight: 700 },
      { name: 'Italic',     fontWeight: 400, style: 'italic' },
      { name: 'Underline',  fontWeight: 400, decoration: 'underline' },
    ],
  },
  {
    group: 'Small Caption',
    fontSize: 14,
    lineHeight: 20,
    token: '--mds-font-size-md / --mds-line-height-20',
    variants: [
      { name: 'Regular',    fontWeight: 400 },
      { name: 'Strong',     fontWeight: 600 },
      { name: 'Heavy',      fontWeight: 700 },
      { name: 'Italic',     fontWeight: 400, style: 'italic' },
      { name: 'Underline',  fontWeight: 400, decoration: 'underline' },
    ],
  },
  {
    group: 'Extra Small Caption',
    fontSize: 12,
    lineHeight: 16,
    token: '--mds-font-size-sm / --mds-line-height-16',
    variants: [
      { name: 'Regular',    fontWeight: 400 },
      { name: 'Strong',     fontWeight: 600 },
      { name: 'Heavy',      fontWeight: 700 },
      { name: 'Italic',     fontWeight: 400, style: 'italic' },
      { name: 'Underline',  fontWeight: 400, decoration: 'underline' },
    ],
  },
]

const fontSizes = [
  { name: 'xs',   px: 10, token: '--mds-font-size-xs' },
  { name: 'sm',   px: 12, token: '--mds-font-size-sm' },
  { name: 'md',   px: 14, token: '--mds-font-size-md' },
  { name: 'base', px: 16, token: '--mds-font-size-base' },
  { name: 'lg',   px: 20, token: '--mds-font-size-lg' },
  { name: 'xl',   px: 24, token: '--mds-font-size-xl' },
  { name: '2xl',  px: 32, token: '--mds-font-size-2xl' },
  { name: '3xl',  px: 40, token: '--mds-font-size-3xl' },
  { name: '4xl',  px: 48, token: '--mds-font-size-4xl' },
]

const base: React.CSSProperties = {
  fontFamily: "'Open Sans', system-ui, sans-serif",
  color: '#12121A',
  margin: 0,
}

function Meta({ size, lh, token }: { size: number; lh: number; token: string }) {
  return (
    <div style={{ display: 'flex', gap: 16, marginBottom: 4 }}>
      <span style={{ fontSize: 11, color: '#7C7C94', fontFamily: "'Open Sans', system-ui, sans-serif" }}>
        {size}px / {lh}px
      </span>
      <code style={{ fontSize: 11, color: '#7B52E0', background: '#F0EEFF', padding: '1px 6px', borderRadius: 4 }}>
        {token}
      </code>
    </div>
  )
}

function Divider() {
  return <hr style={{ border: 'none', borderTop: '1px solid #E4E4EC', margin: '32px 0' }} />
}

export const Заголовки = () => (
  <div style={{ ...base, maxWidth: 800 }}>
    <p style={{ fontSize: 14, color: '#565668', marginBottom: 32, lineHeight: '20px' }}>
      Шрифт: <strong>Open Sans</strong>. Все заголовки — SemiBold/Bold.
    </p>
    {headings.map(({ name, tag: Tag, fontSize, lineHeight, fontWeight, sample }) => (
      <div key={name} style={{ marginBottom: 32 }}>
        <Meta size={fontSize} lh={lineHeight} token={`--mds-font-size-${fontSize <= 16 ? 'base' : fontSize === 20 ? 'lg' : fontSize === 24 ? 'xl' : '2xl'}`} />
        <Tag style={{ ...base, fontSize, lineHeight: `${lineHeight}px`, fontWeight }}>
          {sample}
        </Tag>
        <div style={{ fontSize: 11, color: '#9090A8', marginTop: 4, fontFamily: "'Open Sans', system-ui" }}>
          {name} · {fontWeight} · {fontSize}/{lineHeight}px
        </div>
      </div>
    ))}
  </div>
)

export const Текст = () => (
  <div style={{ ...base, maxWidth: 800 }}>
    <p style={{ fontSize: 14, color: '#565668', marginBottom: 32, lineHeight: '20px' }}>
      Стили параграфов для основного контента страниц.
    </p>
    {bodyGroups.map(({ group, fontSize, lineHeight, token, variants }) => (
      <div key={group} style={{ marginBottom: 40 }}>
        <h3 style={{ ...base, fontSize: 13, fontWeight: 600, color: '#7B52E0', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 16 }}>
          {group} · {fontSize}px
        </h3>
        <Meta size={fontSize} lh={lineHeight} token={token} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 12 }}>
          {variants.map(({ name, fontWeight, style, decoration }) => (
            <div key={name} style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
              <span style={{
                ...base,
                fontSize,
                lineHeight: `${lineHeight}px`,
                fontWeight,
                fontStyle: style,
                textDecoration: decoration,
                flex: 1,
              }}>
                Быстрая коричневая лиса перепрыгнула через ленивую собаку
              </span>
              <span style={{ fontSize: 11, color: '#9090A8', whiteSpace: 'nowrap', fontFamily: "'Open Sans', system-ui" }}>
                {name} · {fontWeight}
              </span>
            </div>
          ))}
        </div>
        <Divider />
      </div>
    ))}
  </div>
)

export const Шкала = () => (
  <div style={{ ...base, maxWidth: 800 }}>
    <p style={{ fontSize: 14, color: '#565668', marginBottom: 32, lineHeight: '20px' }}>
      Все доступные размеры шрифта в виде шкалы.
    </p>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      {fontSizes.map(({ name, px, token }) => (
        <div key={name} style={{ display: 'flex', alignItems: 'baseline', gap: 20, padding: '8px 0', borderBottom: '1px solid #F4F4F8' }}>
          <code style={{ fontSize: 12, color: '#7B52E0', background: '#F0EEFF', padding: '2px 8px', borderRadius: 4, minWidth: 160, fontFamily: 'monospace' }}>
            {token}
          </code>
          <span style={{ fontSize: 12, color: '#9090A8', minWidth: 40, fontFamily: "'Open Sans', system-ui" }}>{px}px</span>
          <span style={{ ...base, fontSize: px, fontWeight: 400, lineHeight: 1.2 }}>
            Open Sans
          </span>
        </div>
      ))}
    </div>
  </div>
)
