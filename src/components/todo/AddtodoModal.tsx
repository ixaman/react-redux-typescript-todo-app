import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { addTodo } from '@/redux/features/todoSlice';
import { useAppDispatch } from '@/redux/hooks';
import { DialogClose } from '@radix-ui/react-dialog';
import { FormEvent, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const AddtodoModal = () => {
  const [task, setTask] = useState('');
  const [details, setDetails] = useState('');
  const dispatch = useAppDispatch();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log({ task, details });
    const uID = uuidv4();
    const taskDetails = {
      id: uID,
      title: task,
      details,
    };
    dispatch(addTodo(taskDetails));
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-primary-gradient text-xl font-semibold">
          Add todo
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Add task</DialogTitle>
            <DialogDescription>
              Add your daily task here to add to todo's list
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="task" className="text-right">
                Task
              </Label>
              <Input
                onBlur={(e) => setTask(e.target.value)}
                id="task"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="details" className="text-right">
                Details
              </Label>
              <Input
                onBlur={(e) => setDetails(e.target.value)}
                id="details"
                className="col-span-3"
              />
            </div>
          </div>
          <div className="flex justify-end">
            <DialogClose asChild>
              <Button type="submit">Save changes</Button>
            </DialogClose>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddtodoModal;
