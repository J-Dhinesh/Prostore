'use client';
import {useState,useEffect} from 'react'
import { DropdownMenu ,DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator,DropdownMenuContent,DropdownMenuCheckboxItem } from "@radix-ui/react-dropdown-menu";
import { useTheme } from "next-themes";
import {Button} from '@/components/ui/button'
import {SunIcon,MoonIcon, SunMoon} from 'lucide-react'

const ModeToggle = () => {
    
    const {theme,setTheme}=useTheme();
    const [mounted,setMounted]=useState(false);
    useEffect(()=>
    {
        setMounted(true);
    },[]);
    if(!mounted)
    {
        return null;
    }
    return <DropdownMenu>
        <DropdownMenuTrigger asChild>
             <Button className='focus-visible:ring-0 focus-visible:ring-offet-0' variant='ghost'>
                {theme==='system'?(
                    <SunIcon/>
                ):theme==='dark'?(
                    <MoonIcon/>
                ):<SunMoon/>}
             </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuLabel>Appearance</DropdownMenuLabel>
            <DropdownMenuSeparator/> 
            <DropdownMenuCheckboxItem 
                checked={theme==='system'} 
                onClick={()=>setTheme('system')}
            >
                System
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem 
                checked={theme==='light'} 
                onClick={()=>setTheme('light')}
            >
                Light
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem 
                checked={theme==='dark'} 
                onClick={()=>setTheme('dark')}
            >
                Dark
            </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
    </DropdownMenu>;
}
 
export default ModeToggle;