import { Input } from "@material-ui/core"

export const PageContentComponent= (callback: React.Dispatch<React.SetStateAction<string>>) => {
  callback('');
  return <div>
    <Input type="text"/>
  </div>
}