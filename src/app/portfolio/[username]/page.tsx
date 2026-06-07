// Stage 2: Public portfolio page
export default function PublicPortfolioPage({
  params,
}: {
  params: { username: string };
}) {
  return (
    <div>
      <h1>Public Portfolio - {params.username} (Stage 2)</h1>
    </div>
  );
}
