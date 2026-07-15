export default function PhotoUpload({
  label,
  onChange,
}) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5">

      <h3 className="text-lg font-semibold mb-4">
        {label}
      </h3>

      <input
        type="file"
        accept="image/*"
        onChange={(e) => onChange(e.target.files[0])}
        className="w-full bg-zinc-800 rounded-lg p-3"
      />

    </div>
  );
}