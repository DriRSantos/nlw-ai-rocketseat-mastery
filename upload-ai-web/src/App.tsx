import { Github, FileVideo, Upload, Wand2 } from 'lucide-react';
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "./components/ui/button";
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"

export function App() {
  return (
    <div className='min-h-screen flex flex-col'>
      <div className='px-6 py-3 flex items-center justify-between border-b'>
        <h1 className='text-x1 font-bold'>upload.ai</h1>

        <div className='flex items-center gap-3'>
          <span className='text-sm text-muted-foreground'>
            Developed by <span className='text-sm text-orange-300'>Dri</span>, NLW Rocketseat
          </span>

          <Separator orientation='vertical' className='h-6' />

          <Button variant='link'>
            <Github className='w-4 h-4 mr-2' />
            <a href="https://github.com/DriRSantos/nlw-ai-rocketseat-mastery">GitHub</a>
          </Button>
        </div>
      </div>

      <main className='flex-1 p-6 flex gap-6'>
        <div className='flex flex-col flex-1 gap-4'>
          <div className='grid grid-rows-2 gap-4 flex-1'>
            <Textarea 
            placeholder='Inclua o prompt para a IA...'
            className='resize-none p-4 leading-relaxed'
            />     
            <Textarea 
            placeholder='Resultado gerado pela IA...' 
            className='resize-none p-4 leading-relaxed'
            />
          </div>

          <p className='text-sm text-muted-foreground'>Remember: you can use the <code className='text-orange-400'>{'{transcription}'}</code> variable in your prompt to add the transcript content of the selected video</p>
        </div>
        
        <aside className="w-80 space-y-6">
          <form className="space-y-6">
            <label
              htmlFor="video"
              className="border flex rounded-md aspect-video cursor-pointer border-dashed text-sm flex-col gap-2 items-center justify-center text-muted-foreground hover:bg-primary/5"
            >
              <FileVideo className="w-4 h-4" />
              Select a video
            </label>

            <input type="file" id="video" accept="video/mp4" className="sr-only" />

            <Separator />

            <div className="space-y-2">
              <Label htmlFor="transcription_prompt">Transcription prompt</Label>
              <Textarea
                id="transcription_prompt"
                className="h-20 leading-relaxed resize-none"
                placeholder="Inclua palavras-chave mencionadas no vídeo separadas por vírgula (,)"
              />
            </div>

            <Button type="submit" className="w-full">
              Upload video
              <Upload className="w-4 h-4 ml-2" />
            </Button>
          </form>

          <Separator />

          <form className="space-y-6">
            <div className="space-y-2">
              <Label>Prompt</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione um prompt..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="title">YouTube Title</SelectItem>
                  <SelectItem value="description">YouTube Description</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Model</Label>
              <Select disabled defaultValue="gpt3.5">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gpt3.5">GPT 3.5-turbo 16k</SelectItem>
                </SelectContent>
              </Select>
              <span className="block text-sm text-muted-foreground italic">
              You will be able to customize this option soon
              </span>
            </div>

            <Separator />

            <div className="space-y-4">
              <Label>Temperatura</Label>
              <Slider
                min={0}
                max={1}
                step={0.1}
              />
              <span className="block text-sm text-muted-foreground italic leading-relaxed">
                Higher values tend to make the result more creative and with possible errors.
              </span>
            </div>

            <Separator />

            <Button type="submit" className="w-full">
              Run
              <Wand2 className="w-4 h-4 ml-2" />
            </Button>
          </form>
        </aside>
      </main>
    </div>
  )
}