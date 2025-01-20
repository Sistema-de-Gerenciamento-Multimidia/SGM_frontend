import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { InputFile } from "./input_file";
import { useState } from "react";
import { Label } from "./ui/label";

// Esquema de validação com Zod
const schema = z.object({
  file: z
    .custom<File>((value) => value instanceof File, {
      message: "Você deve selecionar um arquivo.",
    })
    .refine(
      (file) => ["image/jpeg", "image/png", "video/mp4"].includes(file?.type),
      {
        message: "Apenas arquivos JPEG, PNG ou MP4 são permitidos.",
      }
    ),
  description: z.string().min(1, { message: "A descrição é obrigatória." }),
  tags: z
    .string()
    .refine(
      (value) => value.split(",").filter((tag) => tag.trim()).length > 0,
      {
        message: "Adicione pelo menos uma tag separada por vírgulas.",
      }
    ),
});

// Tipagem do formulário
type FormValues = z.infer<typeof schema>;

export function DialogDemo() {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const onSubmit = (data: FormValues) => {
    const tagsArray = data.tags.split(",").map((tag) => tag.trim());
    console.log("Dados enviados:", {
      file: data.file,
      description: data.description,
      tags: tagsArray,
    });
    reset();
    setIsDialogOpen(false); // Fecha o modal após o envio
  };

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button className="bg-fulvouscolor text-white px-4 py-2 rounded shadow hover:bg-fulvoushover">
          + Adicionar arquivo multimídia
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-primarylemon">
        <DialogHeader>
          <DialogTitle>Adicionar arquivo</DialogTitle>
          <DialogDescription>
            Faça o upload de um arquivo multimídia.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 py-4">
          <div className="space-y-4">
            <div>
              <InputFile
                onFileChange={(file: File | null) => {
                  if (file) {
                    setValue("file", file, { shouldValidate: true });
                  }
                }}
              />
              {errors.file && (
                <p className="text-red-500 text-sm">{errors.file.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="description" className="text-right">
                Descrição
              </Label>
              <textarea
                id="description"
                {...register("description")}
                className="w-full px-3 py-2 border rounded outline-none bg-gray-200"
              />
              {errors.description && (
                <p className="text-red-500 text-sm">
                  {errors.description.message}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="tags" className="text-right">
                Tags (separadas por vírgulas)
              </Label>
              <textarea
                id="tags"
                {...register("tags")}
                className="w-full px-3 py-2 border rounded outline-none bg-gray-200"
                placeholder="Ex: tag1, tag2, tag3"
              />
              {errors.tags && (
                <p className="text-red-500 text-sm">{errors.tags.message}</p>
              )}
            </div>
          </div>
          <DialogFooter>
            <Button
              type="submit"
              className="bg-fulvouscolor text-white hover:bg-fulvoushover"
            >
              Upload
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
