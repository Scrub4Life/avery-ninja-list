// specially named file
import Link from "next/dist/client/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      // router.go(-1)
      // redirecting them to the homepage after 3 seconds
      router.push("/");
      console.log("use effect ran");
    }, 3000);
  }, []);

  return (
    <div className="not-found">
      <h1>oops...</h1>
      <h2>That page cannot be found.</h2>
      <p>
        Go back to the
        <Link href="/">
          <a>Homepage</a>
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
