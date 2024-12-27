import { useState } from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

interface SecurityModalProps {
  onSetMasterPassword: (password: string) => void
  onClose: () => void
}

export default function SecurityModal({ onSetMasterPassword, onClose }: SecurityModalProps) {
  const [masterPassword, setMasterPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSave = () => {
    if (masterPassword === confirmPassword) {
      onSetMasterPassword(masterPassword)
    } else {
      alert("Passwords do not match. Please try again.")
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <Card className="w-full max-w-md bg-[#020202] border-[#ACECA1]">
        <CardHeader>
          <CardTitle className="text-[#ACECA1]">Set Master Password</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="masterPassword" className="text-[#ACECA1]">Master Password</Label>
            <Input 
              id="masterPassword" 
              type="password"
              value={masterPassword} 
              onChange={(e) => setMasterPassword(e.target.value)}
              className="bg-[#020202] text-[#ACECA1] border-[#ACECA1]"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirmPassword" className="text-[#ACECA1]">Confirm Password</Label>
            <Input 
              id="confirmPassword" 
              type="password"
              value={confirmPassword} 
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="bg-[#020202] text-[#ACECA1] border-[#ACECA1]"
            />
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button onClick={onClose} variant="outline" className="border-[#ACECA1] text-[#ACECA1]">Cancel</Button>
          <Button onClick={handleSave} className="bg-[#ACECA1] text-[#020202] hover:bg-[#8EAC81]">Save</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

