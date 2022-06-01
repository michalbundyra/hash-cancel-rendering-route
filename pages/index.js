// pages/index.tsx
import Link from "next/link";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();

  return (
      <div>
        <section style={{ height: "100vh" }}>
          <h2 id="hello">hello</h2>

          <button
              onClick={() => {
                router.push("/blog");
                router.push("#hello");
                router.push("#hello-world");
              }}
          >
            to world
          </button>

          <p>
            <Link href="/blog">
              <a>To blog</a>
            </Link>
          </p>
        </section>

        <section>
          <h2 id="world">world</h2>
        </section>
      </div>
  );
};

export default Home;