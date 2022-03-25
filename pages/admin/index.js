import Header from "../components/header";
import ReactPlayer from "react-player";

const Admin = () => {
  return (
    <>
      <Header />
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1>You&apos;ve been Rick Rolled</h1>
        <ReactPlayer
          url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          playing
        />
      </div>
    </>
  );
};

export default Admin;
