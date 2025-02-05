import { useState } from 'react'
import './App.css'

interface Programmer {
  name: string;
  language: string;
}

class Person implements Programmer {
  name: string;
  language: string;

  constructor(name: string, language: string) {
    this.name = name;
    this.language = language;
  }

  introduce(): string {
    return `Hello, my name is ${this.name}, I learn ${this.language}.`;
  }

  processData<T>(data: T): string {
    return `Processed data: ${JSON.stringify(data)}`;
  }
}

function App() {
  const [message, setMessage] = useState<string>('');
  const programmer = new Person("Aleks", "TypeScript");
  
  const handleIntroduce = () => {
    setMessage(programmer.introduce());
  }

  const handleProcessData = () => {
    setMessage(programmer.processData<{ age: number, city: string }>({
      age: 21,
      city: "Kyiv",
    }));
  }

  return (
    <>
      <div>
        <button onClick={handleIntroduce}>Introduce</button>
        <button onClick={handleProcessData}>Process data</button>
        <p>{message}</p>
      </div>
    </>
  )
}

export default App
