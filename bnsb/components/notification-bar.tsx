import Link from "next/link";

const NotificationBar = () => {
    return (
        <div className="fixed top-0 z-30 w-full bg-red-500 text-center text-white text-sm sm:text-md">
            <p className="py-2">🚀 The website is currently in build, please use this one
                <Link className="ml-1 underline" href="https://groupe-bnsb.com/">here</Link>
            </p>
        </div>
    );
}
 
export default NotificationBar;