import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
    children: React.ReactNode;
    className?: string;
}

const Layout = ({children,className}:LayoutProps) => {
    return (
        <>
            <div className={className}>
                <Header/>
                <main className="contain mx-auto min-h-[95vh]">{children}</main>
                <Footer/>
            </div>
        </>
    )
}

export default Layout;