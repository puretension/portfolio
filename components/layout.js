import Header from "./header";
import Footer from "./footer";

 // parameters: children    
 export default function Layout({children}){
    return (
        <div className="bg-primary">
            <Header />
            <div>{children}</div>
            <Footer />
        </div>
    );
}

// const Layout = ((children) => {
//     return (
//         <div>
//                 <div>{children}</div>
//         </div>
//     );
// })