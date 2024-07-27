export default function PageTitle({ title }: { title: String }) {
  return (
    <h2 className="text-center p-3 bg-dark text-light fw-bold rounded-pill my-2">
      {title}
    </h2>
  );
}
