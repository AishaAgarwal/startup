import Image from "next/image";

const Avatar = () => {
    return (
        <div className="hidden xl:flex xl:max-w-none pointer-events-none select-none">
            <Image 
            src="/avatar.jpeg"
            alt="avatar"
            width= {700}
            height = {660}
            className= "translate-z-0 w-full h-full"
            />
        </div>
    )
}
export default Avatar;