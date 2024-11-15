'use client'

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Wallet } from 'lucide-react'
import { ConnectButton } from "arweave-wallet-kit"


export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#3b5998] font-mono">
      {/* Header text styled like the movie poster */}
      <div className="p-8">
        <h1 className="text-white text-2xl">
          the nation://
        </h1>
        <ConnectButton
          onClick={() => setIsModalOpen(true)}
          className="text-white text-xl hover:underline cursor-pointer mt-2"
        >
          connect to nation
        </ConnectButton>
      </div>

      {/* Main image */}
      <div className="flex justify-center items-center p-8">
        <img 
          src="/cur5.png?height=600&width=600" 
          alt="Vintage Social Media"
          className="max-w-2xl w-full grayscale opacity-80"
        />
      </div>

      {/* Connect Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="font-mono border-2 border-black bg-white">
          <DialogHeader>
            <DialogTitle className="text-xl font-normal">
              Connect to Nation
            </DialogTitle>
          </DialogHeader>
          <div className="p-4">
            <div className="space-y-4">
              <p className="text-sm">
                Connect your wallet to join the decentralized social network
              </p>
              <Button 
                onClick={() => console.log('Connecting wallet...')}
                className="w-full bg-[#3b5998] hover:bg-[#2d4373] text-white font-normal"
              >
                <Wallet className="mr-2 h-4 w-4" />
                Connect Wallet
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}