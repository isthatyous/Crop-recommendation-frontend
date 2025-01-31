import Link from "next/link";

export default function Home() {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-white">
    {/* Blurred background */}
    <div className="absolute inset-0 bg-gray-200 blur-sm"></div>
  
    {/* Card with Start Button */}
    <div className="relative z-10 text-center">
      <h1 className="text-5xl font-bold text-gray-700 mb-6">
        Welcome
      </h1>
      <div className="card bg-base-100 w-[500px] shadow-xl flex items-center justify-center p-6">
        <button className="btn bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-full shadow-md">
          <Link href= "/Home">
          
          Start ->
          </Link>
        </button>
      </div>
    </div>
  </div>
  

    
  );
}
