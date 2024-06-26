import Blogs from "./compoents/Blogs";
import HeroSection from "./compoents/HeroSection";

export default function Home() {
  return (
    <>
      <HeroSection />

      <div
        className="container"
        style={{
          borderTop: "8px solid #964B00",
          backgroundColor: "#FFF",
          borderRadius: "25px",
          boxShadow:
            "0 1px 2px rgba(32, 33, 36, 0.15), 0 1px 8px rgba(32, 33, 36, 0.08)",
          position: "relative",
          height: "auto",
          left: "0px",
        }}
      >
        <Blogs />
      </div>
    </>
  );
}
