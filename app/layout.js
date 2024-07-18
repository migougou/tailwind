import NavBar from './components/NavBar';
import Footer from './components/Footer';
import './globals.css';  // Assurez-vous que le chemin est correct

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col min-h-screen">
          <NavBar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer /> 
        </div>
      </body>
    </html>
  );
}