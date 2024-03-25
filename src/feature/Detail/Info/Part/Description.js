export default function Description({ children }) {
  return (
    <>
      <textarea className="w-full shrink-0 !resize-none bg-gray p-2 text-black/50 outline-none" rows="6" value={children} readOnly></textarea>
    </>
  )
}
