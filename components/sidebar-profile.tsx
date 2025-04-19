import { Avatar } from '@/components/avatar';
import { Link } from './link'

export function Profile() {
    return (<Link href="/settings">
        <div className="text-white cursor-pointer text-center gap-2.5 mt-4 transition-all duration-300 hover:-translate-y-1">
            {/* Profile Picture */}
            <Avatar className="size-24" initials="A" /> 
            <h2 className="mt-4 text-sm font-semibold">Ali K.</h2>
            <p className="text-sm text-zinc-400">ali@kokopelliakademi.com</p>
        </div>
    </Link>)
}

