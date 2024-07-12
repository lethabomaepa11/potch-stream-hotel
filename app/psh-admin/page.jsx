import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import React from 'react'
import MaintainHelpPages from "./components/MaintainHelpPages"
import MaintainRooms from "./components/MaintainRooms"

export const allowedItems = ["help","lost-found","room"];

const AdminPage = () => {
  //admin has the ability to edit help pages, maintain rooms, lost and found items, get reports
  return (
    <div className='flex flex-col sm:flex-row mt-20 justify-center' >
      
        <Tabs defaultValue="reports" className="w-full z-0">
        <TabsList className="fixed z-50">
          <TabsTrigger value="reports">Reports</TabsTrigger>
          <TabsTrigger value="help">Help Pages</TabsTrigger>
          <TabsTrigger value="lostfound">Lost and Found</TabsTrigger>
          <TabsTrigger value="rooms">Rooms</TabsTrigger>
        </TabsList>
        <TabsContent value="reports">View company reports here, number of bookings.etc</TabsContent>
        <TabsContent value="help"><MaintainHelpPages/></TabsContent>
        <TabsContent value="lostfound">Maintain Lost and found items</TabsContent>
        <TabsContent value="rooms"><MaintainRooms/></TabsContent>
    </Tabs>

    </div>
  )
}

export default AdminPage
