import React from 'react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  import { Edit, PlusSquare, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { deleteHelp } from '@/lib/HelpPageQueries';
import { deleteRoom } from '@/lib/RoomQueries';
  
const ConfirmationDialog = ({item, id}) => {
    const action = item === "help"? deleteHelp.bind(null,id):deleteRoom.bind(null,id);
    
  return (
    <div>
        <AlertDialog>
            <AlertDialogTrigger><Button variant="destructive"><Trash2/></Button></AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete this {item === "help"?"Help Page":`Room: ${id}`}.
                </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <form>
                    <AlertDialogAction type='submit' formAction={action}>Continue</AlertDialogAction>
                </form>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>

    </div>
  )
}

export default ConfirmationDialog
