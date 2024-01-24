import Animation from "./animation";
import Link from 'next/link';

export default function Hero() {
    return (
            <>
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-6xl text-4xl mb-6 font-light text-gray-900 sm:leading-tight leading-tight">
                            안녕하세요!
                            <br/>
                            <span className="font-bold">Developer</span>
                            <br/>
                            <span className="font-bold">이도형</span>
                            입니다.
                        <br className="hidden lg:inline-block"/>
                        </h1>
                        <p className="sm:text-xl text-sm mb-8 sm:leading-relaxed sm:text-left text-center">저는 개발을 도구적 관점으로 접근합니다. 비즈니스 모델을 제품에 온전히 담아내기를 중시하며 그 과정에서 사용하려는 기술의 존재 이유를 한번 더 고민합니다.    </p>
                        <div className="flex justify-center">
                            <Link href="/projects" 
                            className="btn-project">
                                PROJECTS
                            </Link>
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    </div>
                </>
    );
}