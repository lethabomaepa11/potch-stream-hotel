"use client"
import React, { useState } from 'react'
import Link from "next/link"
import LoadingBtn from "../../../components/LoadingBtn"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card"
import {Textarea} from "../../../components/ui/textarea"
import { Input } from "../../../components/ui/input"
import { Label } from "../../../components/ui/label"
import { redirect, usePathname } from 'next/navigation'
import TextEditor from "@/components/TextEditor"
import {editHelp, addHelp} from "@/lib/HelpPageQueries"
import { getHelpData } from '@/app/help/layout'


const HelpPagesForm = ({helpPage}) => {
    const currentPath = usePathname();
    const [formData, setFormData] = useState({
      path: currentPath.includes("/edit") ? helpPage.path : "",
      heading: currentPath.includes("/edit") ? helpPage.heading : "",
    });

    const handleOnChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    };
    
    const editHelpAction = currentPath.includes("/edit") ? editHelp.bind(null,helpPage.id): null;
    //
  return (
    
    <Card className="">
      <CardHeader>
        <CardTitle className="text-xl">{currentPath.includes("/add")?"Add new":"Edit"} Help Page</CardTitle>
        <CardDescription>
          Enter help page information
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <form action={currentPath.includes("/add")?addHelp:editHelpAction}>
        <div className="grid gap-4">
            
          <div className="grid grid-cols-2 gap-4">
          <div className="grid gap-2">
            <Label htmlFor="price">Heading</Label>
            <Input
              id="heading"
              name='heading'
              type="text"
              onChange={handleOnChange}
              value={formData.heading}
              placeholder="Lost and Found"
              required
            />
          </div>
            <div className="grid gap-2">
              <Label htmlFor="path">Path</Label>
              <Input onChange={handleOnChange} value={formData.path} id="path" name='path' type="text" placeholder="/lost-found" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="text">Text</Label>
              {currentPath.includes("/edit") ? <TextEditor data={helpPage} editable/> : <TextEditor data={null} editable/> }
            </div>
          </div>
          <LoadingBtn/>
        </div>
        </form>
      </CardContent>
    </Card>
    
  )
}

export default HelpPagesForm

