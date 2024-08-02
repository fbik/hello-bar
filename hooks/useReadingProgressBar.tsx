import {useEffect, useState} from "react";
import {usePathname, useSearchParams} from "next/navigation";

export default function useReadingProgressBar() {
    const [completion, setCompletion ] = useState(0);
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        console.log("useEffect");
        const updateScrollCompletion = () => {
            console.log("updateScrollCompletion");
            const actualPosition = window.scrollY;
            const scrollHeight = document.body.scrollHeight - window.innerHeight;
            const percentage = (actualPosition / scrollHeight) * 100;
            setCompletion(percentage);

        };

        window.addEventListener("scroll", updateScrollCompletion);

        return () => {
            window.removeEventListener("scroll", updateScrollCompletion);
        };
    }, [pathname, searchParams]);

    return completion;
}