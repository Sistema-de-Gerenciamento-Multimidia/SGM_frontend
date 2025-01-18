import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
import { InputFile } from "./input_file"

export function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-fulvouscolor text-white px-4 py-2 rounded shadow hover:bg-fulvoushover">+ Adicionar arquivo mulltimídia</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-primarylemon">
        <DialogHeader>
          <DialogTitle>Adicionar arquivo</DialogTitle>
          <DialogDescription>
            Faça o upload de um arquivo mulltimídia.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <InputFile />
        </div>
        <DialogFooter>
          <Button type="submit" className="bg-fulvouscolor text-white hover:bg-fulvoushover">Upload</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
