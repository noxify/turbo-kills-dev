export function Code({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}): JSX.Element {
  return <code className={className}>{children}</code>
}

// changing a file in a package will kill the dev process
