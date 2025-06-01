        document.querySelector('nav button').addEventListener('click', () => {
            const navLinks = document.querySelector('nav .hidden');
            navLinks.classList.toggle('hidden');
            navLinks.classList.toggle('flex');
            navLinks.classList.toggle('flex-col');
            navLinks.classList.toggle('absolute');
            navLinks.classList.toggle('bg-black');
            navLinks.classList.toggle('w-full');
            navLinks.classList.toggle('left-0');
            navLinks.classList.toggle('p-4');
            navLinks.classList.toggle('top-16');
        });