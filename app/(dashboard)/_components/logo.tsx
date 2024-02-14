import Image from "next/image"

export const Logo = () => {
    return (
        <Image 
            height={150}
            width={120}
            alt="logo"
            src="/logo.svg"
        />
    )
}