import Layout from "../components/layout";
import Head from 'next/head';
import { API_KEY, DATABASE_ID } from '../config/index';
import ProjectItem from "../components/projects/project-item";


// build time에 getStaticProps() 함수가 실행되어서 props를 반환하고
// 그 props를 이용해서 페이지를 그린다.

export default function Projects({projects}) {

    console.log(projects)

    return (
        <Layout >
            <div className="flex flex-col items-center justify-center min-h-screen px-5 mb-10">
                <Head>
                <title>이도형의 포트폴리오</title>
                <meta name="description" content= "just me" />
                <link rel="icon" href="/favicon.ico" />
                </Head>
                <h1 className="text-4xl font-bold sm: text-6xl">
                    Projects
                    <span className="pl-4 white"></span>
                </h1>
                <div className="grid grid-cols-1 m-4 md:grid-cols-2 py-10 m-6 gap08 w-full"> 
                    {projects.results.map((aProject) => (
                        <div key={aProject.id} style={{ padding: '10px' }}> {/* key 속성을 여기에 적용 */}
                            <ProjectItem data={aProject}/>
                        </div>
                    ))}
                </div>

            </div>
        </Layout>
    );
}

// build time에 실행되는 함수
export async function getStaticProps() {

    console.log(API_KEY);

    const options = {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'Notion-Version': '2022-06-28',
          'Content-type': 'application/json',
            'authorization': `Bearer ${API_KEY}`
        },
        body: JSON.stringify({page_size: 100})
      };
      
      const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options)
      
      const projects = await res.json()

   // 날짜 파싱 및 내림차순 정렬
projects.results.sort((a, b) => {
    const aDate = a.properties["기간"].rich_text[0]?.plain_text.split('.');
    const bDate = b.properties["기간"].rich_text[0]?.plain_text.split('.');
    const aYear = parseInt(aDate[0], 10) + 2000; // '23' -> 2023
    const bYear = parseInt(bDate[0], 10) + 2000;
    const aMonth = parseInt(aDate[1], 10);
    const bMonth = parseInt(bDate[1], 10);

    if (aYear !== bYear) return bYear - aYear; // 연도에 대한 내림차순 정렬
    return bMonth - aMonth; // 월에 대한 내림차순 정렬
});


      const projectNames = projects.results.map(project => {
        if (project.properties["한줄 소개"].rich_text.length > 0) {
            return project.properties["한줄 소개"].rich_text[0].text.content;
        } else {
            return "한줄 소개 등록 예정입니다 조금만 기다려 주세요!"; 
        }
    });
    
      console.log(projectNames);

    return {
      // will be passed to the page component as props
      // getStaticProps() 메소드를 사용한다면 revalidate 로 데이터 변경시 갱신가능!
      // revalidate: 1 // 데이터 변경이 있으면 갱신 1초 마다
        props: {
            projects
        }
    }
}

// const Projects = () => {
//     return (
//         <div>
//             <h2>프로젝트</h2>
//         </div>
//     );
// }