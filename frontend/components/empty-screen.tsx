export function EmptyScreen() {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="flex flex-col gap-2 rounded-lg border bg-background p-8">
        <h1 className="text-lg font-semibold">Welcome to a chatbot</h1>
        <p className="leading-normal text-muted-foreground">
          It&apos;s gonna do some stuff and hopefully teach you something. What
          do you want to learn about?
        </p>
      </div>
    </div>
  )
}
