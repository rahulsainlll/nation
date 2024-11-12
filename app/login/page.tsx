'use client'

import Link from "next/link"
import {  Apple } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Component() {
  return (
    <div className="mx-auto max-w-md space-y-6 p-6">
      <div className="text-center">
        <div className="flex items-center justify-center space-x-2">
          <div className="h-8 w-8 bg-primary" />
          <Link href="/">
          <h1 className="text-2xl font-bold tracking-tighter">Nation</h1>
          </Link>
        </div>
      </div>

      {/* <Alert variant="destructive" className="border-red-200 bg-red-50 text-red-900">
        <AlertTriangle className="h-4 w-4" />
        <AlertDescription className="text-sm">
          2024年8月5日（月）以降に初めてログインする方は、パスワード再設定をお願いします。
          <br />
          ログイン後、二段階認証の再設定をおすすめします。
          <Link href="#" className="ml-1 underline">
            詳しくはこちら
          </Link>
        </AlertDescription>
      </Alert> */}

      <div className="rounded-lg border bg-card p-4 text-card-foreground shadow-sm">
        <div className="space-y-4">
          <div className="space-y-2">
            <Input
              id="email"
              placeholder="Login Email Address / Phone Number"
              type="email"
              className="w-full"
            />
          </div>
          <div className="space-y-2">
            <Input
              id="password"
              placeholder="Password"
              type="password"
              className="w-full"
            />
          </div>
          <Button
            className="w-full bg-gradient-to-b from-cyan-400 to-cyan-600 text-white hover:from-cyan-500 hover:to-cyan-700"
            type="submit"
          >
            Login
          </Button>
          <Link
            href="/forgot-password"
            className="block text-center text-sm text-blue-600 hover:underline"
          >
            forgot your password?
          </Link>
        </div>
      </div>

      {/* <div className="text-center text-sm text-muted-foreground">
        Log in to the service account below.
      </div> */}

      <div className="space-y-2">
        <Button variant="outline" className="w-full bg-black text-white hover:bg-gray-800">
          <Apple className="mr-2 h-4 w-4" />
          Arconnect
        </Button>
        {/* <Button variant="outline" className="w-full bg-[#1DA1F2] text-white hover:bg-[#1a8cd8]">
          <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
          </svg>
          Login with Twitter
        </Button>
        <Button variant="outline" className="w-full bg-[#4267B2] text-white hover:bg-[#365899]">
          <Facebook className="mr-2 h-4 w-4" />
          Login with Facebook
        </Button> */}
        {/* <Button variant="outline" className="w-full bg-[#00B900] text-white hover:bg-[#009900]">
          <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
          </svg>
          Login with LINE
        </Button>
        <Button variant="outline" className="w-full bg-[#4285F4] text-white hover:bg-[#3367D6]">
          <Mail className="mr-2 h-4 w-4" />
          Login with Google
        </Button>
        <Button variant="outline" className="w-full bg-[#FF0033] text-white hover:bg-[#CC0033]">
          <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
          </svg>
          Login with Yahoo! JAPAN
        </Button>
        <Button variant="outline" className="w-full bg-[#E60012] text-white hover:bg-[#CC0000]">
          <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
          </svg>
          Login with Nintendo Account
        </Button> */}
      </div>

      <div className="space-y-4">
        <div className="text-center text-sm">Don&apos;t have an account?</div>
        <Link href="/signup" >
        <Button
          className="w-full bg-gradient-to-b from-yellow-400 to-orange-500 text-white hover:from-yellow-500 hover:to-orange-600"
          variant="outline"
        >
          
       
          Sign up now
        
        </Button>
        </Link>
      </div>
    </div>
  )
}