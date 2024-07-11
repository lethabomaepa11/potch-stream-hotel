"use client"
import React from 'react'
import {Button} from "./ui/button"
import { useFormStatus } from 'react-dom'

const LoadingBtn = () => {
    const pending = useFormStatus();
  return (
    <Button type="submit" className="w-full" disabled={pending == true ?true:false}>
        {pending == true ? "Please wait...": "Confirm"}
    </Button>
  )
}

export default LoadingBtn
