import Image from 'next/image';
import { Anton } from 'next/font/google';

const anton = Anton({weight:"400",subsets:["latin"]});

export default function Home() {
  return (
    <main className="max-m-[1200px] mx-auto">
      <div className='relative'>
        <Image src="/disaster-girl.jpg" width={1200} height={900}alt='Disaster Girl'/>
      <div className='absolute' style={{
        top:760, left:100, width:1000, height:100, border:"2px solid red"
      }}>
        < div className={`${anton.className}text-center text-white`} style={{
          fontSize:100, lineHeight: "1.1"
        }}>Really?</div>
      </div>
      </div>

    </main>
  )
}
