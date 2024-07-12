"use client"
import React from 'react'
import { usePathname } from 'next/navigation'
import {Label} from "../../../components/ui/label"
import TextEditor from '@/components/TextEditor'

const ViewHelp = ({helpData}) => {
    const currentPath = usePathname();
  return (
    <div>
      {/**simulate fetching data from database */}
      {helpData.map(data => {
        let path = `/help${data.path}`;
        if(path == currentPath){
            return(
                <div key="path" className='flex flex-col p-5'>
                    <TextEditor data={data}
                    editable={false}/>
                </div>
            )
        }
      })}
    </div>
  )
}

export default ViewHelp
