export default function Loader() {
  return (
    <div className="spinner-wrapper">
      <div
        className="spinner-border"
        style={{ width: "6rem", height: "6rem" }}
        role="status"
      >
        <span className="sr-only"></span>
      </div>
    </div>
  );
}
