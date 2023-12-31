import clsx from "clsx"

export function Logo({ className }) {
  return (
    <div className={clsx("whitespace-nowrap font-display", className)}>
      <span>Ma</span>
      <span className="text-accent-400">rti</span>
      <span>no</span>
      <span>{''} Me</span>
      <span className="text-accent-400">di</span>
      <span>a</span>
    </div>
  )
}
