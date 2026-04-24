import type { Meta } from '@storybook/react'

const meta: Meta = {
  title: 'Токены/Цвета',
  parameters: { layout: 'padded' },
}
export default meta

const palettes: Record<string, { step: string; hex: string }[]> = {
  'Neutral': [
    { step: '0',   hex: '#FFFFFF' },
    { step: '50',  hex: '#FAFAFC' },
    { step: '100', hex: '#F4F4F8' },
    { step: '150', hex: '#EDEDF3' },
    { step: '200', hex: '#E4E4EC' },
    { step: '250', hex: '#D8D8E4' },
    { step: '300', hex: '#CACAD8' },
    { step: '350', hex: '#B8B8CA' },
    { step: '400', hex: '#A5A5BA' },
    { step: '450', hex: '#9090A8' },
    { step: '500', hex: '#7C7C94' },
    { step: '550', hex: '#686880' },
    { step: '600', hex: '#565668' },
    { step: '650', hex: '#474758' },
    { step: '700', hex: '#393948' },
    { step: '750', hex: '#2E2E3C' },
    { step: '800', hex: '#242430' },
    { step: '850', hex: '#1A1A24' },
    { step: '900', hex: '#12121A' },
    { step: '950', hex: '#0A0A10' },
  ],
  'Purple (Brand)': [
    { step: '100', hex: '#F0EEFF' },
    { step: '200', hex: '#D9D1FF' },
    { step: '300', hex: '#B8A4F8' },
    { step: '400', hex: '#9478EF' },
    { step: '500', hex: '#7B52E0' },
    { step: '600', hex: '#6440CC' },
    { step: '700', hex: '#4E2FAA' },
    { step: '800', hex: '#3A2088' },
    { step: '900', hex: '#261266' },
  ],
  'Red (Danger)': [
    { step: '100', hex: '#FDECEA' },
    { step: '200', hex: '#FAB8B2' },
    { step: '300', hex: '#FF6B5E' },
    { step: '400', hex: '#E84035' },
    { step: '500', hex: '#D93025' },
    { step: '600', hex: '#B82018' },
    { step: '700', hex: '#A8201A' },
    { step: '800', hex: '#96150F' },
    { step: '900', hex: '#6E0C08' },
  ],
  'Yellow (Warning)': [
    { step: '100', hex: '#FEF6E0' },
    { step: '200', hex: '#FDE4A0' },
    { step: '300', hex: '#FFB020' },
    { step: '400', hex: '#E09500' },
    { step: '500', hex: '#C47200' },
    { step: '600', hex: '#A85E00' },
    { step: '700', hex: '#965500' },
    { step: '800', hex: '#8A4A00' },
    { step: '900', hex: '#6E3800' },
  ],
  'Green (Success)': [
    { step: '100', hex: '#E6F7EE' },
    { step: '200', hex: '#A8E8C8' },
    { step: '300', hex: '#3DD68C' },
    { step: '400', hex: '#28A85E' },
    { step: '500', hex: '#1A8A4A' },
    { step: '600', hex: '#157040' },
    { step: '700', hex: '#136635' },
    { step: '800', hex: '#105834' },
    { step: '900', hex: '#0A3E24' },
  ],
}

const semanticTokens: { token: string; hex: string; label: string }[] = [
  { token: '--mds-brand-base',    hex: '#7B52E0', label: 'Brand / Base' },
  { token: '--mds-brand-strong',  hex: '#6440CC', label: 'Brand / Strong' },
  { token: '--mds-danger-base',   hex: '#D93025', label: 'Danger / Base' },
  { token: '--mds-danger-strong', hex: '#A8201A', label: 'Danger / Strong' },
  { token: '--mds-warning-base',   hex: '#C47200', label: 'Warning / Base' },
  { token: '--mds-warning-strong', hex: '#965500', label: 'Warning / Strong' },
  { token: '--mds-success-base',   hex: '#1A8A4A', label: 'Success / Base' },
  { token: '--mds-success-strong', hex: '#136635', label: 'Success / Strong' },
  { token: '--mds-text-primary',   hex: '#12121A', label: 'Text / Primary' },
  { token: '--mds-text-secondary', hex: '#565668', label: 'Text / Secondary' },
  { token: '--mds-text-accent',    hex: '#6440CC', label: 'Text / Accent' },
  { token: '--mds-stroke-default', hex: '#E4E4EC', label: 'Stroke / Default' },
  { token: '--mds-stroke-focus',   hex: '#6440CC', label: 'Stroke / Focus' },
  { token: '--mds-bg-page-1',   hex: '#FAFAFC', label: 'Background / Page-1' },
  { token: '--mds-bg-page-2',   hex: '#F4F4F8', label: 'Background / Page-2' },
  { token: '--mds-surface-1',   hex: '#FFFFFF', label: 'Surface / 1' },
  { token: '--mds-surface-2',   hex: '#F4F4F8', label: 'Surface / 2' },
]

function isLight(hex: string): boolean {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return (r * 299 + g * 587 + b * 114) / 1000 > 128
}

function Swatch({ hex, label, sub }: { hex: string; label: string; sub?: string }) {
  const light = isLight(hex)
  return (
    <div style={{ borderRadius: 8, overflow: 'hidden', border: '1px solid #E4E4EC' }}>
      <div style={{
        background: hex,
        height: 72,
        display: 'flex',
        alignItems: 'flex-end',
        padding: '8px 10px',
      }}>
        <span style={{ fontSize: 12, fontWeight: 700, color: light ? '#12121A' : '#FFFFFF', opacity: 0.6 }}>
          {hex.toUpperCase()}
        </span>
      </div>
      <div style={{ padding: '8px 10px', background: '#FFFFFF' }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: '#12121A', lineHeight: '20px' }}>{label}</div>
        {sub && <div style={{ fontSize: 11, color: '#7C7C94', marginTop: 2 }}>{sub}</div>}
      </div>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 48 }}>
      <h2 style={{
        fontFamily: "'Open Sans', system-ui, sans-serif",
        fontSize: 20, fontWeight: 700, color: '#12121A',
        margin: '0 0 16px', borderBottom: '1px solid #E4E4EC', paddingBottom: 12,
      }}>
        {title}
      </h2>
      {children}
    </div>
  )
}

function ColorGrid({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', gap: 12 }}>
      {children}
    </div>
  )
}

export const Примитивы = () => (
  <div style={{ fontFamily: "'Open Sans', system-ui, sans-serif" }}>
    {Object.entries(palettes).map(([name, swatches]) => (
      <Section key={name} title={name}>
        <ColorGrid>
          {swatches.map(({ step, hex }) => (
            <Swatch key={step} hex={hex} label={step} />
          ))}
        </ColorGrid>
      </Section>
    ))}
  </div>
)

export const Семантические = () => (
  <div style={{ fontFamily: "'Open Sans', system-ui, sans-serif" }}>
    <p style={{ fontSize: 14, color: '#565668', marginBottom: 24, lineHeight: '20px' }}>
      Семантические токены — это псевдонимы для примитивов. Используй их в компонентах,
      а не сырые цвета. Они автоматически меняются в Dark теме.
    </p>
    <Section title="Light Theme">
      <ColorGrid>
        {semanticTokens.map(({ token, hex, label }) => (
          <Swatch key={token} hex={hex} label={label} sub={token} />
        ))}
      </ColorGrid>
    </Section>
  </div>
)
