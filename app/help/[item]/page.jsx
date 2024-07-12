import { Label } from '@/components/ui/label';
import React from 'react'
import ViewHelp from '../components/ViewHelp';
import { getHelpData } from '../layout';

const HelpItemPage = async () => {
    const helpData = await getHelpData();
    /*
    for(let x = 0; x< helpData.length;x++){
        const post = await prisma.helpPages.create({
            data: {
                heading: helpData[x].heading,
                path: helpData[x].path,
                text: helpData[x].text
            }
            
        })
        console.log(post)
    }
        */
  return (
    <ViewHelp helpData={helpData}/>
  )
}

export default HelpItemPage
