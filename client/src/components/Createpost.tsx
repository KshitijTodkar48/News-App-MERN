import { useState } from 'react'

const Createpost = () => {
  const [heading, setHeading] = useState('');
  const [description, setDescription] = useState('');

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3000/createPost`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          heading,
          description
        })
      });
      const data = await response.json();  
      alert(data?.message);
    } catch (error) {
      alert("Backend server not running. " + error);
    }
  }

  return (
    <div className="flex justify-center h-screen items-center bg-sky-200 p-2">
        <form
         onSubmit={handleFormSubmit}
         className="flex flex-col justify-center items-center gap-5 h-1/2 w-1/3 shadow-md rounded-md bg-white min-h-[330px] min-w-[280px]"
        >
          <div className="w-full flex justify-center">
            <input type="text"
              placeholder="Enter news headline"
              className="border rounded-md px-5 py-[7px] text-xl w-[90%]"
              required      
              onChange = {(e) => { setHeading(e.target.value); }} 
            />
          </div>
          <div className="w-full flex justify-center">
          <textarea 
            id="description" 
            className="border rounded-md px-5 py-[7px] text-xl h-40 w-[90%]"
            required
            style={{ resize: 'none' }}
            placeholder="Enter description"
            onChange={(e) => setDescription(e.target.value)}
          />
          </div>
          <div className="w-full flex justify-center">
            <button type="submit" className="bg-blue-700 text-white px-6 py-[6px] text-lg rounded-md hover:bg-blue-600 w-[90%]"> Publish news </button>
          </div>
        </form>
    </div>
  )
}

export default Createpost