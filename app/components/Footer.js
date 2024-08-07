import Link from 'next/link';

export default function NavBar(){
  return (    

<footer class="bg-black shadow dark:bg-gray-900">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <div class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src="images/logo.png" class="h-8" alt="Flowbite Logo" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">La Cave Poker</span>
            </div>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <Link href="/home" class="hover:underline me-4 md:me-6">Home</Link>
                </li>
                <li>
                    <Link href="/about" class="hover:underline me-4 md:me-6">About</Link>
                </li>
                <li>
                    <Link href="/services" class="hover:underline me-4 md:me-6">Services</Link>
                </li>
                <li>
                    <Link href="/contact" class="hover:underline">Contact</Link>
                </li>
            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://flowbite.com/" class="hover:underline">La Cave Poker™</a>. All Rights Reserved.</span>
    </div>
</footer>

  )
}