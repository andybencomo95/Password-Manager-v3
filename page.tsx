'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { PlusCircle, Lock } from 'lucide-react'
import AddPasswordCard from './components/AddPasswordCard'
import PasswordList from './components/PasswordList'
import SecurityModal from './components/SecurityModal'
import Footer from './components/Footer'

export interface PasswordEntry {
  id: string
  accountName: string
  password: string
  url: string
  notes: string
}

export default function HomePage() {
  const [showAddPassword, setShowAddPassword] = useState(false)
  const [passwords, setPasswords] = useState<PasswordEntry[]>([])
  const [masterPassword, setMasterPassword] = useState<string | null>(null)
  const [showSecurityModal, setShowSecurityModal] = useState(false)

  const addPassword = (entry: PasswordEntry) => {
    setPasswords([...passwords, entry])
    setShowAddPassword(false)
  }

  return (
    <div className="min-h-screen bg-[#020202] text-[#ACECA1] p-8 pb-16">
      <h1 className="text-4xl font-bold mb-8">Password Manager</h1>
      <div className="flex justify-between mb-8">
        <Button 
          onClick={() => setShowAddPassword(true)}
          className="bg-[#ACECA1] text-[#020202] hover:bg-[#8EAC81]"
        >
          <PlusCircle className="mr-2 h-4 w-4" /> Add Password
        </Button>
        <Button 
          onClick={() => setShowSecurityModal(true)}
          className="bg-[#ACECA1] text-[#020202] hover:bg-[#8EAC81]"
        >
          <Lock className="mr-2 h-4 w-4" /> Security
        </Button>
      </div>
      {showAddPassword && (
        <AddPasswordCard onSave={addPassword} onClose={() => setShowAddPassword(false)} />
      )}
      <PasswordList passwords={passwords} masterPassword={masterPassword} />
      {showSecurityModal && (
        <SecurityModal 
          onSetMasterPassword={(password) => {
            setMasterPassword(password)
            setShowSecurityModal(false)
          }}
          onClose={() => setShowSecurityModal(false)}
        />
      )}
      <Footer />
    </div>
  )
}

