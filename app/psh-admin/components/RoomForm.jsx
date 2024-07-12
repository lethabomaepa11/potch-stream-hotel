"use client"
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { Textarea } from "../../../components/ui/textarea";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import LoadingBtn from "../../../components/LoadingBtn";
import { addRoom, editRoom } from "@/lib/RoomQueries";

const RoomForm = ({ room }) => {
  const currentPath = usePathname();
  const editRoomHere = currentPath.includes("/edit") && editRoom.bind(null,room.id)

  const [formData, setFormData] = useState({
    image: currentPath.includes("/edit") ? room.image : "",
    description: currentPath.includes("/edit") ? room.description : "",
    price: currentPath.includes("/edit") ? room.price : 0,
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentPath.includes("/add")) {
      addRoom(formData); // Implement addRoom function to handle adding a new room
    } else if (currentPath.includes("/edit")) {
      editRoom(room.id, formData); // Implement editRoom function to handle editing a room
    }
  };

  return (
    <Card className="mx-auto max-w-md w-[400px]">
      <CardHeader>
        <CardTitle className="text-xl">{currentPath.includes("/add") ? "Add new" : "Edit"} Room</CardTitle>
        <CardDescription>
          Enter room information
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form action={currentPath.includes("/add")?addRoom:editRoomHere}>
          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="image">Image URL</Label>
                <Input
                  onChange={handleOnChange}
                  id="image"
                  name="image"
                  type="url"
                  value={formData.image}
                  placeholder="https://image.png"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  onChange={handleOnChange}
                  id="description"
                  value={formData.description}
                  name="description"
                  placeholder="This is luxury room..."
                  required
                />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="price">Price</Label>
              <Input
                onChange={handleOnChange}
                id="price"
                name="price"
                type="number"
                placeholder="599"
                value={formData.price}
                required
              />
            </div>
            <LoadingBtn />
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default RoomForm;
