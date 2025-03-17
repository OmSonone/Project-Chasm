import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export function CharacterFilter() {
    return (
        <Tabs defaultValue='element' className='w-full'>
            <TabsList className='grid grid-cols-3 mb-4 w-full'>
                <TabsTrigger value='element'>Element</TabsTrigger>
                <TabsTrigger value='weapon'>Weapon</TabsTrigger>
                <TabsTrigger value='rarity'>Rarity</TabsTrigger>
            </TabsList>

            <TabsContent value='element' className='flex flex-wrap gap-2'>
                <Button variant='outline' size='sm' className='gap-1'>
                    <span className='bg-red-500 rounded-full w-3 h-3'></span>
                    <span>Pyro</span>
                </Button>
                <Button variant='outline' size='sm' className='gap-1'>
                    <span className='bg-blue-500 rounded-full w-3 h-3'></span>
                    <span>Hydro</span>
                </Button>
                <Button variant='outline' size='sm' className='gap-1'>
                    <span className='bg-emerald-500 rounded-full w-3 h-3'></span>
                    <span>Anemo</span>
                </Button>
                <Button variant='outline' size='sm' className='gap-1'>
                    <span className='bg-purple-500 rounded-full w-3 h-3'></span>
                    <span>Electro</span>
                </Button>
                <Button variant='outline' size='sm' className='gap-1'>
                    <span className='bg-green-500 rounded-full w-3 h-3'></span>
                    <span>Dendro</span>
                </Button>
                <Button variant='outline' size='sm' className='gap-1'>
                    <span className='bg-cyan-500 rounded-full w-3 h-3'></span>
                    <span>Cryo</span>
                </Button>
                <Button variant='outline' size='sm' className='gap-1'>
                    <span className='bg-amber-500 rounded-full w-3 h-3'></span>
                    <span>Geo</span>
                </Button>
            </TabsContent>

            <TabsContent value='weapon' className='flex flex-wrap gap-2'>
                <Button variant='outline' size='sm'>
                    Sword
                </Button>
                <Button variant='outline' size='sm'>
                    Claymore
                </Button>
                <Button variant='outline' size='sm'>
                    Polearm
                </Button>
                <Button variant='outline' size='sm'>
                    Catalyst
                </Button>
                <Button variant='outline' size='sm'>
                    Bow
                </Button>
            </TabsContent>

            <TabsContent value='rarity' className='flex flex-wrap gap-2'>
                <Button variant='outline' size='sm' className='gap-1'>
                    <span className='text-amber-400'>★★★★★</span>
                    <span>5-Star</span>
                </Button>
                <Button variant='outline' size='sm' className='gap-1'>
                    <span className='text-purple-400'>★★★★</span>
                    <span>4-Star</span>
                </Button>
            </TabsContent>
        </Tabs>
    )
}
