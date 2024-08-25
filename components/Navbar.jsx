import { UserButton } from '@stackframe/stack'
import Link from 'next/link'
const Navbar = () => {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
    <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
        <Link href="/">
      <div className="flex gap-4 items-center pr-5"> 
          <h2 className="h2 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60">
              Climaton
          </h2>
      </div>
        </Link>
      <div className="flex justify-end">
        <UserButton/>
      </div>
    </nav>
  </header>
)
}

export default Navbar