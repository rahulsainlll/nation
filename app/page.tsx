'use client'

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ConnectButton } from "arweave-wallet-kit"

export default function Home() {
  const [isWalletConnected, setIsWalletConnected] = useState(false)

  const handleConnect = () => {
    // Simulating wallet connection
    setIsWalletConnected(true)
  }

  return (
    <div className="min-h-screen font-mono">
      {/* Header */}
      <header className="flex justify-between items-center p-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 bg-primary" />
          <Link href="/">
            <h1 className="text-2xl font-bold tracking-tighter text-black">Nation</h1>
          </Link>
        </div>

        {/* Center options (visible when wallet is connected) */}
        {isWalletConnected && (
          <div className="space-x-4">
            <Button variant="ghost" className="text-white hover:text-primary">View</Button>
            <Button variant="ghost" className="text-white hover:text-primary">Create</Button>
          </div>
        )}

        {/* Connect Button (right side) */}
        <ConnectButton
          onClick={handleConnect}
          className="text-white hover:text-primary"
        >
          {isWalletConnected ? 'Connected' : 'Connect to Nation'}
        </ConnectButton>
      </header>

      {/* Main content */}
      <main className="flex flex-col items-center justify-center p-8">
        {/* Header text styled like the movie poster */}
        {/* <h2 className="text-white text-3xl mb-8">
          the nation://
        </h2> */}

        {/* Main image */}
        {/* <img 
          src="/placeholder.svg?height=600&width=600" 
          alt="Vintage Social Media"
          className="max-w-2xl w-full grayscale opacity-80"
        /> */}

        {/* Connect Button (center, only shown if not connected) */}
        {/* {!isWalletConnected && (
          <ConnectButton
            onClick={handleConnect}
            className="mt-8 text-white text-xl hover:underline cursor-pointer"
          >
            connect to nation
          </ConnectButton>
        )} */}
      </main>
    </div>
  )
}