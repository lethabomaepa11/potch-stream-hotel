import { getHelpData } from '@/app/help/layout'
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Edit, PlusSquare, Trash2 } from 'lucide-react';
import Link from 'next/link';
import React from 'react'
import TextEditor from '@/components/TextEditor';
import DeleteBtn from "../components/DeleteBtn"


const MaintainHelpPages = async() => {
    const helpData = await getHelpData();
  return (
    <Card className='mt-20'>
        <CardHeader>
            <CardTitle className='flex justify-between'>
                Maintain help pages
                <Link href="/psh-admin/add/help"><Button variant="default"><PlusSquare/>Add New</Button></Link>
            </CardTitle>
            <CardDescription>
                You can add/delete or edit help pages here...
            </CardDescription>
            <CardContent className='flex flex-col gap-3'>
                { 
                    helpData.map(data => {
                        return (
                            <Card key={data.id}>
                                <CardHeader>
                                    <CardTitle className='flex justify-between'>
                                        {data.heading}
                                        <span className='flex gap-1'>
                                        <Link href={`psh-admin/edit/help/${data.id}`}><Button variant="ghost"><Edit/></Button></Link>
                                        <DeleteBtn item="help" id={data.id}/>
                                        </span>
                                        
                                    </CardTitle>
                                    <CardDescription>
                                      <Button variant="link" asChild><Link href={`/help${data.path}`}>Path: /help{data.path}</Link></Button> 
                                    </CardDescription>
                                    <CardContent>
                                    <TextEditor data={data}
                                        editable={false}/>
                                    </CardContent>
                                    
                                </CardHeader>
                            </Card>
                        )
                    })
                }
            </CardContent>
        </CardHeader>
        
    </Card>
  )
}

export default MaintainHelpPages
