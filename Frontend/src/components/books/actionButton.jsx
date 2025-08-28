
function ActionButton({
  children,
  text,
  onClick,
  type = "button",
  icon = null,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="px-6 py-2 text-white bg-blue-600 rounded-md cursor-pointer text-sm inline-flex items-center gap-2 hover:bg-blue-700 transition-colors"
    >
      {icon && <span className="text-lg">{icon}</span>}
      {text || children}
    </button>
  );
}

export default ActionButton;