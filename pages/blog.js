// pages/blog.tsx
import Link from "next/link";

const Test = () => {
    return (
        <>
            <h2>Blog</h2>

            <p>
                <Link href="/">
                    <a>Back home</a>
                </Link>
            </p>
        </>
    );
};

export default Test;