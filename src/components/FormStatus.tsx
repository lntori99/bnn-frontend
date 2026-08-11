export default function FormStatus({
  status,
  success,
  error,
}: {
  status: "idle" | "sending" | "success" | "error";
  success: string;
  error?: string;
}) {
  if (status === "success")
    return (
      <p role="status" className="border-2 border-forest bg-forest/10 p-4 font-semibold text-forest-deep">
        {success}
      </p>
    );
  if (status === "error")
    return (
      <p role="alert" className="border-2 border-clay bg-clay/10 p-4 font-semibold text-clay">
        {error ?? "Your submission didn't go through. Check the highlighted fields and try again."}
      </p>
    );
  return null;
}
