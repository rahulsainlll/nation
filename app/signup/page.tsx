'use client'

import { useState } from "react"
import Link from "next/link"
import { Apple, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

export default function Component() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Registration with email:", email, "and password:", password)
  }

  return (
    <div className="mx-auto max-w-2xl space-y-8 p-6">
      <div className="text-center">
        <div className="flex items-center justify-center space-x-2">
          <div className="h-8 w-8 bg-primary" />
          <Link href="/">
          <h1 className="text-2xl font-bold tracking-tighter">nation</h1>
          </Link>
        </div>
      </div>

      <div className="text-center text-sm text-muted-foreground">
        Please agree to the Terms of Use and Privacy Policy before selecting a registration method below.
      </div>

      <div className="space-y-6">
        <h2 className="text-center text-xl font-semibold">Register with your existing account</h2>
        
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <Button variant="outline" className="h-12 justify-start bg-black text-white hover:bg-gray-800">
            <Apple className="mr-2 h-5 w-5" />
            Apple
          </Button>
          <Button variant="outline" className="h-12 justify-start bg-[#1DA1F2] text-white hover:bg-[#1a8cd8]">
            <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
            </svg>
            Twitter
          </Button>
          <Button variant="outline" className="h-12 justify-start bg-[#4267B2] text-white hover:bg-[#365899]">
            <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
            Facebook
          </Button>
          <Button variant="outline" className="h-12 justify-start bg-[#00B900] text-white hover:bg-[#009900]">
            <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
            </svg>
            LINE
          </Button>
          <Button variant="outline" className="h-12 justify-start bg-[#4285F4] text-white hover:bg-[#3367D6]">
            <Mail className="mr-2 h-5 w-5" />
            Google
          </Button>
          <Button variant="outline" className="h-12 justify-start bg-[#FF0033] text-white hover:bg-[#CC0033]">
            <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
            </svg>
            Yahoo! JAPAN ID
          </Button>
          <Button variant="outline" className="h-12 justify-start bg-[#E60012] text-white hover:bg-[#CC0000]">
            <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
            </svg>
            Nintendo Account
          </Button>
        </div>
      </div>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <Separator className="w-full" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">Or</span>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-center text-xl font-semibold">Register with your email address</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="email"
            placeholder="Email (e.g., niconico@co.jp)"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-12"
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="h-12"
          />
          <div className="flex justify-between items-center">
            <Link href="/forgot-password" className="text-sm text-blue-600 hover:underline">
              Forgot Password?
            </Link>
            <Link href="/login" className="text-sm text-blue-600 hover:underline">
              Already have an account? Login
            </Link>
          </div>
          <Button type="submit" className="h-12 w-full bg-gray-900 text-white hover:bg-gray-800">
            Proceed
          </Button>
        </form>

        <p className="text-center text-sm text-muted-foreground">
          Please ensure that you can receive emails from nicovideo.jp.
        </p>
      </div>
    </div>
  )
}