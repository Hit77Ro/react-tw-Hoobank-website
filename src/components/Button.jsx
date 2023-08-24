export default function Button({ styles = "mt-10", text = "get started" }) {
  return (
    <button
      role="button"
      className={`${styles} bg-blue-gradient rounded-[10px] px-6 py-4 font-poppins text-[18px] font-medium outline-none`}
    >
      {text}
    </button>
  );
}
