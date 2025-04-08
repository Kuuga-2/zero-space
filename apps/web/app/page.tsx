'use client'

import { useAppKit } from "@reown/appkit/react"
import { Button } from "@workspace/ui/components/button"
import Image from "next/image"

export default function Page() {
  const { open } = useAppKit()

  return (
    <div className="flex items-center justify-center min-h-svh bg-background">
      <div className="w-[80%] max-w-[500px] p-6 md:p-8 rounded-lg border border-border bg-card/60 backdrop-blur-sm shadow-lg">
        <div className="flex flex-col items-center space-y-4">
          <Image
            src="/logo.png"
            alt="Zero Space Logo"
            className="w-[50%] h-[50%] md:w-[30%] md:h-[30%]"
            priority
            width={200}
            height={200}
          />
          <p className="text-center text-xl text-muted-foreground">
            Welcome to Zero Space - your personal space for unlimited storage and smart conversations that remember.
          </p>
          <Button
            size="lg"
            onClick={() => open()}
            className="w-full max-w-[280px] bg-primary hover:bg-primary/90 text-primary-foreground mt-8"
          >
            Connect Wallet
          </Button>
        </div>
      </div>
    </div>
  )
}
