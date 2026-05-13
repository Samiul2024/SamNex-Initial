const PrimaryButton = ({
  children,
  className = "",
}) => {
  return (
    <button
      className={`rounded-xl bg-primary px-6 py-3 font-semibold transition hover:scale-[1.02] hover:opacity-90 ${className}`}
    >
      {children}
    </button>
  )
}

export default PrimaryButton