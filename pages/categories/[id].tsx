import { useRef, useEffect } from 'react';
import { Footer } from '@/components';
import Head from 'next/head';

const Category = ({ scrolled, setScrolled, id }: any) => {
    const ref = useRef<HTMLDivElement>(null)
    useEffect(() => {
        setScrolled(false)
        const handleElementScroll = () => {
            if (ref.current?.scrollTop !== undefined) {
                if (ref.current?.scrollTop > 5) {
                    setScrolled(true)
                }
                else {
                    setScrolled(false)
                }
            }
        }

        ref.current?.addEventListener('scroll', handleElementScroll)

        return () => {
            ref.current?.removeEventListener('scroll', handleElementScroll)
        }
    }, [])
    return (
        <>
            <Head>
                <title>LUXICON</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/icon.svg" />
            </Head>
            <main className={`w-full h-[100vh] z-0 relative`}>
                <div className='absolute w-full h-full top-0 left-0 z-40 overflow-scroll home-wrapper' ref={ref}>
                    <div className='w-full h-[100vh]'>{id}</div>
                    <div className='w-full h-[100vh]'>s1</div>
                    <div className='w-full h-[100vh]'>s1</div>
                    <div className='w-full h-[100vh]'>s1</div>
                    <div className='w-full bg-[#363636]'>
                        <Footer />
                    </div>
                </div>
            </main>
        </>
    )
}
export const getServerSideProps = async (context: any) => {
    const { id } = context.query
    return {
        props: {
            id
        }
    }
}

export default Category