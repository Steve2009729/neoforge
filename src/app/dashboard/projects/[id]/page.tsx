// Stage 2: Single project editor page
export default function ProjectEditorPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div>
      <h1>Project Editor - {params.id} (Stage 2)</h1>
    </div>
  );
}
