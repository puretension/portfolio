import Animation from "./animation";
import Link from 'next/link';

export default function Hero() {
    return (
        <>
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col 
            md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                {/* 이미지 삽입 */}
                <img 
                    src="https://raw.githubusercontent.com/puretension/portfolio/main/profile.jpg" 
                    alt="개발자 이도형" 
                    style={{ width: '300px', height: 'auto',borderRadius: '5%' }} 
                />
                 <br/>
                <h1 className="custom-leading text-5xl mb-7 title-font font-medium text-gray-900">
                    <span className="mb-4 inline-block">안녕하세요!</span>
                    <br/>
                    <span className="font-bold">개발자 이도형</span> 입니다.
                    <br className="hidden lg:inline-block"/>
                </h1>
                <p className="sm:text-xl text-sm mb-8 sm:leading-10 mb-10">
                    저는 개발을 도구적 관점으로 접근합니다.
                    <br/>
                    비즈니스 모델을 제품에 온전히 담아내기를 중시하며 
                    <br/>
                    그 과정에서 사용하려는 기술의 존재 이유를 
                    <br/>
                    한번 더 고민합니다.
                </p>
                <div className="flex justify-center">
                    <Link href="/projects" className="btn-project">
                        SHOW PROJECTS
                    </Link>
                </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <Animation />
            </div>
        </>
    );
}
