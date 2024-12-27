import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Eye, EyeOff } from 'lucide-react'
import { PasswordEntry } from '../page'

interface PasswordListProps {
  passwords: PasswordEntry[]
  masterPassword: string | null
}

export default function PasswordList({ passwords, masterPassword }: PasswordListProps) {
  const [selectedPassword, setSelectedPassword] = useState<string | null>(null)

  const togglePasswordVisibility = (id: string) => {
    if (masterPassword) {
      setSelectedPassword(selectedPassword === id ? null : id)
    } else {
      alert("Please set a master password to view stored passwords.")
    }
  }

  return (
    <div className="space-y-4">
      {passwords.map((entry) => (
        <Card key={entry.id} className="bg-[#020202] border-[#ACECA1]">
          <CardHeader>
            <CardTitle className="text-[#ACECA1] flex justify-between items-center">
              {entry.accountName}
              <Button
                onClick={() => togglePasswordVisibility(entry.id)}
                variant="ghost"
                size="icon"
                className="text-[#ACECA1]"
              >
                {selectedPassword === entry.id ? <EyeOff /> : <Eye />}
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-[#ACECA1]">URL: {entry.url}</p>
            <p className="text-[#ACECA1]">
              Password: {selectedPassword === entry.id ? entry.password : '••••••••'}
            </p>
            {entry.notes && <p className="text-[#ACECA1]">Notes: {entry.notes}</p>}
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

