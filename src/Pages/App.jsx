import Footer from "../Elements/Footer";
import Header from "../Elements/Header";
import ShowNotes from "../Fragments/ShowNotes";

export default function App() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="min-w-[500px] pt-5 pb-10 shadow-lg shadow-slate-200">
        <Header />
        <ShowNotes />
        <Footer />
      </div>
    </div>
  );
}
