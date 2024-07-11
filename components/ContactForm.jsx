import React from 'react'
import Link from "next/link"
import LoadingBtn from "@/components/LoadingBtn"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { redirect } from 'next/navigation'
import { submitContactInfo } from '@/lib/actions'

const ContactForm = () => {
  return (
    <form action={submitContactInfo}>
    <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-xl">Contact information</CardTitle>
        <CardDescription>
          Enter your information to make a booking
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="first-name">First name</Label>
              <Input id="firstname" name='firstname' placeholder="Max" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="last-name">Last name</Label>
              <Input id="lastname" name='lastname' placeholder="Robinson" required />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name='email'
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" name='phone' type="text"placeholder="0765891234" required />
          </div>
          <LoadingBtn/>
        </div>
      </CardContent>
    </Card>
    </form>
  )
}

export default ContactForm

