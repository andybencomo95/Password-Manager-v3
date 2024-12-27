import { useState } from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { PasswordEntry } from '../page'

interface AddPasswordCardProps {
  onSave: (entry: PasswordEntry) => void
  onClose: () => void
}

export default function AddPasswordCard({ onSave, onClose }: AddPasswordCardProps) {
  const [accountName, setAccountName] = useState('')
  const [password, setPassword] = useState('')
  const [url, setUrl] = useState('')
  const [notes, setNotes] = useState('')

  const handleSave = () => {
    const newEntry: PasswordEntry = {
      id: Date.now().toString(),
      accountName,
      password,
      url,
      notes
    }
    onSave(newEntry)
  }

  return (
    <Card className="w-full max-w-md mx-auto bg-[#020202] border-[#ACECA1]">
      <CardHeader>
        <CardTitle className="text-[#ACECA1]">Add New Password</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="accountName" className="text-[#ACECA1]">Account Name</Label>
          <Input 
            id="accountName" 
            value={accountName} 
            onChange={(e) => setAccountName(e.target.value)}
            className="bg-[#020202] text-[#ACECA1] border-[#ACECA1]"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password" className="text-[#ACECA1]">Password</Label>
          <Input 
            id="password" 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[#020202] text-[#ACECA1] border-[#ACECA1]"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="url" className="text-[#ACECA1]">URL or Website</Label>
          <Input 
            id="url" 
            value={url} 
            onChange={(e) => setUrl(e.target.value)}
            className="bg-[#020202] text-[#ACECA1] border-[#ACECA1]"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="notes" className="text-[#ACECA1]">Notes (Optional)</Label>
          <Textarea 
            id="notes" 
            value={notes} 
            onChange={(e) => setNotes(e.target.value)}
            className="bg-[#020202] text-[#ACECA1] border-[#ACECA1]"
          />
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button onClick={onClose} variant="outline" className="border-[#ACECA1] text-[#ACECA1]">Cancel</Button>
        <Button onClick={handleSave} className="bg-[#ACECA1] text-[#020202] hover:bg-[#8EAC81]">Save</Button>
      </CardFooter>
    </Card>
  )
}

