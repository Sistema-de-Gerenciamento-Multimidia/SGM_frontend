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

// Esquema de validação com Zod
const schema = z.object({
  file: z
    .custom<File>((value) => value instanceof File, {
      message: "Você deve selecionar um arquivo.",
    })
    // .refine((file) => file?.size <= 5 * 1024 * 1024, {
    //   message: "O arquivo deve ter no máximo 5MB.",
    // })
    .refine(
      (file) => ["image/jpeg", "image/png", "video/mp4"].includes(file?.type),
      {
        message: "Apenas arquivos JPEG, PNG ou MP4 são permitidos.",
      }
    ),
});

// Tipagem do formulário
type FormValues = z.infer<typeof schema>;

export function DialogDemo() {
  const {
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormValues) => {
    console.log("Arquivo enviado:", data.file);
  };

  return (
    <Dialog>
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
