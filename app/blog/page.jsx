import Navbar from "../../components/Navbar";

export default function BlogPage() {
  return (
    <>
      <Navbar />

      <div className="post">
        <h2 className="post-title">Blog 1</h2>

        <p>Overview CVE-2023-23397 vulnerability...</p>

        <a href="/readmore">Read More →</a>
      </div>
    </>
  );
}
