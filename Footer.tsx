import { Code, Database, Lock } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-[#020202] text-[#ACECA1] p-4 flex justify-center items-center">
      <span className="mr-2">Web App made by Andy Bencomo Del Rio</span>
      <Code className="w-5 h-5 mx-1" />
      <Database className="w-5 h-5 mx-1" />
      <Lock className="w-5 h-5 mx-1" />
    </footer>
  )
}

