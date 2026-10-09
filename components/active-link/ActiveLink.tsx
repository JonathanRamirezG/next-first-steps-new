'use client';

import Link from "next/link"
import { usePathname } from "next/navigation";

const styles = {
  base: "hover:underline hover:text-blue-400 mr-2 transition-all",
  active: "text-blue-500"
};

interface Props {
    path: string,
    text: string
}

export const ActiveLink = ({ path, text }: Props) => {
    const pathName = usePathname();
    return (
        <Link className={`${styles.base} ${pathName === path && styles.active}`} href={path}>{text}</Link>
    )
}
