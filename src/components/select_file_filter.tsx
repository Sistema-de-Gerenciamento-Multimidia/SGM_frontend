import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectDemo() {
  return (
    <Select>
      <SelectTrigger className="w-[180px] bg-fulvouscolor text-white hover:bg-fulvoushover transition-all border-none focus:ring-2 focus:ring-offset-2 focus:ring-fulvoushover">
        <SelectValue placeholder="Filtro de arquivos" />
      </SelectTrigger>
      <SelectContent className="bg-primarylemon">
        <SelectGroup>
          <SelectLabel>Conteúdo</SelectLabel>
          <SelectItem
            value="Todos"
            className="hover:bg-fulvoushover focus:bg-fulvoushover focus:text-white transition-all"
          >
            Todos
          </SelectItem>
          <SelectItem
            value="Imagens"
            className="hover:bg-fulvoushover focus:bg-fulvoushover focus:text-white transition-all"
          >
            Imagens
          </SelectItem>
          <SelectItem
            value="Vídeos"
            className="hover:bg-fulvoushover focus:bg-fulvoushover focus:text-white transition-all"
          >
            Vídeos
          </SelectItem>
          <SelectItem
            value="Áudios"
            className="hover:bg-fulvoushover focus:bg-fulvoushover focus:text-white transition-all"
          >
            Áudios
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
