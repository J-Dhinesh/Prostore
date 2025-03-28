import { Button } from "@/components/ui/button";
import { UserIcon } from "lucide-react";
import Link from "next/link";
import { auth } from "@/auth";
import { DropdownMenu,DropdownMenuContent,DropdownMenuItem,DropdownMenuLabel,DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { signOutUser } from "@/lib/actions/userLogin.action";

const UserButton =async () => {
    const session=await auth();
    if(!session)
    {
        return(
            <Button asChild >
                <Link href='/sign-in'>
                    <UserIcon/> Sign In
                </Link>
            </Button>
        );
    }
    const firstLetter=session.user?.name?.charAt(0).toUpperCase()??'U';
    return (
        <div>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <div className="h-10 w-10 rounded-full bg-slate-300 flex-center hover:cursor-pointer">{firstLetter}</div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                    <DropdownMenuLabel className="font-normal">
                        <div className="flex flex-col space-y-1">
                            <div className="text-sm font-medium leading-none">
                                {session.user?.name}
                            </div>
                            <div className="text-sm text-muted-foreground leading-none">
                                {session.user?.email}
                            </div>
                        </div>
                    </DropdownMenuLabel>
                    <DropdownMenuItem className="p-0 mb-1">
                        <form action={signOutUser}>
                            <Button type="submit" variant={'ghost'} className="w-full py-4 px-2 h-4 justify-start">
                                Sign Out
                            </Button>
                        </form>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}
 
export default UserButton;