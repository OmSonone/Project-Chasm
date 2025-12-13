import { Heart } from 'lucide-react';

export function SiteFooter() {
  return (
    <footer className='border-t bg-card text-card-foreground'>
      <div className='container py-8 text-center'>
        <div className='mx-auto max-w-3xl space-y-4'>
          <p className='text-sm text-muted-foreground'>
            Genshin Impact™ is a registered trademark of hoYoverse Co., Ltd.
            This site is not affiliated with or endorsed by hoYoverse. Images
            and data © hoYoverse Co., Ltd.
          </p>
          <p className='text-sm text-muted-foreground'>
            © {new Date().getFullYear()} Project Chasm. All rights reserved.
          </p>
          <div className='flex items-center justify-center gap-1 text-sm'>
            <span>Made with</span>
            <Heart className='h-4 w-4 fill-red-500 text-red-500' />
            <span>by Project Chasm Team</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
