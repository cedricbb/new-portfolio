import {BiEnvelope, BiGlobe, BiMap, BiMessageDetail, BiPhone, BiTime} from "react-icons/bi";

export default function Contact() {
    return (
        <div className="px-[8%] lg:px-[16%] py-15 text-white">
            <div className="grid lg:grid-cols-2 gap-12 w-full">
                <div className="bg-gray-500/5 p-8 rounded-xl shadow-lg">
                    <h2 className='text-4xl font-unbounded font-normal text-primary mb-4'>Let's work together</h2>
                    <p className="text-sm text-gray-400 my-8">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet assumenda eligendi et expedita sed.
                    </p>
                    <form action="" className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input type="text" placeholder='First Name' className='w-full bg-[#0E0F12] border border-gray-700 rounded-lg px-4 py-4 text-sm focus:outline-none focus:border-[var(--color-primary)] transition-all duration-500'/>
                            <input type="text" placeholder='Last Name' className='w-full bg-[#0E0F12] border border-gray-700 rounded-lg px-4 py-4 text-sm focus:outline-none focus:border-[var(--color-primary)] transition-all duration-500'/>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input type="email" placeholder='Email Adress' className='w-full bg-[#0E0F12] border border-gray-700 rounded-lg px-4 py-4 text-sm focus:outline-none focus:border-[var(--color-primary)] transition-all duration-500'/>
                            <input type="tel" placeholder='Phone Number' className='w-full bg-[#0E0F12] border border-gray-700 rounded-lg px-4 py-4 text-sm focus:outline-none focus:border-[var(--color-primary)] transition-all duration-500'/>
                        </div>
                        <select className='w-full bg-[#0E0F12] border border-gray-700 rounded-lg px-4 py-4 text-sm focus:outline-none focus:border-[var(--color-primary)] transition-all duration-500 appearance-none'>
                            <option>Select a service</option>
                            <option>Web Development</option>
                            <option>Mobile Development</option>
                            <option>SEO Optimization</option>
                        </select>
                        <textarea rows={5} placeholder='Type your message here' className='w-full bg-[#0E0F12] border border-gray-700 rounded-lg px-4 py-4 text-sm focus:outline-none focus:border-[var(--color-primary)] transition-all duration-500'></textarea>
                        <button type='submit' className='bg-[var(--color-primary)] hover:bg-white text-black px-6 py-3 mt-5 rounded-lg font-semibold transition-all duration-500 cursor-pointer'>Send Message</button>
                    </form>
                </div>
                <div className="flex flex-col space-y-6 justify-center">
                    <div className="flex items-center space-x-4 border-b border-gray-600 pb-5">
                        <span className="bg-[#1A1B1F] p-4 border border-primary rounded-lg text-primary hover:border-white hover:text-white transition-all duration-500">
                            <BiPhone size={24}/>
                        </span>
                        <div>
                            <p className="text-sm text-gray-400">Phone</p>
                            <p className="font-medium">(+33) 7 89 50 21 38</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4 border-b border-gray-600 pb-5">
                        <span className="bg-[#1A1B1F] p-4 border border-primary rounded-lg text-primary hover:border-white hover:text-white transition-all duration-500">
                            <BiEnvelope size={24}/>
                        </span>
                        <div>
                            <p className="text-sm text-gray-400">Email</p>
                            <p className="font-medium">cedric.billard1709@proton.me</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4 border-b border-gray-600 pb-5">
                        <span className="bg-[#1A1B1F] p-4 border border-primary rounded-lg text-primary hover:border-white hover:text-white transition-all duration-500">
                            <BiMap size={24}/>
                        </span>
                        <div>
                            <p className="text-sm text-gray-400">Address</p>
                            <p className="font-medium">2B Rue Beethoven 69200 Vénissieux</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4 border-b border-gray-600 pb-5">
                        <span className="bg-[#1A1B1F] p-4 border border-primary rounded-lg text-primary hover:border-white hover:text-white transition-all duration-500">
                            <BiTime size={24}/>
                        </span>
                        <div>
                            <p className="text-sm text-gray-400">Working Hours</p>
                            <p className="font-medium">Mon - Fri: 19:00 - 23:00</p>
                            <p className="font-medium">Sat: 10:00 - 14:00</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4 border-b border-gray-600 pb-5">
                        <span className="bg-[#1A1B1F] p-4 border border-primary rounded-lg text-primary hover:border-white hover:text-white transition-all duration-500">
                            <BiMessageDetail size={24}/>
                        </span>
                        <div>
                            <p className="text-sm text-gray-400">WhatsApp</p>
                            <p className="font-medium">(+33) 7 89 50 21 38</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-4 border-b border-gray-600 pb-5">
                        <span className="bg-[#1A1B1F] p-4 border border-primary rounded-lg text-primary hover:border-white hover:text-white transition-all duration-500">
                            <BiGlobe size={24}/>
                        </span>
                        <div>
                            <p className="text-sm text-gray-400">Website</p>
                            <p className="font-medium">https://cedricbillard-dev.fr</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
