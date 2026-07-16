import type { CSSProperties } from 'react'

export const editableRootStyle = {
  '--slot4-page-bg': '#f7f5f0', '--slot4-page-text': '#111111', '--slot4-panel-bg': '#ebe8e0',
  '--slot4-surface-bg': '#fffefa', '--slot4-muted-text': '#696760', '--slot4-soft-muted-text': '#98958d',
  '--slot4-accent': '#111111', '--slot4-accent-fill': '#111111', '--slot4-accent-soft': '#e5e1d7',
  '--slot4-on-accent': '#fffefa', '--slot4-dark-bg': '#111111', '--slot4-dark-text': '#fffefa',
  '--slot4-media-bg': '#dedbd2', '--slot4-cream': '#f7f5f0', '--slot4-warm': '#ebe8e0', '--slot4-lavender': '#e9e6de', '--slot4-gray': '#f0eee8',
  '--slot4-body-gradient': 'none', '--editable-page-bg': '#f7f5f0', '--editable-page-text': '#111111',
  '--editable-container': '1380px', '--editable-border': '#11111126', '--editable-nav-bg': '#f7f5f0', '--editable-nav-text': '#111111',
  '--editable-nav-active': '#111111', '--editable-nav-active-text': '#fffefa', '--editable-cta-bg': '#111111', '--editable-cta-text': '#fffefa',
  '--editable-search-bg': '#f7f5f0', '--editable-footer-bg': '#111111', '--editable-footer-text': '#fffefa',
} as CSSProperties

export const editablePalette = {
  pageBg: 'bg-[var(--slot4-page-bg)]', pageText: 'text-[var(--slot4-page-text)]', panelBg: 'bg-[var(--slot4-panel-bg)]', panelText: 'text-[var(--slot4-page-text)]', surfaceBg: 'bg-[var(--slot4-surface-bg)]', surfaceText: 'text-[var(--slot4-page-text)]', mutedText: 'text-[var(--slot4-muted-text)]', softMutedText: 'text-[var(--slot4-soft-muted-text)]', accentText: 'text-[var(--slot4-accent)]', accentBg: 'bg-[var(--slot4-accent-fill)]', accentSoftBg: 'bg-[var(--slot4-accent-soft)]', accentSoftText: 'text-[var(--slot4-accent-soft)]', onAccentText: 'text-[var(--slot4-on-accent)]', darkBg: 'bg-[var(--slot4-dark-bg)]', darkText: 'text-[var(--slot4-dark-text)]', mediaBg: 'bg-[var(--slot4-media-bg)]', creamBg: 'bg-[var(--slot4-cream)]', warmBg: 'bg-[var(--slot4-warm)]', lavenderBg: 'bg-[var(--slot4-lavender)]', grayBg: 'bg-[var(--slot4-gray)]', border: 'border-[var(--editable-border)]', darkBorder: 'border-white/20', shadow: '', shadowStrong: '', overlay: 'bg-black/45',
} as const

export const editableDesignContract = {
  shell: { page: `min-h-screen ${editablePalette.pageBg} ${editablePalette.pageText}`, section: 'mx-auto w-full max-w-[var(--editable-container)] px-5 sm:px-8 lg:px-10', sectionY: 'py-16 sm:py-20 lg:py-28' },
  layout: { safeGrid: 'grid gap-px bg-[var(--editable-border)] md:grid-cols-2 xl:grid-cols-3', featureGrid: 'grid gap-12 lg:grid-cols-2 lg:items-center', rail: 'flex snap-x gap-5 overflow-x-auto pb-4', minRailCard: 'w-[250px] shrink-0 snap-start' },
  type: { eyebrow: 'text-[10px] font-bold uppercase tracking-[0.22em]', heroTitle: 'text-5xl font-semibold leading-[.93] tracking-[-.055em] sm:text-6xl lg:text-8xl', sectionTitle: 'text-4xl font-semibold leading-[.98] tracking-[-.045em] sm:text-5xl', body: 'text-base leading-relaxed' },
  surface: { card: `border ${editablePalette.border} ${editablePalette.surfaceBg}`, soft: `border ${editablePalette.border} ${editablePalette.panelBg}`, dark: `${editablePalette.darkBg} ${editablePalette.darkText}` },
  button: { primary: 'inline-flex items-center justify-center gap-2 rounded-none bg-[var(--editable-cta-bg)] px-6 py-3 text-xs font-bold uppercase tracking-[.14em] text-[var(--editable-cta-text)] transition hover:bg-[var(--slot4-muted-text)]', secondary: 'inline-flex items-center justify-center gap-2 rounded-none border border-[var(--editable-border)] px-6 py-3 text-xs font-bold uppercase tracking-[.14em] transition hover:bg-[var(--slot4-page-text)] hover:text-[var(--slot4-on-accent)]', accent: 'inline-flex items-center justify-center gap-2 rounded-none bg-[var(--slot4-accent-fill)] px-6 py-3 text-xs font-bold uppercase tracking-[.14em] text-[var(--slot4-on-accent)]' },
  media: { frame: `relative overflow-hidden ${editablePalette.mediaBg}`, ratio: 'aspect-[4/5]' }, motion: { lift: 'transition duration-500 hover:-translate-y-1', fade: 'transition duration-300 hover:opacity-70' },
} as const

export const aiLayoutRules = ['Use the editorial palette in editableRootStyle.', 'Keep discovery centered on collections and resources.', 'Use real posts and postHref for every collection card.'] as const
