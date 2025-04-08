import Link from "next/link";

export default function Page() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center space-y-8 px-4 text-center">
      {/* Welcome Section */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
          Welcome to Zero Space
        </h1>
        <p className="mx-auto max-w-[600px] text-muted-foreground">
          Begin your digital workspace journey.
        </p>
      </div>

      {/* Quick Actions Grid */}
      <div className="grid w-full max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {/* Files */}
        <Link href="/dashboard/files">
          <div className="group relative rounded-xl border-0 bg-blue-500/10 p-6 transition-all hover:bg-blue-500/20 shadow-lg shadow-blue-500/20 dark:bg-blue-400/20 dark:shadow-blue-400/30 dark:hover:bg-blue-400/30">
            <div className="space-y-2">
              <h3 className="font-semibold text-blue-700 dark:text-blue-300">Files</h3>
              <p className="text-sm text-blue-600/80 dark:text-blue-200/90">
                Manage and organize your documents
              </p>
            </div>
          </div>
        </Link>

        {/* Chat */}
        <Link href="/dashboard/chat">
          <div className="group relative rounded-xl border-0 bg-purple-500/10 p-6 transition-all hover:bg-purple-500/20 shadow-lg shadow-purple-500/20 dark:bg-purple-400/20 dark:shadow-purple-400/30 dark:hover:bg-purple-400/30">
            <div className="space-y-2">
              <h3 className="font-semibold text-purple-700 dark:text-purple-300">Chats</h3>
              <p className="text-sm text-purple-600/80 dark:text-purple-200/90">
                Start conversations with OG Intelligence
              </p>
            </div>
          </div>
        </Link>

        {/* Agent */}
        <Link href="/dashboard/agent">
          <div className="group relative rounded-xl border-0 bg-emerald-500/10 p-6 transition-all hover:bg-emerald-500/20 shadow-lg shadow-emerald-500/20 dark:bg-emerald-400/20 dark:shadow-emerald-400/30 dark:hover:bg-emerald-400/30">
            <div className="space-y-2">
              <h3 className="font-semibold text-emerald-700 dark:text-emerald-300">Agent</h3>
              <p className="text-sm text-emerald-600/80 dark:text-emerald-200/90">
                Your AI-powered assistant with OG Intelligence
              </p>
            </div>
          </div>
        </Link>
      </div>

      {/* Upload Button */}
      <Link href="/dashboard/upload">
        <button className="inline-flex cursor-pointer h-10 items-center justify-center rounded-md bg-gradient-to-r from-primary to-accent px-8 text-sm font-medium text-white shadow-lg shadow-accent/30 transition-all hover:from-accent hover:to-primary">
          Upload
        </button>
      </Link>
    </div>
  )
}
