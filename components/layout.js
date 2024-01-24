import Header from "./header";
import Footer from "./footer";

 // parameters: children    
 export default function Layout({children}){
    return (
        <>
            <Header />
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