import Link from 'next/link';   
import DarkModeToggleButton from './dark-mode-toggle-button';

// Link href="link" className="mr-5 hover:text-gray-900"이런식으로 함께! a 태그 하지말자!
export default function Header() {
    return (
        <div>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        {/* 이미지 컨테이너 */}
                        <div className="macbook-container">
                            <img 
                                src="/icons/mac.png" 
                                alt="Mac Closed" 
                                className="mac-closed"
                            />
                            <img 
                                src="/icons/mac2.png" 
                                alt="Mac Open" 
                                className="mac-open"
                            />
                        </div>
                        <span className="ml-3 text-xl">DOHYEONG LEE</span>
                    </Link>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <Link href="/" className="mr-5 hover:text-gray-900">
                            HOME
                    </Link>
                    <Link href="/projects" className="mr-5 hover:text-gray-900">
                            PROJECTS
                    </Link>
                    <Link href="https://github.com/puretension" className="mr-5 hover:text-gray-900">
                            GITHUB 
                    </Link>
                    <Link href="https://open.kakao.com/o/sOj6HP5f" className="mr-5 hover:text-gray-900">
                            CONTACT 
                    </Link>
                    </nav>
                    <DarkModeToggleButton/>
                </div>
            </header>
        </div>
    );
}
