import Header from "./header";
import Footer from "./footer";

 // parameters: children    
 export default function Layout({children}){
    return (
        <>
            <Header />
            <h1>레이아웃</h1>
            <div>{children}</div>
            <Footer />
        </>
    );
}

// const Layout = ((children) => {
//     return (
//         <div>
//                 <div>{children}</div>
//         </div>
//     );
// })