'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Menu, Search, X } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

export function EditableNavbar() {
  const [open, setOpen] = useState(false); const { session, logout } = useEditableLocalAuthSession()
  const links = [{ label: 'About', href: '/about' }, { label: 'Contact', href: '/contact' }]
  return <header className="sticky top-0 z-50 border-b border-[var(--editable-border)] bg-[var(--editable-nav-bg)]/95 backdrop-blur">
    <nav className="mx-auto grid min-h-[76px] max-w-[var(--editable-container)] grid-cols-[1fr_auto_1fr] items-center px-5 sm:px-8 lg:px-10">
      <div className="hidden items-center gap-6 md:flex">{links.map(link => <Link key={link.href} href={link.href} className="text-[10px] font-bold uppercase tracking-[.18em] hover:opacity-55">{link.label}</Link>)}</div>
      <Link href="/" className="editable-display text-center text-2xl font-bold tracking-[-.07em] sm:text-3xl">{SITE_CONFIG.name}</Link>
      <div className="ml-auto flex items-center gap-4"><Link href="/search" aria-label="Search" className="p-2 hover:opacity-55"><Search className="h-4 w-4" /></Link><div className="hidden items-center gap-4 sm:flex">{session ? <><Link href="/create" className="text-[10px] font-bold uppercase tracking-[.18em]">Submit</Link><button onClick={logout} className="text-[10px] font-bold uppercase tracking-[.18em] opacity-60">Log out</button></> : <><Link href="/login" className="text-[10px] font-bold uppercase tracking-[.18em]">Log in</Link><Link href="/signup" className="border border-black px-3 py-2 text-[10px] font-bold uppercase tracking-[.14em]">Join</Link></>}</div><button onClick={() => setOpen(!open)} className="p-2 md:hidden" aria-label="Menu">{open ? <X className="h-5 w-5"/> : <Menu className="h-5 w-5"/>}</button></div>
    </nav>
    {open ? <div className="border-t border-[var(--editable-border)] px-5 py-4 md:hidden"><div className="grid gap-4">{links.map(link => <Link key={link.href} onClick={()=>setOpen(false)} href={link.href} className="text-xs font-bold uppercase tracking-[.18em]">{link.label}</Link>)}{session ? <><Link href="/create" className="text-xs font-bold uppercase tracking-[.18em]">Submit</Link><button onClick={logout} className="text-left text-xs font-bold uppercase tracking-[.18em]">Log out</button></> : <><Link href="/login" className="text-xs font-bold uppercase tracking-[.18em]">Log in</Link><Link href="/signup" className="text-xs font-bold uppercase tracking-[.18em]">Join</Link></>}</div></div> : null}
  </header>
}
