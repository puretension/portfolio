import Image from "next/image";

export default function ProjectItem({data}) {
    const title = data.properties["이름"].title
        .map(textItem => textItem.plain_text)
        .join('');
    const github = data.properties["Github"].url || "깃허브 링크 없음";
    const projectUrl = data.properties["URL"].url || "배포 링크 없음";
    const description = data.properties["한줄 소개"].rich_text[0]?.plain_text || "설명 없음";
    const imgSrc = data.cover.file?.url ||"/default-image.jpg";
    const tags = data.properties["역할"].multi_select;

    const workPeriod = data.properties["기간"].rich_text[0]?.plain_text || "기간 정보 없음";

    // 색상명과 Tailwind CSS 색상 클래스 매핑
    const colorMapping = {
        gray: 'gray-500',
        red: 'red-500',
        green: 'green-500',
        blue: 'blue-500',
        yellow: 'yellow-500',
        pink: 'pink-500',
        orange: 'orange-500',
        purple: 'purple-500',
        brown: 'amber-500' // Tailwind CSS에는 'brown'이 없기 때문에 가까운 색상 사용
    };

    return (
        <div className="project-card">
           <Image
                className="rounded-t-xl" // 이미지를 둥글게 만들어주는 클래스
                src={imgSrc} 
                alt="cover image" 
                width={1600} // 픽셀 단위의 숫자 값으로 변경
                height={900} 
                quality={100}
            />

            <div className="p-4 flex flex-col">
                <h1 className="text-2xl font-bold">{title}</h1>
                <h3 className="mt-4 text-xl">{description}</h3>
                <a href={github}>깃허브로 이동</a>
                <a href={projectUrl}>배포 URL로 이동</a>
                <p className="my-1 ">
                    작업기간 : {workPeriod}
                </p>
                <div className="flex items-start mt-2">
                {tags.map((tag) => (
                    <h1 
                        key={tag.id}
                        className={`px-2 py-1 mr-2 rounded-md text-white w-30 bg-${colorMapping[tag.color]}`}
                    >
                        {tag.name}
                    </h1>
                ))}
            </div>

            </div>
        </div>
    );
}
