"use client";

const MenuButton = () => {
    return (
        // The border color is now `border-current`
        <div className='bg-inherit border-2 border-current px-2 rounded-2xl flex flex-row items-center justify-center gap-2 py-1'>
            
            {/* The inner circle's border is also `border-current` */}
            <div className='bg-inherit border border-current rounded-full h-6 w-6 flex flex-col gap-0.5 items-center justify-center'>
                
                {/* The hamburger lines' background is now `bg-current` */}
                <div className='h-0.5 w-3 rounded-2xl bg-current' />
                <div className='h-0.5 w-3 rounded-2xl bg-current' />
                <div className='h-0.5 w-3 rounded-2xl bg-current' />
            </div>
            
            {/* Removed `text-white` so it inherits the color */}
            <div className="font-bold cursor-pointer">Menu</div>
        </div>
    )
}

export default MenuButton;