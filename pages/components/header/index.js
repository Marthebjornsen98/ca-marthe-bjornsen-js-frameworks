import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession();
  return (
    <header>
      <nav
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <ul
          style={{
            width: "27%",
            display: "flex",
            justifyContent: "space-between",
            marginRight: "50px",
            alignItems: "center",
          }}
        >
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          {session ? (
            <>
              <li>
                <Link href="/admin">Admin</Link>
              </li>
              <button
                onClick={() => signOut()}
                style={{
                  padding: "10px 25px",
                  border: "none",
                  borderRadius: "5px",
                  backgroundColor: "lightgrey",
                  cursor: "pointer",
                }}
              >
                Sign out
              </button>
            </>
          ) : (
            <button
              onClick={() => signIn()}
              style={{
                padding: "10px 25px",
                border: "none",
                borderRadius: "5px",
                backgroundColor: "lightgrey",
                cursor: "pointer",
              }}
            >
              Sign in
            </button>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
